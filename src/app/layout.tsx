import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aspectplumbing.ie"),
  title: {
    default: `${site.name} | Plumber & Heating Engineer in Lucan, Dublin`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "plumber Lucan",
    "plumber Dublin",
    "emergency plumber Dublin",
    "boiler repair Lucan",
    "heating engineer Dublin",
    "24 hour plumber Dublin",
    "Aspect Plumbing and Heating",
  ],
  openGraph: {
    title: `${site.name} | Lucan & Dublin`,
    description: site.description,
    type: "website",
    locale: "en_IE",
    siteName: site.name,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: site.name,
  description: site.description,
  telephone: site.phoneIntl,
  email: site.email,
  url: "https://aspectplumbing.ie",
  image: "https://aspectplumbing.ie/images/hero.jpg",
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.area}`,
    addressLocality: "Lucan",
    addressRegion: "Co. Dublin",
    postalCode: site.address.eircode,
    addressCountry: "IE",
  },
  areaServed: site.serviceArea.map((name) => ({ "@type": "City", name })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.score,
    reviewCount: site.rating.count,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IE" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCall />
      </body>
    </html>
  );
}
