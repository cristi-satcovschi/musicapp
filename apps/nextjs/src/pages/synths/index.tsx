import type { NextPage } from "next";
import Head from "next/head";

const Synths: NextPage = () => {
  return (
    <>
      <Head>
        <title>Synths</title>
        <meta name="description" content="Music App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row justify-between border-b px-12 py-8">
        <h2 className="text-4xl font-semibold">Synths</h2>
      </div>
    </>
  );
};

export default Synths;
