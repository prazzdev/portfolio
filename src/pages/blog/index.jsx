import { ApolloProvider, useQuery } from "@apollo/client";
import client from "@/lib/graphql/apolloClient";
import { GET_POSTS_QUERY } from "@/lib/graphql/queries";
import DefaultLayout from "@/layouts/DefaultLayout";
import HeadingTitle from "@/components/partials/HeadingTitle";
import Image from "next/image";

const BlogPage = () => {
  const { data, loading, error } = useQuery(GET_POSTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const posts = data.publication.posts.edges;

  return (
    <>
      <DefaultLayout pageTitle="Blog">
        <div className="lg:px-[3em] lg:py-[5em] pb-[2em]">
          <section
            id="blog"
            className="min-h-[100svh] flex justify-between mb-2 px-6"
          >
            <div className="w-full lg:w-[70%]">
              <HeadingTitle text="Blogs" />
              {posts.map(({ node }) => (
                <div className="min-w-[75svw] flex flex-col lg:flex-row flex-wrap justify-center gap-4 py-[1em]">
                  <a
                    href={node.url}
                    target="_blank"
                    rel="noreferrer"
                    className="sm:w-[100%] lg:w-[360px] min-h-fit lg:mr-5 mb-5 flex flex-col px-6 py-6 rounded-2xl overflow-hidden bg-white shadow-md hover:bg-gray-100 hover:-translate-y-2 hover:shadow-lg transition"
                  >
                    <div
                      id="head"
                      className="flex flex-col justify-between mb-4"
                    >
                      {/* <Image src={imgUri + 'kpu-bem-stb' + '.webp'} width={410} height={300} /> */}
                      <div className="flex flex-row justify-between items-center mt-4">
                        <h3 className="font-bold text-xl">{node.title}</h3>
                      </div>
                    </div>
                    <div id="desc" className="mb-5">
                      <span className="">{node.brief}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </DefaultLayout>
    </>
  );
};

export default BlogPage;
