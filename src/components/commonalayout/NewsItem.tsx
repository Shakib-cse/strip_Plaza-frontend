"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NewsItem as NewsItemType } from "@/lib/news";
import { fetchNews } from "@/lib/news";

function NewsCard({ title, items }: { title: string; items: NewsItemType[] }) {
  return (
    <div className="paper-texture comic-border p-4 mt-8 border-2 bg-background border-foreground">
      <h3 className="font-comic text-xl text-primary mb-4 border-b-2 border-black pb-2">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/news-details/${item.id}`}
            className="flex gap-3 group"
          >
            <span className="text-xs font-bold text-gray-500 mt-1 shrink-0 w-12">
              {item.date}
            </span>
            <div>
              <p className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors">
                {item.title}
              </p>
              {item.excerpt && (
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {item.excerpt}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      <button className="mt-4 text-primary font-bold text-sm hover:underline font-comic">
        + MORE
      </button>
    </div>
  );
}

export default function NewsGrid() {
  const [data, setData] = useState<Record<string, NewsItemType[]>>({});

  useEffect(() => {
    let mounted = true;
    fetchNews().then((res) => {
      if (mounted) setData(res);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="grid md:grid-cols-2 gap-6 mx-8">
      {Object.entries(data).map(([category, items]) => (
        <NewsCard key={category} title={category} items={items} />
      ))}
    </section>
  );
}
