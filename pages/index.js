import Head from "next/head";

import Homepage from "../components/Homepage";

import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="test">
      <Head>
        <title>YouTube</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/youtube.ico" />
      </Head>
      <Homepage />
      <Sidebar />
    </div>
  );
}
