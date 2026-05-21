import { ComicEventCard } from "@/components/agenda/ComicEventCard";
import { UpcomingHighlights } from "@/components/agenda/EventCard";

export default function AgendaPage() {
  return (
    <section className="p-6 md:p-8">
      <ComicEventCard />
      <UpcomingHighlights />
    </section>
  );
}
