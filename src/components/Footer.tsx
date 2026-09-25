import { ArrowRight, Building2, Phone, Mail, MapPin } from "lucide-react";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  EMAIL,
  PHONE_DISPLAY,
  mailLink,
  openWhatsApp,
  telLink,
  waLink,
} from "../lib/site";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  XIcon,
  WhatsAppIcon,
} from "./SocialIcons";

const quickLinks = [
  ["Home", "#home"],
  ["Properties", "#properties"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
];

const serviceLinks = [
  "Property Sales",
  "Property Management",
  "Real Estate Advisory",
  "Property Valuation",
  "Investment Consulting",
];

export default function Footer() {
  const socials = [
    { Icon: InstagramIcon, label: "Instagram" },
    { Icon: FacebookIcon, label: "Facebook" },
    { Icon: LinkedinIcon, label: "LinkedIn" },
    { Icon: XIcon, label: "X" },
    { Icon: WhatsAppIcon, label: "WhatsApp" },
  ];

  return (
    <>
      {/* CTA band */}
      <section className="relative overflow-hidden bg-[#2596be]">
        <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-2xl leading-tight font-extrabold text-white sm:text-3xl">
              Your Dream Property Is Closer
              <br />
              Than You Think.
            </h3>
            <p className="mt-2 text-sm text-[#eaf7fb]">
              Let CityScape help you find a property that matches your vision.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#properties"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1f7fa7] transition hover:bg-[#edf8fc]"
            >
              Explore Properties
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <button
              onClick={() =>
                openWhatsApp(
                  "Hello CityScape! I'd like to contact you about a property.",
                )
              }
              className="flex items-center gap-2 rounded-full border border-white/70 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#111114] pt-16 pb-8 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#home" className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2596be] text-white">
                  <Building2 className="h-5 w-5" />
                </span>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  City<span className="text-[#2596be]">Scape</span>
                </span>
              </a>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed">
                Premium real estate solutions for modern living and smart
                investments. Trusted by over 4,000 clients worldwide.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {socials.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href={waLink(
                      `Hi CityScape, I'd like to connect (via ${label}).`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-[#2596be] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-white">
                QUICK LINKS
              </h4>
              <ul className="mt-5 space-y-2.5">
                {quickLinks.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[13px] transition hover:pl-1 hover:text-[#2596be]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-white">
                SERVICES
              </h4>
              <ul className="mt-5 space-y-2.5">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <button
                      onClick={() =>
                        openWhatsApp(`Hi CityScape, I'm interested in: ${s}.`)
                      }
                      className="text-left text-[13px] transition hover:pl-1 hover:text-[#2596be]"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-white">
                CONTACT
              </h4>
              <ul className="mt-5 space-y-4 text-[13px]">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2596be]" />
                  <a href={telLink} className="hover:text-[#2596be]">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#2596be]" />
                  <a href={mailLink} className="hover:text-[#2596be]">
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2596be]" />
                  <span>
                    {ADDRESS_LINE_1}
                    <br />
                    {ADDRESS_LINE_2}
                  </span>
                </li>
              </ul>
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello CityScape! I'd like to BOOK an appointment with the owner.",
                  )
                }
                className="mt-5 flex items-center gap-2 rounded-lg bg-[#ce1a1a] px-4 py-2.5 text-[11px] font-bold text-white transition hover:brightness-95"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                LOCATION
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12px]">
            <p>© {new Date().getFullYear()} CityScape. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#home" className="hover:text-[#2596be]">
                Privacy Policy
              </a>
              <a href="#home" className="hover:text-[#2596be]">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
