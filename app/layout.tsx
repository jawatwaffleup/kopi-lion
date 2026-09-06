import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kopilion.com"),
  title: {
    default: "KOPI LION — Tradition, brewed precisely.",
    template: "%s — KOPI LION",
  },
  description:
    "Bold Nanyang kopi, brewed through the sock and served without fuss. Coming soon to Clarke Quay and Dhaka.",
  openGraph: {
    title: "KOPI LION",
    description: "Tradition, brewed precisely.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ef3340",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
