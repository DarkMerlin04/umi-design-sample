"use client";

import { useState } from "react";

const services = [
  {
    icon: "🏷️",
    title: "Name banners",
    desc: "Soft-style, aurora-style, or bold ADS-style tags for your profile or shop.",
  },
  {
    icon: "🔷",
    title: "Logos",
    desc: "Simple marks built for small shops, communities, or personal brands.",
  },
  {
    icon: "💧",
    title: "Watermarks",
    desc: "Lightweight signature marks to protect your posted work.",
  },
];

const steps = [
  { title: "Tell me what you need", desc: "Style, size, and where it'll be used." },
  { title: "Pick a reference", desc: "Browse the sample gallery below and link the closest match." },
  { title: "Send the brief", desc: "Colors, text, fonts, and any must-haves." },
  { title: "Confirm & pay", desc: "Send your payment slip with your nickname to join the queue." },
  { title: "Receive your file", desc: "Delivered by your chosen deadline, with one round of small edits." },
];

const prices = [
  { label: "Simple banner", sub: "Soft style, single character", amount: "89฿" },
  { label: "Aurora-style banner", sub: "Gradient background, extra detail", amount: "150฿" },
  { label: "ADS-style banner", sub: "Bold layout, promo-ready", amount: "180฿" },
  { label: "Logo", sub: "2 concepts, 1 revision", amount: "250฿" },
  { label: "Watermark", sub: "Single mark, transparent PNG", amount: "99฿" },
];

const gallery = ["Banner 01", "Banner 02", "Logo 01", "Logo 02", "Watermark 01", "Watermark 02", "Banner 03", "Logo 03"];

const payments = [
  { label: "Bank transfer", value: "000-0-00000-0 (Example Bank)", copy: "000-0-00000-0" },
  { label: "Wallet transfer", value: "08X-XXX-XXXX", copy: "08X-XXX-XXXX" },
];

const rules = [
  "Queue moves in the order payment slips are received.",
  "One round of small edits included; bigger changes may cost extra.",
  "References help, but exact copies of other artists' work won't be made.",
  "Refunds available only before work has started.",
];

function CopyButton({ text }: { text: string }) {
  const [label, setLabel] = useState("Copy");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("Copied!");
    } catch {
      setLabel("Copy failed");
    }
    setTimeout(() => setLabel("Copy"), 1400);
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded-lg bg-white px-3.5 py-2 text-sm font-extrabold text-sky-700 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
    >
      {label}
    </button>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-sky-50 font-sans text-slate-800">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 to-sky-50 px-5 pb-20 pt-16 text-center">
        <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-sky-500 font-bold text-4xl text-white shadow-lg shadow-sky-500/30">
          U
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Umi Design</h1>
        <p className="mx-auto mt-1 max-w-md text-slate-500">
          Handmade banners, logos &amp; watermarks — made calm, made blue.
        </p>
        <span className="mt-4 inline-block rounded-full border border-sky-100 bg-white px-4 py-1.5 text-sm font-bold text-sky-700">
          🌊 Queue open · slots available
        </span>
      </div>

      <main className="mx-auto w-full max-w-3xl px-5 pb-20">
        {/* Services */}
        <section className="mt-14">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wider text-sky-600">
            What I make
          </span>
          <h2 className="text-2xl font-bold text-slate-900">Services</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-sky-100 bg-white p-5">
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-lg text-sky-700">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mt-14">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wider text-sky-600">
            How it works
          </span>
          <h2 className="text-2xl font-bold text-slate-900">Order in five steps</h2>
          <div className="mt-4 flex flex-col gap-3.5">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sky-500 font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{s.title}</h4>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mt-14">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wider text-sky-600">
            Rates
          </span>
          <h2 className="text-2xl font-bold text-slate-900">Pricing</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-sky-100 bg-white">
            {prices.map((p, i) => (
              <div
                key={p.label}
                className={`flex items-center justify-between px-5 py-3.5 ${
                  i !== prices.length - 1 ? "border-b border-sky-100" : ""
                }`}
              >
                <div>
                  <div className="font-bold text-slate-900">{p.label}</div>
                  <div className="text-sm text-slate-500">{p.sub}</div>
                </div>
                <div className="font-bold text-sky-700">{p.amount}</div>
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-xl bg-sky-50/60 px-5 py-3 text-sm text-slate-500">
            <b className="text-slate-800">Rush options:</b> +100฿ for 24-hour delivery · +150฿ for 3-hour delivery
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-14">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wider text-sky-600">
            Samples
          </span>
          <h2 className="text-2xl font-bold text-slate-900">Portfolio</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.map((g) => (
              <div
                key={g}
                className="flex aspect-square items-center justify-center rounded-xl border border-sky-100 bg-[repeating-linear-gradient(45deg,#CFE7FB,#CFE7FB_10px,#E1F0FC_10px,#E1F0FC_20px)] text-sm font-bold text-sky-700"
              >
                {g}
              </div>
            ))}
          </div>
        </section>

        {/* Payment */}
        <section className="mt-14">
          <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 p-6 text-white">
            <h3 className="text-xl font-bold">Payment</h3>
            <p className="-mt-1 text-sky-100">
              Pick whichever&apos;s easiest, then send your slip with your nickname.
            </p>
            <div className="mt-3 flex flex-col gap-2.5">
              {payments.map((p) => (
                <div key={p.label} className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                  <div className="text-sm">
                    {p.label}
                    <b className="block text-base tracking-wide">{p.value}</b>
                  </div>
                  <CopyButton text={p.copy} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-sky-100">
              Account name: Example Name · Please don&apos;t send payment before your order is confirmed.
            </p>
          </div>
        </section>

        {/* Rules */}
        <section className="mt-14">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wider text-sky-600">
            Before you order
          </span>
          <h2 className="text-2xl font-bold text-slate-900">Good to know</h2>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-500">
            {rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-sky-100 pt-6 text-center">
          <h3 className="text-lg font-bold text-slate-900">Say hello</h3>
          <div className="mt-3 flex justify-center gap-3">
            {["Line", "Facebook", "Instagram"].map((s) => (
              <a
                key={s}
                href="#"
                className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-sky-700"
              >
                {s}
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-400">Made with 💙 — Umi Design</p>
        </footer>
      </main>
    </div>
  );
}
