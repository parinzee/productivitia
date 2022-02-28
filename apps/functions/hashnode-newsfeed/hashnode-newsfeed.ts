import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import { Handler } from "@netlify/functions";
import fetch from "cross-fetch";

export const handler: Handler = async (event, context) => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: "https://api.hashnode.com/", fetch }),
    cache: new InMemoryCache(),
  });

  const resp = await client.query({
    query: gql`
      {
        storiesFeed(type: FEATURED) {
          title
          slug
          author {
            name
            blogHandle
          }
        }
      }
    `,
  });

  // Reformat the data with only the top three new stories
  const data = [...resp.data.storiesFeed].slice(0, 4).map((element) => {
    return {
      title: element.title,
      author: element.author.name,
      url: `https://${element.author.blogHandle}.hashnode.dev/${element.slug}`,
    };
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      "Cache-Control": "public, max-age=3600, must-revalidate",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  };
};
