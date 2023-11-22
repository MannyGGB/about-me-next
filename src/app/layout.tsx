import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Top Faves",
  description: "A page about my favourite things",
};

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
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
        className={`${nunito.className} bg-gradient-to-tr from-amber-300 to-violet-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
