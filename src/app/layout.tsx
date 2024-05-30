import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import NavBar from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R.A.D",
  description: "Que...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative fle flex-col min-h-screen">
          <NavBar />
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
