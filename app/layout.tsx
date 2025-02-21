import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header/Header";
import QueryProvider from "@/lib/QueryProvider";
import { Footer } from "@/components/Footer";
import { ScreenSize } from "@/components/ScreenSize";
import { Toaster } from "react-hot-toast";
import GoToTopButton from "@/components/GoToTopButton";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Pour plus de flexibilité
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Anima",
  description: "Discover and explore the best anime recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${roboto.variable} max-w-6xl mx-auto antialiased`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#E74D3C)]"></div>
        <SessionProvider>
          <QueryProvider>
            <Header />
            {children}
            <Footer />
            <ScreenSize />
            <GoToTopButton />
            <Toaster position="bottom-right" reverseOrder={true} />
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
