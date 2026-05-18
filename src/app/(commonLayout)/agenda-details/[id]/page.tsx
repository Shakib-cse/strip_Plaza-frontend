import { CalendarDays, MapPin, Clock, ChevronLeft } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen py-6 px-4 md:py-10 md:px-8">
      <div className="mx-auto">
        {/* Back Link
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-bold text-black mb-4 hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          BACK TO CALENDAR
        </a> */}

        {/* Main Card */}
        <div className="bg-background paper-texture border-2 border-foreground p-6 md:p-10">
          {/* Title */}
          <h1 className="comic-title text-comic-outline text-primary text-2xl md:text-4xl mb-5 drop-shadow-[1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000]">
            COMIC CON ANTWERP
          </h1>

          {/* Info Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 border-[2px] border-foreground px-3 py-1.5 bg-background">
              <CalendarDays
                className="w-4 h-4 text-foreground"
                strokeWidth={2.5}
              />
              <span className="text-xs font-bold tracking-wide">
                NOV 17 - 18, 2024
              </span>
            </div>
            <div className="inline-flex items-center gap-2 border-[2px] border-foreground px-3 py-1.5 bg-background">
              <MapPin className="w-4 h-4 text-foreground" strokeWidth={2.5} />
              <span className="text-xs font-bold tracking-wide">
                ANTWERP EXPO
              </span>
            </div>
            <div className="inline-flex items-center gap-2 border-[2px] border-foreground px-3 py-1.5 bg-background">
              <Clock className="w-4 h-4 text-foreground" strokeWidth={2.5} />
              <span className="text-xs font-bold tracking-wide">
                10:00 AM - 07:00 PM
              </span>
            </div>
          </div>

          {/* Main Image */}
          <div className="border-2 border-foreground mb-6 overflow-hidden">
            <img
              src="/icons/commonLayout/agenda-details.png"
              alt="Comic Con Explosion"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Body Text */}
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground font-medium">
            <p>
              The biggest comic event of the year returns to the Antwerp Expo!
              Whether you are a hardcore collector hunting for that elusive
              Golden Age first appearance, or a casual fan looking to meet the
              creators behind your favorite modern series, Comic Con Antwerp has
              something for everyone. This year spans over two massive halls,
              bringing together the very best of European, American, and Asian
              comic traditions.
            </p>
            <p>
              This year&apos;s guest list is our largest yet, featuring
              international legends and rising indie stars. Don&apos;t miss out
              on exclusive panels, live drawing sessions, and the legendary
              Saturday Night Cosplay Contest. Fans will have the unprecedented
              opportunity to get their favorite issues signed by legendary
              inkers and writers in the dedicated Artist Alley.
            </p>
            <p>
              Beyond the comics, immerse yourself in a world of pop culture with
              exclusive merchandise booths, limited edition art prints, and
              retro toy vendors. The convention floor will also host interactive
              workshops on comic creation, digital coloring, and scriptwriting
              hosted by industry professionals.
            </p>
            <p>
              Food trucks featuring local and international cuisine will be
              stationed outside the main pavilion. The venue is fully
              accessible, ensuring a comfortable experience for all attendees.
              Prepare your pull lists and cosplay outfits—this weekend is set to
              be a milestone in comic history!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
