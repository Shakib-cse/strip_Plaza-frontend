"use client";

import Image from "next/image";

interface SidebarProps {
  position: "left" | "right";
}

export default function Sidebar({ position }: SidebarProps) {
  if (position === "left") {
    return (
      <aside className="sticky top-24">
        <div className="space-y-3">
          <Image
            src="/icons/commonLayout/image 23.png"
            alt="Left sidebar image 23"
            width={220}
            height={360}
            className="w-full h-auto"
          />
        </div>
      </aside>
    );
  }

  return (
    <aside className="sticky top-24">
      <div className="space-y-3">
        <Image
          src="/icons/commonLayout/image 25.png"
          alt="Right sidebar image 25"
          width={220}
          height={360}
          className="w-full h-auto"
        />
      </div>
    </aside>
  );
}
