import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, CalendarDays, Star, Menu } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  location: string;
  description: string;
  month: string;
  date: string;
  icon?: string;
}

const fairsData: EventItem[] = [
  {
    id: "1",
    title: "COMIC CON ANTWERP",
    location: "ANTWERP EXPO",
    description:
      "The biggest comic event of the year! Meet your favorite artists, find rare issues, and...",
    month: "NOV",
    date: "17 - 18",
  },
  {
    id: "2",
    title: "COMIC CON ANTWERP",
    location: "ANTWERP EXPO",
    description:
      "The biggest comic event of the year! Meet your favorite artists, find rare issues, and...",
    month: "NOV",
    date: "17 - 18",
  },
  {
    id: "3",
    title: "COMIC CON ANTWERP",
    location: "ANTWERP EXPO",
    description:
      "The biggest comic event of the year! Meet your favorite artists, find rare issues, and...",
    month: "NOV",
    date: "17 - 18",
  },
  {
    id: "4",
    title: "COMIC CON ANTWERP",
    location: "ANTWERP EXPO",
    description:
      "The biggest comic event of the year! Meet your favorite artists, find rare issues, and...",
    month: "NOV",
    date: "17 - 18",
  },
];

const eventsData: EventItem[] = [
  {
    id: "5",
    title: "COMIC CON ANTWERP",
    location: "ANTWERP EXPO",
    description:
      "The biggest comic event of the year! Meet your favorite artists, find rare issues, and...",
    month: "NOV",
    date: "22",
  },
  {
    id: "6",
    title: "COMIC CON ANTWERP",
    location: "ANTWERP EXPO",
    description:
      "The biggest comic event of the year! Meet your favorite artists, find rare issues, and...",
    month: "OCT",
    date: "25",
  },
  {
    id: "7",
    title: "COMIC CON ANTWERP",
    location: "ANTWERP EXPO",
    description:
      "The biggest comic event of the year! Meet your favorite artists, find rare issues, and...",
    month: "NOV",
    date: "17 - 18",
  },
  {
    id: "8",
    title: "COMIC CON ANTWERP",
    location: "ANTWERP EXPO",
    description:
      "The biggest comic event of the year! Meet your favorite artists, find rare issues, and...",
    month: "NOV",
    date: "5",
  },
];

function EventCard({ item }: { item: EventItem }) {
  return (
    <div className="border border-foreground bg-background flex flex-row">
      {/* Left Side: Icon & Date — fixed width, never shrinks */}
      <div className="flex flex-col items-center justify-start w-[64px] sm:w-[76px] pt-3 pb-3 border-r border-foreground flex-shrink-0">
        <img
          src="/icons/commonLayout/book.png"
          alt="Event icon"
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-2 sm:mb-3"
        />
        <div className="text-center leading-none">
          <div className="text-[9px] sm:text-[10px] font-medium text-foreground uppercase tracking-wide mb-0.5">
            {item.month}
          </div>
          <div className="text-[15px] sm:text-[18px] font-bold text-foreground leading-none">
            {item.date}
          </div>
        </div>
      </div>

      {/* Middle: Content — grows to fill, clamps to avoid overflow */}
      <div className="flex-1 p-2 sm:p-3 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="text-primary text-[9px] sm:text-[10px] uppercase tracking-wide mb-1 truncate">
            {item.title}
          </h3>
          <div className="flex items-center gap-1 text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-wider mb-1.5 sm:mb-2">
            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
            <span className="truncate">{item.location}</span>
          </div>
          <p className="text-[10px] sm:text-[11px] text-gray-600 leading-snug line-clamp-2 mb-2 sm:mb-3">
            {item.description}
          </p>
        </div>
        <Link
          href={`/agenda-details/${item.id}`}
          className="w-full inline-flex items-center justify-center rounded-none bg-foreground hover:bg-gray-800 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider h-6 sm:h-7 px-0"
        >
          Event Details
        </Link>
      </div>

      {/* Right Side: Image Placeholder — hidden on very small screens, shown on sm+ */}
      <div className="hidden xs:block w-[60px] sm:w-[80px] bg-gray-300 border-l border-gray-300 flex-shrink-0 m-2 sm:m-4" />
    </div>
  );
}

export function UpcomingHighlights() {
  return (
    <div className="w-full mx-auto px-3 sm:px-4 py-4 font-sans mt-4">
      {/* Section Header */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Menu />
          <h2 className="text-base sm:text-lg uppercase tracking-wide text-foreground">
            Upcoming Highlights
          </h2>
        </div>
        <div className="border-b-2 border-dashed border-foreground" />
      </div>

      {/* Two Column Grid: stacks on mobile, side-by-side on lg+ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column: Fairs */}
        <div>
          <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-foreground">
            <CalendarDays
              className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0"
              strokeWidth={2.5}
            />
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wide">
              Fairs / Stripbeurzen
            </span>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {fairsData.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Right Column: Events */}
        <div>
          <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-foreground">
            <Star
              className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0"
              strokeWidth={2.5}
              fill="currentColor"
            />
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wide">
              Events / Tentoonstellingen
            </span>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {eventsData.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}