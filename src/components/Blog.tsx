import { ArrowRight } from "lucide-react";
import { posts, openWhatsApp } from "../lib/site";

export default function Blog() {
  return (
    <section id="blog" className="bg-[#f7f8fa] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#2596be]">
              INSIGHTS & INSPIRATION
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              From the CityScape Journal
            </h2>
          </div>
          <button
            onClick={() =>
              openWhatsApp(
                "Hi CityScape, I'd like to receive your latest real estate insights.",
              )
            }
            className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 transition hover:border-[#2596be] hover:text-[#2596be]"
          >
            View All Articles
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-34px_rgba(15,23,42,0.5)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-48 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 rounded-lg bg-[#2596be] px-3 py-1.5 text-center text-white shadow-lg shadow-[#2596be]/30">
                  <p className="text-base leading-none font-extrabold">
                    {p.day}
                  </p>
                  <p className="mt-0.5 text-[9px] font-bold tracking-wider">
                    {p.month}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold tracking-[0.15em] text-[#2596be] uppercase">
                  {p.category}
                </p>
                <h3 className="mt-2 text-[15px] leading-snug font-bold text-slate-900 transition group-hover:text-[#2596be]">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-slate-500">
                  {p.excerpt}
                </p>
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hi CityScape, I read "${p.title}" and would like to discuss it further.`,
                    )
                  }
                  className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-[#2596be] transition hover:gap-2.5"
                >
                  Read Article
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
