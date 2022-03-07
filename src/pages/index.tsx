import type { NextPage } from "next";
import { usePageQuery } from "../generated/graphql";

const Home: NextPage = () => {
  const [{ data }] = usePageQuery({
    variables: {
      slug: "about",
    },
  });

  return <h1>{data?.page?.title}</h1>;
};

export default Home;
