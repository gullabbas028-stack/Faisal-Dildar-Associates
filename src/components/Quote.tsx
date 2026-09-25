import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, User } from "lucide-react";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  EMAIL,
  PHONE_DISPLAY,
  mailLink,
  openWhatsApp,
  telLink,
} from "../lib/site";

const propertyTypes = [
  "Select property type",
  "Apartment",
  "Villa",
  "Penthouse",
  "Commercial Space",
  "Land / Plot",
];

export default function Quote() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: propertyTypes[0],
    message: "",
  });

  const set = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      `*New Quote Request — CityScape*\n👤 Name: ${form.name || "-"}\n📧 Email: ${
        form.email || "-"
      }\n📱 Phone: ${form.phone || "-"}\n🏠 Property Type: ${
        form.type === propertyTypes[0] ? "-" : form.type
      }\n📝 Message: ${form.message || "-"}`,
    );
  };

  return (
    <section id="contact" className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[360px] overflow-hidden">
          <img
            src="/images/contact-night.jpg"
            alt="Luxury home at night"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
          <div className="relative flex h-full flex-col justify-end p-8 sm:p-12">
            <span className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-[#a5d3e7]">
              <span className="h-px w-8 bg-[#2596be]" />
              LET'S WORK TOGETHER
            </span>
            <h2 className="mt-4 text-3xl leading-tight font-extrabold text-white sm:text-4xl">
              Ready to Make
              <br />
              Your Next Move?
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              Get in touch with our team and let's find the perfect property for
              you. Response guaranteed within 24 hours.
            </p>
          </div>
        </div>

        {/* Form side */}
        <div className="px-6 py-14 sm:px-10 lg:px-14">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#2596be]">
            REQUEST A CALLBACK
          </p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            Get A Quote
          </h3>

          <form onSubmit={submit} className="mt-7 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Full Name"
                placeholder="John Doe"
                icon={<User className="h-4 w-4 text-slate-400" />}
                value={form.name}
                onChange={(v) => set("name", v)}
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                icon={<Mail className="h-4 w-4 text-slate-400" />}
                value={form.email}
                onChange={(v) => set("email", v)}
              />
              <Input
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                icon={<Phone className="h-4 w-4 text-slate-400" />}
                value={form.phone}
                onChange={(v) => set("phone", v)}
              />
              <div>
                <label className="text-[11px] font-bold tracking-wide text-slate-600">
                  Property Type
                </label>
                <select
                  value={form.type}
                  onChange={(e) => set("type", e.target.value)}
                  className="mt-1.5 h-[46px] w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-[#2596be]"
                >
                  {propertyTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold tracking-wide text-slate-600">
                Message
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Tell us what you're looking for..."
                className="mt-1.5 w-full resize-none rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2596be]"
              />
            </div>

            <button
              type="submit"
              className="group flex items-center gap-2 rounded-lg bg-[#2596be] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#2596be]/30 transition hover:bg-[#1f7fa7]"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-9 grid gap-5 border-t border-slate-100 pt-7 sm:grid-cols-3">
            <ContactItem icon={<Phone className="h-4 w-4" />} href={telLink}>
              {PHONE_DISPLAY}
            </ContactItem>
            <ContactItem icon={<Mail className="h-4 w-4" />} href={mailLink}>
              {EMAIL}
            </ContactItem>
            <ContactItem icon={<MapPin className="h-4 w-4" />}>
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
            </ContactItem>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  placeholder,
  icon,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[11px] font-bold tracking-wide text-slate-600">
        {label}
      </label>
      <div className="mt-1.5 flex h-[46px] items-center gap-2 rounded-lg border border-slate-200 px-3 transition focus-within:border-[#2596be]">
        {icon}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  children,
  href,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eaf7fb] text-[#2596be]">
        {icon}
      </span>
      <p className="text-[12px] leading-relaxed font-medium text-slate-600">
        {children}
      </p>
    </div>
  );
  return href ? (
    <a href={href} className="transition hover:opacity-75">
      {inner}
    </a>
  ) : (
    inner
  );
}
