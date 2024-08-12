import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/mobile-nav";
import DesktopNav from "@/components/desktop-nav";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
import Script from "next/script";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://join-vayu.vercel.app"),
  title: "Join Vayu | AI Security Workforce",
  description:
    "Vayu accelerates your compliance timelines at a fraction of the cost.",
  openGraph: {
    images: ["/vayu.jpeg"],
    siteName: "Join Vayu",
    url: "https://join-vayu.vercel.app",
  },
  twitter: {
    site: "@joinvayu",
    card: "summary",
    images: ["/vayu.jpeg"],
    title: "Join Vayu | AI Security Workforce",
    description:
      "Vayu accelerates your compliance timelines at a fraction of the cost.",
  },
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Login", href: "/sign-in" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />

      <body className={`${dm_sans.className} text-primary`}>
        <Link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <header className="h-16 bg-[#e4e7de] grid grid-cols-3 overflow-hidden w-full sticky top-0 z-50">
          <div className="flex items-center justify-start ml-4 relative">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={40} />
            </Link>
          </div>
          <div className="flex items-center justify-end col-start-2 col-span-2">
            <MobileNav navItems={navItems} />
            <DesktopNav navItems={navItems} />
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
