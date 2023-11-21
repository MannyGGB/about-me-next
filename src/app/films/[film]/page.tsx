import Link from "next/link";
type filmParam = { params: { film: string } };

export function generateMetadata({ params }: filmParam) {
  const capitalisedTitle = params.film[0].toUpperCase() + params.film.slice(1);
  return {
    title: `My Films - ${capitalisedTitle}`,
    description: `A look into ${params.film}`,
  };
}

export default function FilmPage({ params }: filmParam) {
  const capitalisedTitle = params.film[0].toUpperCase() + params.film.slice(1);
  return (
    <div>
      <h3>Film Page: {capitalisedTitle}</h3>
      <Link href="/films">{`<-- Go Back`}</Link>
    </div>
  );
}
