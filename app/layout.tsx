import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "RulloLabs Dashboard 2026 | AI Dynamic OS",
  description: "Advanced AI-driven project management and SaaS infrastructure for 2026.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth selection:bg-blue-500/20 selection:text-white">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#050505] text-white`}>
        {/* Subtle Global Glow Effect */}
        <div className="fixed -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="fixed -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full z-0 pointer-events-none" />
        
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
