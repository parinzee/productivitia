import { Handler } from "@netlify/functions";
import axios from "axios";

export const handler: Handler = async (event, context) => {
  const quote = await axios.get("https://zenquotes.io/api/today");
  return {
    statusCode: 200,
    body: JSON.stringify({
      ...quote,
    }),
    headers: {
      "Cache-Control": "public, max-age=43200, must-revalidate",
    },
  };
};
