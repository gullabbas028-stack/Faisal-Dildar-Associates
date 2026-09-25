import { ArrowRight } from "lucide-react";

const stats = [
  { value: "PARKS &", label: "GREEN AREAS" },
  { value: "SECURITY", label: "SYSTEM" },
  { value: "MODERN", label: "INFRASTRUCTURE" },
  { value: "COMMUNITY", label: "AMENITIES" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f7f8fa] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about-villa.jpg"
                alt="About CityScape"
                className="h-[380px] w-full object-cover sm:h-[460px]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)]">
             
             
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#2596be]">
              ABOUT SOCIETY
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl">
             ALI HOUSING SOCIETY
              <br />
             <span className="text-[#2596be]">INTRODUCTION.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-500">
             Ali Housing Society — A modern residential community offering quality living, secure surroundings, modern infrastructure, green spaces, and convenient amenities at Main Multan Road, Mohlanwal, Lahore.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-1 ${i !== stats.length - 1 ? "sm:border-r sm:border-slate-200" : ""}`}
                >
                  <p className="text-2xl font-extrabold text-[#2596be]">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://www.facebook.com/share/v/19wyWZqdn8/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 flex items-center gap-2 rounded-full bg-[#2596be] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#2596be]/30 transition hover:bg-[#1f7fa7]"
            >
              Watch full video 
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
