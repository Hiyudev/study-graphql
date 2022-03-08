import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import BlogPost from "../../components/BlogPost";
import { PostDocument, usePostQuery } from "../../generated/graphql";
import { client, ssrCache } from "../../libs/urql";

interface BlogPageProps {
  slug: string;
}

function BlogPage({ slug }: BlogPageProps) {
  const [{ data: post }] = usePostQuery({
    variables: {
      slug: slug,
    },
  });

  return (
    <div className="relative pb-16 bg-white overflow-hidden">
      <div className="relative w-full h-96">
        <Image
          layout="fill"
          objectFit="contain"
          className="object-cover"
          alt="Cover image"
          src={post?.post?.coverImage?.url ?? ""}
        />
      </div>

      <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post?.post?.title ?? ""}
            </span>
          </h1>
        </div>

        <div
          className="mt-6 prose prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: post?.post?.content?.html ?? "" }}
        />
      </div>
    </div>
  );
}

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await client.query(PostDocument, { slug: params?.slug }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params?.slug,
    },
  };
};
