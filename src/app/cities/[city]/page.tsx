import React from "react";
import Link from "next/link";
type cityParam = { params: { city: string } };

export function generateMetadata({ params }: cityParam) {
  const capitalisedName = params.city[0].toUpperCase() + params.city.slice(1);
  return {
    title: `My Cities - ${capitalisedName}`,
    description: `A look into ${params.city}`,
  };
}

export default function CityPage({ params }: cityParam) {
  const capitalisedName = params.city[0].toUpperCase() + params.city.slice(1);
  return (
    <div>
      <h3>City Page: {capitalisedName}</h3>
      <Link href="/films">{`<-- Go Back`}</Link>
      <p>More info coming soon</p>
    </div>
  );
}
