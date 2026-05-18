"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get current month/year
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Total days in current month
  const totalDays = new Date(year, month + 1, 0).getDate();

  // First day of month (optional if needed later)
  // const firstDay = new Date(year, month, 1).getDay();

  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  // Example event days (can later come from DB/API)
  const eventDays = [10, 11, 17, 18, 24, 25];

  // Get weekends dynamically
  const weekendDays = days.filter((day) => {
    const date = new Date(year, month, day).getDay();
    return date === 0 || date === 6; // Sunday or Saturday
  });

  // Today's date check
  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === month && today.getFullYear() === year;

  const todayDate = isCurrentMonth ? today.getDate() : null;

  // Change month
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <section className="p-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-black italic text-primary uppercase tracking-tight">
          Calendar events for this month
        </h2>

        <div className="flex items-center gap-4 text-primary font-bold text-sm">
          <ChevronLeft
            size={20}
            className="cursor-pointer hover:opacity-70"
            onClick={handlePrevMonth}
          />

          <span className="uppercase tracking-widest">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>

          <ChevronRight
            size={20}
            className="cursor-pointer hover:opacity-70"
            onClick={handleNextMonth}
          />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-10 gap-2 mb-12">
        {days.map((day) => {
          const isEvent = eventDays.includes(day);
          const isWeekend = weekendDays.includes(day);
          const isToday = day === todayDate;

          return (
            <div
              key={day}
              className={`
                h-10 w-full flex items-center justify-center text-sm font-medium transition-all rounded-md
                ${isEvent ? "bg-primary text-white" : ""}
                ${isWeekend && !isEvent ? "bg-gray-300 text-gray-600" : ""}
                ${
                  isToday && !isEvent && !isWeekend
                    ? "border border-gray-400 text-foreground"
                    : ""
                }
                ${
                  !isEvent && !isWeekend && !isToday
                    ? "bg-transparent text-gray-700"
                    : ""
                }
              `}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex justify-end gap-6 text-[10px] font-bold uppercase tracking-wider text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rounded-sm"></div>
          <span>Event</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
          <span>Weekend</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border border-gray-400 rounded-sm"></div>
          <span>Today</span>
        </div>
      </div>
    </section>
  );
}