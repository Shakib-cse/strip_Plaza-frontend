"use client";

import Image from "next/image";
import { ThumbsUp, ThumbsDown, MessageCircle, Eye } from "lucide-react";
import Link from "next/link";

export default function DetailsHeroSection() {
  return (
    <section className="paper-texture comic-border p-6 md:p-8">
      {/* Main Article */}
      <div className="md:col-span-9 space-y-4 border-4 bg-background border-foreground p-8">
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
          <div className="flex gap-2">
            <button className="comic-btn p-2 bg-background border-2 border-foreground drop-shadow-[2px_2px_0_#000]">
              <ThumbsUp className="w-5 h-5 text-primary" />
            </button>
            <button className="comic-btn p-2 bg-background border-2 border-foreground drop-shadow-[2px_2px_0_#000]">
              <ThumbsDown className="w-5 h-5" />
            </button>
            <button className="comic-btn p-2 bg-background border-2 border-foreground drop-shadow-[2px_2px_0_#000]">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="comic-btn p-2 bg-background border-2 border-foreground drop-shadow-[2px_2px_0_#000]">
              <Eye className="w-5 h-5" />
            </button>
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
