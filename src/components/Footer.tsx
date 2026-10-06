import { Phone, Mail, MapPin } from "lucide-react";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  EMAIL,
  PHONE_DISPLAY,
  mailLink,
  openWhatsApp,
  telLink,
} from "../lib/site";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  TikTokIcon,
  YouTubeIcon,
} from "./SocialIcons";

const quickLinks = [
  ["Home", "#home"],
  ["Properties", "#properties"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

const serviceLinks = [
  "Property Sales",
  "Property Management",
  "Real Estate Advisory",
  "Property Valuation",
  "Investment Consulting",
];

const logos = [
  { src: "/images/logo1.png", alt: "Partner logo 1" },
  { src: "/images/logo2.png", alt: "Partner logo 2" },
  { src: "/images/logo3.png", alt: "Partner logo 3" },
  { src: "/images/logo4.png", alt: "Partner logo 4" },
  { src: "/images/logo5.png", alt: "Partner logo 5" },
];

export default function Footer() {
  const socials = [
    {
      Icon: InstagramIcon,
      label: "Instagram",
      href: "https://www.instagram.com/faisaldildarassociates?stkn=bHdid3locTB6OXps",
    },
    {
      Icon: FacebookIcon,
      label: "Facebook",
      href: "https://www.facebook.com/share/18NLAnyGUf/",
    },
    {
      Icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://www.facebook.com/share/18NLAnyGUf/",
    },
    {
      Icon: TikTokIcon,
      label: "TikTok",
      href: "https://www.tiktok.com/@faisaldildarassociates?_r=1&_t=ZS-9A5iDyapWk8",
    },
    {
      Icon: YouTubeIcon,
      label: "YouTube",
      href: "https://www.facebook.com/share/18NLAnyGUf/",
    },
  ];

  return (
    <>
      <section className="overflow-hidden bg-[#2596be] py-8 sm:py-10">
        <div className="logo-marquee__track flex w-max hover:[animation-play-state:paused]">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={copyIndex}
              aria-hidden={copyIndex > 0}
              className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
            >
              {logos.map(({ src, alt }) => (
                <div
                  key={`${copyIndex}-${src}`}
                  className="flex h-16 w-36 items-center justify-center rounded-xl border border-white/30 bg-white/95 p-3 shadow-sm transition duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 sm:h-20 sm:w-44 sm:p-4"
                >
                  <img src={src} alt={alt} className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#111114] pt-16 pb-8 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#home" className="flex items-center gap-2.5">
                <img
                  src="/images/faisal_dildar_associates_logo.svg"
                  alt="Faisal Dildar Associates"
                  className="h-20 w-20 object-contain"
                />
              </a>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed">
               Explore exceptional properties, trusted opportunities, and expert real estate guidance with Faisal Dildar Associates. Your next property journey starts here.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
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
              <a
                href="https://maps.app.goo.gl/yef8rgMyAPq875fs8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 rounded-lg bg-[#ce1a1a] px-4 py-2.5 text-[11px] font-bold text-white transition hover:brightness-95"
              >
                <MapPin className="h-3.5 w-3.5" />
                LOCATION
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12px]">
            <p>© {new Date().getFullYear()} faisaldildar. All rights reserved.</p>
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
