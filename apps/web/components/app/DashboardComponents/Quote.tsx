import * as React from "react";
import { BiLoaderAlt } from "react-icons/bi";

interface QuoteAPIReturn {
  id: string;
  body: string;
  author: string;
  authorType: string;
  dateAdded: string;
}

export default function Quote() {
  const [quoteObj, setQuoteObj] = React.useState<QuoteAPIReturn | null>(null);

  React.useEffect(() => {
    fetch("https://productivitia.netlify.app/.netlify/functions/quote-of-day")
      .then((resp) => resp.json())
      .then((data: QuoteAPIReturn) => {
        setQuoteObj(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="glass-box col-span-1 row-span-3">
      {quoteObj ? (
        <div className="w-full h-full flex flex-col justify-evenly text-center">
          <div className="text-xl font-medium italic">"{quoteObj.body}"</div>
          <div className="text-lg font-bold">{quoteObj.author}</div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <BiLoaderAlt className="animate-spin text-purple-500" size={80} />
        </div>
      )}
    </div>
  );
}
