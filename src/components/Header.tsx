import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { openWhatsApp } from "../lib/site";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="home" className="relative z-50">
      {/* Navbar */}
      <div
        className={`sticky top-0 z-50 border-b border-slate-800 bg-[#050505]/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-[0_8px_30px_-12px_rgba(15,23,42,0.7)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="ml-4 flex items-center gap-2.8 mt-3">
            <img
              src="/images/faisal_dildar_associates_logo.svg"
              alt="Faisal Dildar"
              className="h-12 w-auto scale-200 object-contain m-left[5px]"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`relative text-[13px] font-semibold tracking-wide transition ${
                  active === item.href
                    ? "text-[#2596be]"
                    : "text-slate-200 hover:text-[#2596be]"
                }`}
              >
                {item.label}
                {active === item.href && (
                  <span className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#2596be]" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                openWhatsApp(
                  "Hello CityScape! I want to SELL my property. Please guide me through the process.",
                )
              }
              className="group hidden items-center gap-2 rounded-full bg-[#2596be] px-5 py-2.5 text-[12px] font-bold tracking-wide text-white shadow-lg shadow-[#2596be]/30 transition hover:bg-[#1f7fa7] sm:flex"
            >
            CONTACT US
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-slate-800 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-slate-800 bg-[#050505] lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActive(item.href);
                    setOpen(false);
                  }}
                  className="border-b border-slate-800 py-3 text-sm font-semibold text-slate-200 last:border-0 hover:text-[#2596be]"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello CityScape! I want to SELL my property. Please guide me.",
                  )
                }
                className="mt-3 mb-2 flex items-center justify-center gap-2 rounded-full bg-[#2596be] px-5 py-3 text-xs font-bold text-white sm:hidden"
              >
                SELL PROPERTY <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
