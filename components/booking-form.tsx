"use client";
import { useState } from "react";
const WA = process.env.NEXT_PUBLIC_WA_NUMBER;

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const d = new FormData(e.currentTarget);
    const msg = [
      "Booking request — HomeFix Lib",
      `Service: ${d.get("service")}`,
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Community: ${d.get("community")}`,
      `Preferred: ${d.get("date")} ${d.get("time")}`,
      `Notes: ${d.get("notes") || "—"}`
    ].join("\n");
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setLoading(false);
  }
  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold">Service</label>
        <select name="service" className="input" required>
          <option>Cleaning (basic)</option>
          <option>Cleaning (deep)</option>
          <option>AC check & service</option>
          <option>Plumbing (minor fix)</option>
          <option>Painting (room refresh)</option>
        </select>
      </div>
      {[["name","Your name","e.g., Joseph Doe"],["phone","Phone","07xx xxx xxx"],["community","Community","Sinkor 12th Street"]].map(([name,label,ph])=> (
        <div key={name}>
          <label className="block text-sm font-semibold">{label}</label>
          <input name={name} placeholder={ph as string} className="input" required />
        </div>
      ))}
      <div>
        <label className="block text-sm font-semibold">Preferred date</label>
        <input type="date" name="date" className="input" required />
      </div>
      <div>
        <label className="block text-sm font-semibold">Time window</label>
        <select name="time" className="input">
          <option>10:00–12:00</option><option>12:00–14:00</option><option>14:00–16:00</option><option>16:00–18:00</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold">Notes (optional)</label>
        <textarea name="notes" className="input" placeholder="Tell us about the job." />
      </div>
      <div className="md:col-span-2 flex flex-wrap gap-3">
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Opening WhatsApp…" : "Book on WhatsApp"}
        </button>
        <a className="btn-secondary" href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi, I have a quick question.")}`} target="_blank">Just chat</a>
      </div>
    </form>
  );
}
