import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Playfair_Display } from "next/font/google";
import "./globals.css";

/** Tall condensed display face, close to the reference's wordmark. */
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

/** High-contrast italic serif for the FMS monogram, after the serif caps on their Instagram mark. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: "900",
  style: "italic",
  subsets: ["latin"],
});

/** Grotesk with a width axis: expanded for headings, normal for body. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Footscray Milking Station · Padre Coffee & Tasty Food",
  description:
    "Neighbourhood cafe in the old milking sheds on Bunbury St, Footscray. Padre Coffee, all-day breakfast and a dog-friendly courtyard since 2012.",
};

export const viewport: Viewport = {
  themeColor: "#1f3a2b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${anton.variable} ${archivo.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
