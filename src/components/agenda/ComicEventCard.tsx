import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ComicEventCard() {
  return (
    <div className="w-full bg-background border-2 border-foreground overflow-hidden">
      {/* Comic Strip Image - Replace src with your actual image */}
      <div className="relative w-full aspect-3/1 m-6">
        <Image
          src="/icons/commonLayout/details.png"
          alt="Comic strip: Impossible! Ces bandes dessinées un investissement!"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="px-6 py-5 space-y-4">
        {/* Title Block */}
        <div className="space-y-0.5">
          <h2
            className="text-[28px] leading-tight font-black italic text-primary uppercase tracking-tight drop-shadow-[1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000]"
            style={{
              fontFamily:
                'Comic Sans MS, "Comic Neue", Chalkboard SE, sans-serif',
            }}
          >
            Comic Con Antwerp
          </h2>
          <p className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-medium flex items-center gap-1">
            <MapPin className="text-gray-500 font-medium tracking-[0.15em]" />
            Antwerp Expo
          </p>
        </div>

        {/* Description */}
        <p className="text-[13px] text-foreground leading-[1.6]">
          The biggest comic event of the year! Meet your favorite artists, find
          rare issues, and attend exclusive panels.
        </p>

        {/* Event Details Button */}
        <Link href="/agenda-details/1" className="block">
          <Button className="bg-foreground text-background hover:bg-gray-900 rounded-none px-6 h-9 text-[11px] font-semibold uppercase tracking-wider">
            Event Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
