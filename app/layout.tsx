import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header/Header";
import QueryProvider from "@/lib/QueryProvider";
import { Footer } from "@/components/Footer";
import { ScreenSize } from "@/components/ScreenSize";
import { Toaster } from "react-hot-toast";

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
        <SessionProvider>
          <QueryProvider>
            <Header />

            {children}
            <Footer />
            <ScreenSize />
            <Toaster position="bottom-right" reverseOrder={true} />
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
