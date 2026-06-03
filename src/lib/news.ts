export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

const rawData: Record<string, Omit<NewsItem, "id" | "category">[]> = {
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
      date: "May 22",
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

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Fetch news (placeholder). Returns a category->items map with stable ids.
 * Replace this with a real API call later.
 */
export async function fetchNews(): Promise<Record<string, NewsItem[]>> {
  const out: Record<string, NewsItem[]> = {};
  Object.entries(rawData).forEach(([category, items]) => {
    out[category] = items.map((it, idx) => ({
      id: `${slugify(category)}-${slugify(it.title)}-${idx}`,
      date: it.date,
      title: it.title,
      excerpt: it.excerpt,
      category,
    }));
  });
  return Promise.resolve(out);
}

export async function fetchAllNews(): Promise<NewsItem[]> {
  const map = await fetchNews();
  return Object.values(map).flat();
}
