import { Handler } from "@netlify/functions";
import { db } from "./quotesdb";

export const handler: Handler = async (event, context) => {
  const quote = db[Math.floor(Math.random() * db.length)];
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
