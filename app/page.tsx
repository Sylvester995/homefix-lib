import Header from "@/components/header";
import Footer from "@/components/footer";
import BookingForm from "@/components/booking-form";
import StickyWA from "@/components/sticky-wa";
import Estimator from "@/components/estimator";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-[min(1100px,92%)]">
        <section className="grid gap-6 py-10 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <h1 className="text-3xl font-extrabold md:text-5xl">Book trusted home services in Monrovia</h1>
            <p className="mt-3 text-lg text-ui-muted">
              Cleaning • AC repair • plumbing • painting — vetted providers, fair prices, Mobile Money payments.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}?text=${encodeURIComponent("HomeFix Lib booking inquiry")}`} className="btn-primary" target="_blank">Chat on WhatsApp</a>
              <a href="#pricing" className="btn-secondary">See pricing</a>
            </div>
            <p className="mt-2 text-sm text-ui-muted">Workmanship guarantee 24–48h • We don’t start jobs without your approval</p>
          </div>
          <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900/50">
            <h3 className="mb-2 font-semibold">Instant estimator</h3>
            <Estimator />
            <p className="text-sm text-ui-muted">Pick a service and hours/m²; confirm on chat.</p>
          </div>
        </section>

        <section id="services" className="py-6">
          <h2 className="mb-3 text-2xl font-bold">Services</h2>
          <div className="grid gap-3 md:grid-cols-4">
            {[
              ["From $6/hr", "Home cleaning", "2-hour minimum • supplies optional"],
              ["From $30/job", "AC check & service", "Filter clean • parts at cost"],
              ["From $20 first hr", "Plumbing", "Tap/leak fixes • blockage checks"],
              ["$1.5–$2.5/m²", "Painting", "Room refresh • materials extra"],
            ].map(([chip, title, note]) => (
              <div key={title} className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-card dark:border-slate-800 dark:bg-slate-900/50">
                <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">{chip}</span>
                <h3 className="mt-2 font-semibold">{title}</h3>
                <div className="text-sm text-ui-muted">{note}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6">
          <h2 className="mb-3 text-2xl font-bold">Coverage areas</h2>
          <div className="flex flex-wrap gap-2">
            {["Sinkor","Congo Town","Old Road","Paynesville","Gardnersville","Bushrod Island","Clay Ashland","Brewerville"].map(x => (
              <span key={x} className="rounded-full border border-slate-200 px-3 py-2 dark:border-slate-700">{x}</span>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-6">
          <h2 className="mb-3 text-2xl font-bold">Pricing (guide)</h2>
          <div className="overflow-auto rounded-[14px] border border-slate-200 shadow-card dark:border-slate-800">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900">
                <tr>
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-left">Unit</th>
                  <th className="p-3 text-left">Base</th>
                  <th className="p-3 text-left">Min</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Home cleaning (basic)","hour","$6","2h","Supplies optional"],
                  ["Home cleaning (deep)","m²","$0.8","20m²","Kitchen/bath detail"],
                  ["AC check & service","job","$30","—","Parts at cost"],
                  ["Plumbing (minor fix)","first hour","$20","1h","$10/hr after"],
                  ["Painting (room)","m²","$2.0","15m²","Paint extra"],
                ].map((r) => (
                  <tr key={r[0]} className="border-t border-slate-100 dark:border-slate-800">
                    {r.map((c,i)=>(<td key={i} className="p-3">{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="book" className="py-6">
          <h2 className="mb-3 text-2xl font-bold">Book a job</h2>
          <div className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-card dark:border-slate-800 dark:bg-slate-900/50">
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
      <StickyWA />
    </>
  );
}
