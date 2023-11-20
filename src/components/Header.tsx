import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex flex-col">
      <h1 className="text-center text-4xl">Top Faves!</h1>
      <br />
      <nav className="flex justify-evenly">
        <button>
          <Link href="/">Home</Link>
        </button>
        <Link href="/about">About Me</Link>
        <Link href="/films">My Films</Link>
        <Link href="/cities">My Cities</Link>
      </nav>
    </header>
  );
}