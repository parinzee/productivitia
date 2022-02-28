import * as React from "react";
import { BiLoaderAlt } from "react-icons/bi";

interface News {
  title: string;
  author: string;
  url: string;
}

function NewsComponent({ title, author, url }: News) {
  return (
    <div
      key={url}
      className="w-full h-full bg-white flex flex-col col-span-1 row-span-1 rounded-lg p-3 justify-center content-center hover:bg-blue-300 cursor-pointer transition-all"
      onClick={() => {
        window.open(url);
      }}
    >
      <div className="news-text w-full text-base font-medium">{title}</div>
      <div className="news-text w-full italic text-sm">{author}</div>
    </div>
  );
}

export default function HashnodeFeatured() {
  const [news, setNews] = React.useState<React.ReactNode[] | null>(null);

  React.useEffect(() => {
    fetch(
      "https://productivitia.netlify.app/.netlify/functions/hashnode-newsfeed"
    )
      .then((resp) => resp.json())
      .then((data: News[]) => {
        setNews(
          data.map((news) => (
            <NewsComponent
              title={news.title}
              author={news.author}
              url={news.url}
            />
          ))
        );
      });
  }, []);

  return (
    <div className="glass-box col-span-3 row-span-2 glass grid grid-cols-3 rows-2 gap-1">
      {news ? (
        news
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <BiLoaderAlt className="animate-spin text-pink-400" size={80} />
        </div>
      )}
    </div>
  );
}
