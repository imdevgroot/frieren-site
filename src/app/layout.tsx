import type { Metadata } from "next";
import { Cinzel_Decorative, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frieren-site-nupeeks.vercel.app"),
  title: "Frieren: Beyond Journey's End",
  description:
    "Enter the world of Frieren — an elven mage on an eternal journey beyond time. Explore the characters, magic system, and arcs of the beloved anime.",
  openGraph: {
    title: "Frieren: Beyond Journey's End",
    description: "A journey beyond time.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frieren: Beyond Journey's End",
    description: "A journey beyond time.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
      <body>
        {children}
        {/* Fix scroll: no hash in URL, always top on fresh load */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (history.scrollRestoration) history.scrollRestoration = 'manual';
          window.addEventListener('load', function() { window.scrollTo(0, 0); });
          document.addEventListener('click', function(e) {
            var el = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
            if (!el) return;
            var id = el.getAttribute('href').slice(1);
            if (!id) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
            var target = document.getElementById(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        `}} />
      </body>
    </html>
  );
}
