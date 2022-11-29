import type { NextPage } from "next";
import { Main } from "next/document";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ShoPte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* giving main an extra 100vh to pull the next section on it with -100vh */}
      <main className="realtive h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="font-medgum nd-text-5x1 text-center text-4xl tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
