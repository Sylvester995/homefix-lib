import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "HomeFix Lib — Book trusted home services in Monrovia",
  description: "Cleaning, AC repair, plumbing & painting. WhatsApp booking. Mobile Money payments.",
  openGraph: {
    title: "HomeFix Lib",
    description: "Cleaning, AC repair, plumbing & painting. WhatsApp booking.",
    images: ["/og.png"]
  },
  icons: { icon: "/favicon.ico", apple: "/app-icon.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
