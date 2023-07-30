import type { NextPage } from "next";
import Head from "next/head";

const Songs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Songs</title>
        <meta name="description" content="Music App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row justify-between border-b px-12 py-8">
        <h2 className="text-4xl font-semibold">Songs</h2>
      </div>

      <div className="bg-primary h-full p-16">
        <button className="shadow-neumorphic bg-primary rounded-lg px-4 py-2">
          test
        </button>
      </div>
    </>
  );
};

export default Songs;
