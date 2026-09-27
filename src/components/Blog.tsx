import { posts } from "../lib/site";

export default function Blog() {
  return (
    <section id="blog" className="bg-[#f7f8fa] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-34px_rgba(15,23,42,0.5)]"
            >
              <div className="flex h-80 items-center justify-center bg-slate-50 p-4 sm:h-96 sm:p-6">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-[15px] leading-snug font-bold text-slate-900 transition group-hover:text-[#2596be]">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
