import { posts } from "../lib/site";

export default function Blog() {
  return (
    <section id="blog" className="bg-[#f7f8fa] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-34px_rgba(15,23,42,0.5)]"
            >
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#2596be]">
                {p.category}
              </p>
              <div className="mt-3">
                <h3 className="text-lg leading-snug font-bold text-slate-900 transition group-hover:text-[#2596be]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {p.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
