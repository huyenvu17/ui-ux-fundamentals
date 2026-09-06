import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Overlay - Practice design by recreating it",
  description:
    "A practice club for designers. Recreate real interfaces in Figma or code, compare pixel-by-pixel, and get feedback from a community of learners.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Temporary: Figma html-to-design capture — remove after sync */}
        <script
          src="https://mcp.figma.com/mcp/html-to-design/capture.js"
          async
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
