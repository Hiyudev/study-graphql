import type { GetServerSideProps, NextPage } from "next";
import { usePageQuery, PageDocument } from "../generated/graphql";
import { client, ssrCache } from "../libs/urql";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

const HomePage: NextPage = () => {
  const [{ data }] = usePageQuery({
    variables: {
      slug: "about",
    },
  });

  return (
    <>
      <Hero title={data?.page?.title} subtitle={data?.page?.subtitle} />
      <Features />
      <Pricing />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: "home" }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
