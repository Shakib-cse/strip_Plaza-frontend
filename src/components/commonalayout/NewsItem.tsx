"use client";

interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
}

const newsData: Record<string, NewsItem[]> = {
  "GRAPHIC NOVEL NEWS": [
    {
      date: "Nov 22",
      title: "Five new items added to the archives.",
      excerpt:
        "Read them all online now and discover what's new in the world of comics.",
    },
    {
      date: "Nov 18",
      title: "Comic con in Antwerp this Saturday.",
      excerpt: "Make sure you're there for the latest releases!",
    },
    {
      date: "Nov 15",
      title: "Interview with the artist of 'The Collector'.",
      excerpt: "Learn everything about his creative process.",
    },
    {
      date: "Nov 11",
      title: "Update to the Comic Database with over 500 new titles.",
      excerpt: "",
    },
  ],
  "COMIC NEWS": [
    {
      date: "Nov 22",
      title: "Five new items added to the archives.",
      excerpt:
        "Read them all online now and discover what's new in the world of comics.",
    },
    {
      date: "Nov 18",
      title: "Comic con in Antwerp this Saturday.",
      excerpt: "Make sure you're there for the latest releases!",
    },
    {
      date: "Nov 15",
      title: "Interview with the artist of 'The Collector'.",
      excerpt: "Learn everything about his creative process.",
    },
    {
      date: "Nov 11",
      title: "Update to the Comic Database with over 500 new titles.",
      excerpt: "",
    },
  ],
  "MOVIE NEWS": [
    {
      date: "Nov 22",
      title: "Five new items added to the archives.",
      excerpt:
        "Read them all online now and discover what's new in the world of comics.",
    },
    {
      date: "Nov 18",
      title: "Comic con in Antwerp this Saturday.",
      excerpt: "Make sure you're there for the latest releases!",
    },
    {
      date: "Nov 15",
      title: "Interview with the artist of 'The Collector'.",
      excerpt: "Learn everything about his creative process.",
    },
  ],
  "GENERAL NEWS": [
    {
      date: "Nov 22",
      title: "Five new items added to the archives.",
      excerpt:
        "Read them all online now and discover what's new in the world of comics.",
    },
    {
      date: "Nov 18",
      title: "Comic con in Antwerp this Saturday.",
      excerpt: "Make sure you're there for the latest releases!",
    },
  ],
};

function NewsCard({ title, items }: { title: string; items: NewsItem[] }) {
  return (
    <div className="paper-texture comic-border p-4 mt-8 border-4 bg-background border-foreground">
      <h3 className="font-comic text-xl text-red-600 mb-4 border-b-2 border-black pb-2">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-3 group cursor-pointer">
            <span className="text-xs font-bold text-gray-500 mt-1 shrink-0 w-12">
              {item.date}
            </span>
            <div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                {item.title}
              </p>
              {item.excerpt && (
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {item.excerpt}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 text-red-600 font-bold text-sm hover:underline font-comic">
        + MORE
      </button>
    </div>
  );
}

export default function NewsGrid() {
  return (
    <section className="grid md:grid-cols-2 gap-6 mx-8">
      {Object.entries(newsData).map(([category, items]) => (
        <NewsCard key={category} title={category} items={items} />
      ))}
    </section>
  );
}
