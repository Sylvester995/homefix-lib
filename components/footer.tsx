const IG = process.env.NEXT_PUBLIC_IG_URL!;
const FB = process.env.NEXT_PUBLIC_FB_URL!;
const WA = process.env.NEXT_PUBLIC_WA_NUMBER!;
const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS!;

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-7 text-sm text-muted dark:border-slate-800">
      <div className="mx-auto flex w-[min(1100px,92%)] flex-wrap items-start justify-between gap-6">
        <div className="min-w-[220px]">
          <strong>HomeFix Lib</strong>
          <div>Trusted home services in Monrovia.</div>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a href={`https://wa.me/${WA}`} target="_blank" className="font-semibold text-brand hover:underline">WhatsApp</a>
            <a href={IG} target="_blank" className="hover:underline">Instagram</a>
            <a href={FB} target="_blank" className="hover:underline">Facebook</a>
          </div>
        </div>
        <div className="min-w-[220px]">
          <strong>Visit us</strong>
          <div>{ADDRESS}</div>
        </div>
        <div className="min-w-[220px]">
          <strong>Service hours</strong>
          <div>Mon–Sat 08:00–18:00</div>
          <div>Sun Closed</div>
        </div>
        <div className="min-w-[220px]">
          <strong>Quick links</strong>
          <div className="mt-2 flex flex-wrap gap-3">
            <a href="/#services" className="hover:underline">Services</a>
            <a href="/#pricing" className="hover:underline">Pricing</a>
            <a href="/#book" className="hover:underline">Book</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[min(1100px,92%)] pt-6 text-right">© {new Date().getFullYear()} HomeFix Lib</div>
    </footer>
  );
}
