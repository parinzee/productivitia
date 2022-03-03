import { Handler } from "@netlify/functions";
import axios from "axios";

export const handler: Handler = async (event, context) => {
  const resp = await axios.get(
    "https://hashnode.com/api/post/get-top-posts?duration=7"
  );

  // Reformat the data with only the top six new stories
  const data = resp.data.posts.map((element: any) => {
    if (element.publication.domain) {
      return {
        title: element.title,
        author: element.author.name,
        url: `https://${element.publication.domain}/${element.slug}`,
      };
    } else {
      return {
        title: element.title,
        author: element.author.name,
        url: `https://${element.publication.username}.hashnode.dev/${element.slug}`,
      };
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      "Cache-Control": "public, max-age=1800, must-revalidate",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  };
};
