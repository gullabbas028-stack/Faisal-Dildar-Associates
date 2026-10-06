import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Heart,
  X,
  Phone,
} from "lucide-react";
import { properties, openWhatsApp, type Property } from "../lib/site";
import { WhatsAppIcon } from "./SocialIcons";

const filters = [
  "All",
  "Residential",
  "Commercial",
  "Luxury Villas",
  "Apartments",
] as const;

export default function Properties() {
  const [filter, setFilter] = useState<string>("All");
  const [liked, setLiked] = useState<number[]>([]);
  const [detail, setDetail] = useState<Property | null>(null);

  const list =
    filter === "All"
      ? properties
      : properties.filter((p) => p.category === filter);

  const toggleLike = (id: number) =>
    setLiked((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]));

  return (
    <section id="properties" className="bg-[#111114] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#2596be]">
              PRESTIGE PROPERTY MANAGEMENT
            </p>
            <h2 className="mt-4 max-w-xl text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
              Exceptional Properties,
              <br />
              Professionally Managed.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            A hand-picked portfolio of residences, villas and commercial spaces
            across premium locations.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold transition ${
                filter === f
                  ? "border-[#2596be] bg-[#2596be] text-white shadow-lg shadow-[#2596be]/25"
                  : "border-white/15 text-slate-300 hover:border-[#2596be] hover:text-[#7ebed3]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#18181c] transition hover:-translate-y-1 hover:border-[#2596be]/50"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-md bg-[#2596be]/15 px-3 py-1 text-[10px] font-bold tracking-wide text-[#7ebed3]">
                    {p.tag}
                  </span>
                  <button
                    onClick={() => toggleLike(p.id)}
                    aria-label="Save property"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 transition hover:bg-[#2596be] hover:text-white"
                  >
                    <Heart
                      className={`h-4 w-4 ${liked.includes(p.id) ? "fill-[#2596be] text-[#2596be]" : ""}`}
                    />
                  </button>
                </div>
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-[#2596be]" />
                  {p.location}
                </p>
                <p className="mt-3 text-lg font-extrabold text-[#2596be]">
                  {p.price}
                </p>

                <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-[#2596be]" />
                    {p.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-[#2596be]" />
                    {p.baths} Baths
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="h-4 w-4 text-[#2596be]" />
                    {p.area}
                  </span>
                </div>

                <button
                  onClick={() => setDetail(p)}
                  className="group/btn mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2596be] py-3 text-xs font-bold text-white transition hover:bg-[#1f7fa7]"
                >
                  View Details
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {detail && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setDetail(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setDetail(null)}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-800 hover:bg-[#2596be] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="px-6 pb-6">
              <img
                src={detail.image}
                alt={detail.title}
                className="h-56 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                {detail.title}
              </h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-[#2596be]" />
                {detail.location}
              </p>
              <p className="mt-3 text-2xl font-extrabold text-[#2596be]">
                {detail.price}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  { l: "Bedrooms", v: detail.beds },
                  { l: "Bathrooms", v: detail.baths },
                  { l: "Area", v: detail.area },
                ].map((x) => (
                  <div key={x.l} className="rounded-xl bg-slate-50 py-3">
                    <p className="text-sm font-bold text-slate-900">{x.v}</p>
                    <p className="text-[11px] text-slate-500">{x.l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                A stunning {detail.category.toLowerCase()} property featuring
                premium finishes, smart-home automation, private parking and
                24/7 security. Schedule a private viewing with our team today.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello CityScape 👋\nI want to BOOK a viewing for:\n🏡 ${detail.title}\n📍 ${detail.location}\n💰 ${detail.price}\nPlease confirm availability.`,
                    )
                  }
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-sm font-bold text-white transition hover:brightness-95"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Book on WhatsApp
                </button>
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hi CityScape, I'd like more information about ${detail.title} (${detail.price}).`,
                    )
                  }
                  className="flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  <Phone className="h-4 w-4" />
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
