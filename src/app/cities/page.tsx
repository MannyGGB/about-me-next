import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import styles from "@/app/cities/page.module.css";

export const metadata: Metadata = {
  title: `My Cities`,
  description: "My favourite Spanish cities",
};

type citiesSearchQuery = {
  sortBy: string;
};

type citiesType = {
  name: string;
  image: string;
};

let cities: citiesType[] = [
  {
    name: "Granada",
    image:
      "https://images.unsplash.com/photo-1620677368158-32b1293fac36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cordoba",
    image:
      "https://images.unsplash.com/photo-1570874839030-fdd385fbcd72?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Toledo",
    image:
      "https://images.unsplash.com/photo-1597847308249-8f190357b22a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Barcelona",
    image:
      "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Valencia",
    image:
      "https://images.unsplash.com/photo-1565768502719-571073a68b4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function compareCities(a: citiesType, b: citiesType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}
export default function CitiesPage({
  searchParams,
}: {
  searchParams: citiesSearchQuery;
}) {
  let sortedCities = [...cities];
  if (searchParams.sortBy == "asc") {
    sortedCities.sort(compareCities);
  } else if (searchParams.sortBy == "desc") {
    sortedCities.sort(compareCities).reverse();
  }

  return (
    <main>
      <h2 className="text-center p-10 text-xl ">My Favourite Spanish Cities</h2>
      <nav className="flex flex-row justify-evenly">
        <Link href="/cities?sortBy=asc">A-Z</Link>
        <Link href="/cities?sortBy=desc">Z-A</Link>
      </nav>
      {sortedCities.map((city) => {
        return (
          <section className={`${styles.citiesSection} `} key={city.name}>
            <Link href={`/cities/${city.name.toLowerCase()}`}>{city.name}</Link>
            <img
              className={`${styles.citiesImage} rounded`}
              src={city.image}
              alt={city.name}
            />
          </section>
        );
      })}
    </main>
  );
}
