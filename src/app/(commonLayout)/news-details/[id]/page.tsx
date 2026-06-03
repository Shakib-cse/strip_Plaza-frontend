"use client";

import { Bell, Share2, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function DetailsHeroSection() {
  const [reaction, setReaction] = useState<"like" | "dislike" | null>(null);
  const [attentionActive, setAttentionActive] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const shareUrl = typeof window !== "undefined" ? window.location.href : "/";

  const handleActionClick = async (
    action: "like" | "dislike" | "attention" | "share",
  ) => {
    if (action === "like" || action === "dislike") {
      setReaction((current) => (current === action ? null : action));
      return;
    }

    if (action === "attention") {
      setAttentionActive((current) => !current);
      return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
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
      {/* Main Article */}
      <div className="md:col-span-9 space-y-4 border-2 bg-background border-foreground p-8">
        <h1 className="font-comic text-4xl md:text-5xl text-primary drop-shadow-[1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000]">
          STRIP PLAZA LAUNCHES
        </h1>

        <div className="flex items-center gap-3">
          <span className="bg-primary text-white px-3 py-1 font-bold text-sm border-2 border-black drop-shadow-[2px_2px_0_#000]">
            06-01-2024
          </span>
          <span className="bg-yellow-400 px-3 py-1 font-bold text-sm border-2 border-black drop-shadow-[2px_2px_0_#000]">
            HEADLINE
          </span>
        </div>

        <div className="flex justify-center py-4">
          <Image
            src="/icons/commonLayout/details.png"
            alt="details image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-gray-800 leading-relaxed text-lg">
          June 1st is a significant milestone for Strip Plaza, as it marks the
          grand opening of this exciting new venue. While we are thrilled to
          welcome our first guests, we are still making some final touches to
          enhance the experience. Currently, the auction is not yet in full
          swing, as we believe that a successful auction thrives on a bustling
          crowd. Therefore, our priority is to attract visitors and create a
          vibrant atmosphere before we kick off the auction festivities!
        </p>

        <div className="flex items-center justify-between pt-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleActionClick("like")}
              className={`comic-btn p-2 border-2 drop-shadow-[2px_2px_0_#000] transition-colors ${actionStyles.like}`}
              aria-label="Like"
              title="Like"
            >
              <ThumbsUp className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleActionClick("dislike")}
              className={`comic-btn p-2 border-2 drop-shadow-[2px_2px_0_#000] transition-colors ${actionStyles.dislike}`}
              aria-label="Dislike"
              title="Dislike"
            >
              <ThumbsDown className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleActionClick("attention")}
              className={`comic-btn p-2 border-2 drop-shadow-[2px_2px_0_#000] transition-colors ${actionStyles.attention}`}
              aria-label="Attention"
              title="Attention"
            >
              <Bell className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleActionClick("share")}
              className={`comic-btn p-2 border-2 drop-shadow-[2px_2px_0_#000] transition-colors ${actionStyles.share}`}
              aria-label="Share link"
              title={shareMessage || "Share link"}
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col items-end gap-2">
            {shareMessage && (
              <p className="text-xs font-bold text-green-700 font-comic">
                {shareMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4">
        <Image
          src="/icons/commonLayout/image 27.png"
          alt="Strip Plaza Logo"
          width={120}
          height={60}
        />
      </div>
    </section>
  );
}
