import React from "react";
export default function FilmsRoute() {
  return (
    <main className="flex flex-row justify-evenly">
      <section className="m-14">
        <img
          className="max-w-40 max-h-60"
          src="https://img.buzzfeed.com/buzzfeed-static/static/2022-03/28/1/asset/5fb7e64ee15e/sub-buzz-6676-1648431203-12.jpg"
          alt="Silence of the Lambs poster"
        />
        <p>Silence of the Lambs </p>
      </section>
      <section className="m-14">
        <img
          className="max-w-40 max-h-60"
          src="https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5"
          alt="Moonlight poster"
        />
        <p>Moonlight </p>
      </section>
      <section className="m-14">
        <img
          className="max-w-40 max-h-60"
          src="https://www.dotyeti.com/wp-content/uploads/2023/01/image5-1-691x1024.jpg"
          alt="Pearl poster"
        />
        <p>Pearl </p>
      </section>
      <section className="m-14">
        <img
          className="max-w-40 max-h-60"
          src="https://m.media-amazon.com/images/M/MV5BZTA1ODE3ZDAtMDVkNi00ODAxLWE1MjUtNDAyOWVhZWNjYjUxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
          alt="ET poster"
        />
        <p>ET </p>
      </section>
    </main>
  );
}
