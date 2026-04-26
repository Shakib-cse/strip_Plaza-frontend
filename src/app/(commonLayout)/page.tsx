import CalendarWidget from "@/components/commonalayout/CalendarWidget";
import HeroSection from "@/components/commonalayout/Hero";
import NewsGrid from "@/components/commonalayout/NewsItem";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <HeroSection />
        <CalendarWidget />
        <NewsGrid />

        <div className="flex justify-center py-4">
          <Image
            src="/icons/commonLayout/image 27.png"
            alt="Strip Plaza Logo"
            width={120}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
