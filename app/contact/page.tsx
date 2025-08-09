import Header from "@/components/header";
import Footer from "@/components/footer";

const IG = process.env.NEXT_PUBLIC_IG_URL!;
const FB = process.env.NEXT_PUBLIC_FB_URL!;
const WA = process.env.NEXT_PUBLIC_WA_NUMBER!;
const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS!;

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
  return (
    <>
      <Header />
      <main className="mx-auto w-[min(1100px,92%)] py-8">
        <h1 className="mb-2 text-3xl font-extrabold">Contact us</h1>
        <p className="text-ui-muted">We’re quick on WhatsApp—send a message or book a job.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href={`https://wa.me/${WA}`} target="_blank">Chat on WhatsApp</a>
              <a className="btn-secondary" href={IG} target="_blank">Instagram</a>
              <a className="btn-secondary" href={FB} target="_blank">Facebook</a>
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <div><strong>Location:</strong> {ADDRESS}</div>
              <div><strong>Service hours:</strong> Mon–Sat 08:00–18:00 • Sun Closed</div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[14px] border border-slate-200 shadow-card dark:border-slate-800">
            <iframe title="HomeFix Lib — Location" src={mapSrc} width="100%" height="360" loading="lazy" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
