"use client";

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const activeDays = [10, 11, 17, 18, 24, 25, 31];

export default function CalendarWidget() {
  return (
    <section className="paper-texture comic-border p-6 border-4 border-foreground mx-8">
      <h2 className="font-comic text-2xl text-primary mb-4 drop-shadow-[1px_1px_0_#000]">
        CALENDAR EVENTS FOR THIS MONTH
      </h2>

      <div className="border-t-4 border-black pt-4">
        <div className="grid grid-cols-7 md:grid-cols-11 gap-2">
          {days.map((day) => (
            <button
              key={day}
              className={`calendar-day ${
                activeDays.includes(day) ? "active" : "hover:bg-gray-100"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
