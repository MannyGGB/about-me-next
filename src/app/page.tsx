import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center p-20">
        <h1 className="text-2xl">Welcome to my favourites website!</h1>
        <p className="p-20">
          Here you can find information about me, my favourite films and cities
          I have visited before.
        </p>
        <Image src="/dragon.png" width={512} height={512} alt="dragon" />
      </main>
    </>
  );
}
