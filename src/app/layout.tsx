import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Top Faves",
  description: "A page about my favourite things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${inter.className}flex min-h-screen flex-col items-center justify-between x p-10 bg-gradient-to-tr from-amber-300 to-violet-900 text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
