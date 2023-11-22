import React from "react";
import Image from "next/image";
export default function AboutRoute() {
  return (
    <main>
      <article className="flex flex-col justify-center items-center p-20">
        <p>
          Hello! I am Manuel, a 29-year-old aspiring developer from Spain. I
          have lived in Norwich for 6 years now, and I am in the process of
          learning HTML, CSS, and JavaScript to become a fully-fledged
          developer.
        </p>
      </article>
      <Image
        src="/oriole.jpg"
        width={1200}
        height={635}
        alt="oriole"
        className="w-300 h-200 m-20 rounded"
      />
    </main>
  );
}
