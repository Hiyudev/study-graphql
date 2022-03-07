import type { GetServerSideProps, NextPage } from "next";
import { usePageQuery, PageDocument } from "../generated/graphql";
import { client, ssrCache } from "../libs/urql";

const Home: NextPage = () => {
  const [{ data }] = usePageQuery({
    variables: {
      slug: "about",
    },
  });

  return <h1>{data?.page?.title}</h1>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: "home" }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
