import type { NextPage } from "next";
import Head from "next/head";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="App Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row justify-between border-b px-12 py-8">
        <h2 className="text-4xl font-semibold">Dashboard</h2>
      </div>
    </>
  );
};

export default Dashboard;
