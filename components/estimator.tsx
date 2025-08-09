"use client";
import { useMemo, useState } from "react";

type ServiceKey = "clean_basic" | "ac_service" | "plumbing_minor" | "painting_room";

const WA = process.env.NEXT_PUBLIC_WA_NUMBER;

const SERVICES: Record<ServiceKey, {
  label: string;
  unitLabel: string;          // for the input placeholder
  minQty: number;
  calc: (qty: number) => number;
  note?: string;
}> = {
  clean_basic: {
    label: "Cleaning (basic)",
    unitLabel: "Hours",
    minQty: 2,
    calc: (q) => 6 * Math.max(q, 2), // $6/hr, 2h min
    note: "Supplies optional. 2-hour minimum.",
  },
  ac_service: {
    label: "AC check & service",
    unitLabel: "Jobs",
    minQty: 1,
    calc: () => 30, // flat $30/job
    note: "Filter clean; parts at cost.",
  },
  plumbing_minor: {
    label: "Plumbing (minor fix)",
    unitLabel: "Hours",
    minQty: 1,
    // $20 first hour, then $10/hr after
    calc: (q) => {
      const qty = Math.max(q, 1);
      if (qty <= 1) return 20;
      return 20 + (qty - 1) * 10;
    },
    note: "$20 first hour; $10/hr after.",
  },
  painting_room: {
    label: "Painting (room refresh)",
    unitLabel: "m²",
    minQty: 15,
    calc: (q) => 2.0 * Math.max(q, 15), // $2/m², 15m² min
    note: "Paint/materials extra.",
  },
};

export default function Estimator() {
  const [svc, setSvc] = useState<ServiceKey>("clean_basic");
  const [qty, setQty] = useState<number>(SERVICES.clean_basic.minQty);
  const [sent, setSent] = useState(false);

  // Reset estimator state after sending

  const resetEstimator = () => {
    setSvc("clean_basic");
    setQty(SERVICES.clean_basic.minQty);
    setSent(true);
    setTimeout(() => setSent(false), 1600);
  };

  // Keep sensible defaults when switching services
  function onSvcChange(key: ServiceKey) {
    setSvc(key);
    setQty(SERVICES[key].minQty);
  }

  const { label, unitLabel, minQty, calc, note } = SERVICES[svc];
  const usedQty = Math.max(qty || 0, minQty);
  const price = useMemo(() => calc(qty || 0), [calc, qty]);

  const minHint =
    (qty || 0) < minQty
      ? `Minimum is ${minQty} ${unitLabel.toLowerCase()}; we calculated using the minimum.`
      : undefined;

  const sendToWA = () => {
    const lines = [
      "Estimate request — HomeFix Lib",
      `Service: ${label}`,
      `Quantity: ${qty || 0} ${unitLabel} (min ${minQty})`,
      `Guide price: $${price.toFixed(2)}`,
      "",
      "Please confirm and schedule.",
    ].join("\n");
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    resetEstimator();
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold">Service</label>
          <select
            className="input"
            value={svc}
            onChange={(e) => onSvcChange(e.target.value as ServiceKey)}
          >
            <option value="clean_basic">{SERVICES.clean_basic.label}</option>
            <option value="ac_service">{SERVICES.ac_service.label}</option>
            <option value="plumbing_minor">{SERVICES.plumbing_minor.label}</option>
            <option value="painting_room">{SERVICES.painting_room.label}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">{unitLabel}</label>
          <input
            className="input"
            type="number"
            min={0}
            step={1}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            placeholder={unitLabel}
          />
          <div className="mt-1 text-xs text-ui-muted">
            Min {minQty} {unitLabel.toLowerCase()}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-3 text-sm dark:border-slate-800 dark:bg-slate-900/50">
        <div>
          <strong>Guide price:</strong> ${price.toFixed(2)}{" "}
          <span className="text-ui-muted">(qty used: {usedQty} {unitLabel.toLowerCase()})</span>
        </div>
        {note && <div className="text-ui-muted">{note}</div>}
        {minHint && <div className="text-amber-700 dark:text-amber-300">{minHint}</div>}
        <div className="mt-2 text-xs text-ui-muted">
          Final quote confirmed on WhatsApp after a quick photo/description.
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button onClick={sendToWA} className="btn-primary">Send this estimate</button>
        <a
          className="btn-secondary"
          href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi! I have a question about pricing.")}`}
          target="_blank"
        >
          Ask a quick question
        </a>
      </div>
    </div>
  );
}
