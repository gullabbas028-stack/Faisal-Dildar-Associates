import { ArrowRight, Building2, KeyRound, HeartHandshake } from "lucide-react";
import { openWhatsApp } from "../lib/site";

const services = [
  {
    Icon: Building2,
    title: "Property Sales",
    text: "Find exceptional residential and commercial properties tailored to your goals, with full market insight.",
    cta: "Explore Sales",
    msg: "Hi CityScape, I'm interested in your Property Sales service.",
  },
  {
    Icon: KeyRound,
    title: "Property Management",
    text: "Professional management services designed to protect and maximize your investment year after year.",
    cta: "Learn More",
    msg: "Hi CityScape, I'd like details about your Property Management service.",
  },
  {
    Icon: HeartHandshake,
    title: "Real Estate Advisory",
    text: "Expert guidance for strategic real-estate investments, valuations and long-term portfolio growth.",
    cta: "Get Advice",
    msg: "Hi CityScape, I'd like Real Estate Advisory / consultation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f7f8fa] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#2596be]">
              OUR REALTY SERVICES
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-slate-900">
              Everything You Need,
              <br />
              <span className="text-[#2596be]">Under One Roof</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              From finding your dream property to managing your investment, our
              experts are here to help at every step.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {services.map(({ Icon, title, text, cta, msg }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1.5 hover:border-[#dceef5] hover:shadow-[0_24px_50px_-28px_rgba(37,150,190,0.6)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2596be] text-white shadow-lg shadow-[#2596be]/30">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-slate-500">
                  {text}
                </p>
                <button
                  onClick={() => openWhatsApp(msg)}
                  className="mt-5 flex items-center gap-2 rounded-lg bg-[#2596be] px-4 py-2.5 text-[11px] font-bold text-white transition hover:bg-[#1f7fa7]"
                >
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
