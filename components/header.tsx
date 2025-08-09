import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70">
      <nav className="mx-auto flex w-[min(1100px,92%)] items-center justify-between py-3">
        <div className="flex items-center gap-3 font-extrabold">
          <Image src="/images/logo-header.png" alt="HomeFix Lib" width={130} height={34} className="h-8 w-auto" priority />
        </div>
        <div className="flex items-center gap-2">
          <Link href="/#services" className="btn-secondary">Services</Link>
          <Link href="/#pricing" className="btn-secondary">Pricing</Link>
          <Link href="/contact" className="btn-secondary">Contact</Link>
          <Link href="/#book" className="btn-primary">Book now</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
