"use client";
const WA = process.env.NEXT_PUBLIC_WA_NUMBER;

export default function StickyWA() {
  const link = `https://wa.me/${WA}?text=${encodeURIComponent("Hi! I want to book a service.")}`;
  return (
    <a href={link} target="_blank" className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-bold text-white shadow-card hover:brightness-95">
      <span className="h-2 w-2 rounded-full border-2 border-white/80 bg-emerald-300" />
      Chat on WhatsApp
    </a>
  );
}
