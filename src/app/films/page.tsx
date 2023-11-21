import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `My Films`,
  description: "My collection of favourite films",
};

type filmsSearchQuery = {
  sortBy: string;
};

type filmsType = { name: string; poster: string; year: number };

let films: filmsType[] = [
  {
    name: "Silence of the Lambs",
    poster:
      "https://img.buzzfeed.com/buzzfeed-static/static/2022-03/28/1/asset/5fb7e64ee15e/sub-buzz-6676-1648431203-12.jpg",
    year: 1991,
  },
  {
    name: "Moonlight",
    poster:
      "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
    year: 2016,
  },
  {
    name: "Pearl",
    poster:
      "https://www.dotyeti.com/wp-content/uploads/2023/01/image5-1-691x1024.jpg",
    year: 2022,
  },
  {
    name: "E.T.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTA1ODE3ZDAtMDVkNi00ODAxLWE1MjUtNDAyOWVhZWNjYjUxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    year: 1982,
  },
];

function compareFilms(a: filmsType, b: filmsType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function FilmsPage({
  searchParams,
}: {
  searchParams: filmsSearchQuery;
}) {
  let sortedFilms = [...films];
  if (searchParams.sortBy == "asc") {
    sortedFilms.sort(compareFilms);
  } else if (searchParams.sortBy == "desc") {
    sortedFilms.sort(compareFilms).reverse();
  }

  return (
    <main className="flex flex-row justify-evenly">
      <h3>Film Collection</h3>
      <br />
      <Link href="/films?sortBy=asc">Sort by alphabetical order</Link>
      <Link href="/films?sortBy=desc">Sort by reverse alphabetical order</Link>

      {sortedFilms.map((film) => {
        return (
          <section className="m-14" key={film.name}>
            <br />
            <Link href={`/films/${film.name.toLowerCase()}`}>{film.name}</Link>
            <img src={film.poster} alt={film.poster} />
            <p>{film.year}</p>
          </section>
        );
      })}
    </main>
  );
}
