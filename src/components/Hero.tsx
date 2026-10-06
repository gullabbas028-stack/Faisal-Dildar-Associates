import { useState } from "react";
import { ArrowRight, Search, MapPin, Home, Play } from "lucide-react";
import { openWhatsApp } from "../lib/site";

const types = ["Apartment", "Villa", "Penthouse", "Office", "Land"];

export default function Hero() {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("Apartment");
  const [location, setLocation] = useState("");

  const search = () => {
    openWhatsApp(
      `Hi CityScape 👋\nI'm searching for a property:\n• Keyword: ${
        keyword || "Any"
      }\n• Type: ${type}\n• Location: ${
        location || "Any"
      }\nPlease share available options.`,
    );
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f7f8fa] to-white">
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-[#2596be]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#2596be]">
             {/*  uper */}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.08] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
             Building Dreams,
              <br />
            <span className="text-[#2596be]">Faisal Dildar Associates </span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
             Explore exceptional properties, trusted opportunities, and expert real estate guidance with Faisal Dildar Associates. Your next property journey starts here.

            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#properties"
                className="group flex items-center gap-2 rounded-full bg-[#2596be] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#2596be]/30 transition hover:bg-[#1f7fa7]"
              >
                Explore Properties
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-[#2596be] hover:text-[#2596be]"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Learn More
              </a>
            </div>
          </div>

          {/* Collage */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 overflow-hidden rounded-2xl">
                <img
                  src="/images/hero-main.jpg"
                  alt="Luxury villa"
                  className="h-[280px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[360px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/hero-apartment.jpg"
                    alt="Modern apartments"
                    className="h-[134px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[174px]"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/hero-pool.jpg"
                    alt="Resort villa"
                    className="h-[134px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[174px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search filter */}
        <div className="mt-12 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto]">
            <Field label="Keyword">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search property..."
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </Field>
            <Field label="Type">
              <Home className="h-4 w-4 text-slate-400" />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full cursor-pointer appearance-none bg-transparent text-sm text-slate-800 outline-none"
              >
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field label="Location">
              <MapPin className="h-4 w-4 text-slate-400" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or location"
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </Field>
            <div className="flex items-end">
              <button
                onClick={search}
                className="flex h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#2596be] px-8 text-sm font-semibold text-white shadow-lg shadow-[#2596be]/30 transition hover:bg-[#1f7fa7] lg:w-auto"
              >
                <Search className="h-4 w-4" />
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="lg:border-r lg:border-slate-100 lg:pr-4 lg:last:border-0">
      <label className="text-[11px] font-bold tracking-wide text-slate-500">
        {label}
      </label>
      <div className="mt-1.5 flex h-[46px] items-center gap-2 rounded-lg border border-slate-200 px-3 transition focus-within:border-[#2596be]">
        {children}
      </div>
    </div>
  );
}
