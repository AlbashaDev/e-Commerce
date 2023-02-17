import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import { Main } from "next/document";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { fetchCategories } from "../utils/fetchCategories";

interface Props {
  categories: Category[];
}

const Home = ({ categories }: Props) => {
  console.log(categories);
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

          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              {/* <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel> */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();

  return {
    props: {
      categories,
    },
  };
};
