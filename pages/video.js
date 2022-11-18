import Head from "next/head";
import Image from "next/image";
import Videopage from "../components/Videopage";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const query = router.query;
  const object = JSON.parse(query.object);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Videopage video={object} />
    </div>
  );
}
