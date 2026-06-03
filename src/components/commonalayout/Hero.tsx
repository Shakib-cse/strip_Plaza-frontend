"use client";

import { Bell, Share2, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllNews, NewsItem as NewsItemType } from "@/lib/news";

function parseDateShort(input: string): Date | null {
  // Expect formats like "Nov 22" or "06-01-2024"; try several parses.
  const monthDay = input.match(/^([A-Za-z]{3,})\s*(\d{1,2})$/);
  if (monthDay) {
    const months = {
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      may: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      oct: 9,
      nov: 10,
      dec: 11,
    } as Record<string, number>;
    const m = months[monthDay[1].slice(0, 3).toLowerCase()];
    const d = parseInt(monthDay[2], 10);
    if (!Number.isNaN(m) && !Number.isNaN(d)) {
      const now = new Date();
      return new Date(now.getFullYear(), m, d);
    }
  }

  // Fallback: try ISO-ish parse
  const iso = Date.parse(input);
  if (!Number.isNaN(iso)) return new Date(iso);
  return null;
}

type HeroAction =
  | {
      key: "like" | "dislike" | "attention";
    }
  | {
      key: "share";
      copy: true;
    };

const heroActions: HeroAction[] = [
  { key: "like" },
  { key: "dislike" },
  { key: "attention" },
  { key: "share", copy: true },
];

export default function HeroSection() {
  const [featured, setFeatured] = useState<NewsItemType | null>(null);
  const [reaction, setReaction] = useState<"like" | "dislike" | null>(null);
  const [attentionActive, setAttentionActive] = useState(false);
  const [shareMessage, setShareMessage] = useState<string>("");

  useEffect(() => {
    let mounted = true;
    fetchAllNews().then((items) => {
      if (!mounted || items.length === 0) return;
      const now = new Date();
      let best: NewsItemType | null = null;
      let bestDiff = Infinity;
      items.forEach((it) => {
        const dt = parseDateShort(it.date);
        if (!dt) return;
        const diff = Math.abs(dt.getTime() - now.getTime());
        if (diff < bestDiff) {
          bestDiff = diff;
          best = it;
        }
      });
      if (best) setFeatured(best);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const headline = featured ? featured.title : "STRIP PLAZA LAUNCHES";
  const dateLabel = featured ? featured.date : "06-01-2024";
  const paragraph = featured
    ? featured.excerpt || "Read more about this story on the details page."
    : `June 1st is a significant milestone for Strip Plaza, as it marks the
            grand opening of this exciting new venue. While we are thrilled to
            welcome our first guests, we are still making some final touches to
            enhance the experience. Currently, the auction is not yet in full
            swing, as we believe that a successful auction thrives on a bustling
            crowd. Therefore, our priority is to attract visitors and create a
            vibrant atmosphere before we kick off the auction festivities!`;

  const shareUrl = featured
    ? `/news-details/${featured.id}`
    : "/news-details/1";

  const handleActionClick = async (action: HeroAction) => {
    if (action.key === "like" || action.key === "dislike") {
      const k = action.key as "like" | "dislike";
      setReaction((current) => (current === k ? null : k));
      return;
    }

    if (action.key === "attention") {
      setAttentionActive((current) => !current);
      return;
    }

    const url =
      typeof window !== "undefined"
        ? window.location.origin + shareUrl
        : shareUrl;

    try {
      await navigator.clipboard.writeText(url);
      setShareMessage("Share link copied to clipboard.");
      window.setTimeout(() => setShareMessage(""), 1800);
    } catch {
      setShareMessage("Unable to copy the share link right now.");
      window.setTimeout(() => setShareMessage(""), 1800);
    }
  };

  const actionStyles = {
    like:
      reaction === "like"
        ? "border-red-600 bg-red-100 text-red-700"
        : "border-foreground bg-background text-foreground",
    dislike:
      reaction === "dislike"
        ? "border-slate-700 bg-slate-200 text-slate-900"
        : "border-foreground bg-background text-foreground",
    attention: attentionActive
      ? "border-yellow-500 bg-yellow-200 text-yellow-800"
      : "border-foreground bg-background text-foreground",
    share: shareMessage
      ? "border-green-600 bg-green-100 text-green-700"
      : "border-foreground bg-background text-foreground",
  } as const;

  return (
    <section className="paper-texture comic-border p-6 md:p-8">
      <div className="grid md:grid-cols-12 gap-6">
        {/* Main Article */}
        <div className="md:col-span-9 space-y-4 border-2 bg-background border-foreground p-8">
          <h1 className="font-comic text-4xl md:text-5xl text-primary drop-shadow-[1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000]">
            {headline}
          </h1>

          <div className="flex items-center gap-3">
            <span className="bg-primary text-white px-3 py-1 font-bold text-sm border-2 border-black drop-shadow-[2px_2px_0_#000]">
              {dateLabel}
            </span>
            <span className="bg-yellow-400 px-3 py-1 font-bold text-sm border-2 border-black drop-shadow-[2px_2px_0_#000]">
              HEADLINE
            </span>
          </div>

          <p className="text-gray-800 leading-relaxed text-lg">{paragraph}</p>

          <div className="flex items-center justify-between pt-4">
            <div className="flex flex-wrap gap-2">
              {heroActions.map((action) => (
                <button
                  key={action.key}
                  type="button"
                  onClick={() => handleActionClick(action)}
                  className={`comic-btn flex h-10 w-10 items-center justify-center border-2 drop-shadow-[2px_2px_0_#000] transition-colors ${actionStyles[action.key]}`}
                  aria-label={
                    action.key === "like"
                      ? "Like"
                      : action.key === "dislike"
                        ? "Dislike"
                        : action.key === "attention"
                          ? "Attention"
                          : "Share link"
                  }
                  title={
                    action.key === "like"
                      ? "Like"
                      : action.key === "dislike"
                        ? "Dislike"
                        : action.key === "attention"
                          ? "Attention"
                          : shareMessage || "Share link"
                  }
                >
                  {action.key === "like" && <ThumbsUp className="h-5 w-5" />}
                  {action.key === "dislike" && (
                    <ThumbsDown className="h-5 w-5" />
                  )}
                  {action.key === "attention" && <Bell className="h-5 w-5" />}
                  {action.key === "share" && <Share2 className="h-5 w-5" />}
                </button>
              ))}
            </div>

            <div className="flex flex-col items-end gap-2">
              <Link
                href={
                  featured ? `/news-details/${featured.id}` : "/news-details/1"
                }
                className="text-primary font-bold hover:underline font-comic text-lg"
              >
                [MORE]
              </Link>
              {shareMessage && (
                <p className="text-xs font-bold text-green-700 font-comic">
                  {shareMessage}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Featured Comic Preview */}
        <div className="md:col-span-3 space-y-3">
          <div className="comic-border border-2 bg-background border-foreground p-1">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="font-comic text-sm mb-2">
                  THE COLLECTOR #104
                </div>
                <div className="w-full">
                  <Image
                    src="/icons/commonLayout/444d07b2-07a5-4357-9b3d-b313c833567e.jpg.png"
                    alt="Comic Preview"
                    width={200}
                    height={300}
                    className="object-cover w-full h-full rounded"
                  />
                </div>
              </div>
            </div>
            <button className="w-full comic-btn text-primary font-bold font-comic py-2">
              READ FULL COMIC
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
