import type { ReactNode } from "react";

import Footer from "@/components/commonalayout/Footer";
import Navbar from "@/components/commonalayout/Header";
import Sidebar from "@/components/commonalayout/Sidebar";
import Image from "next/image";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("/icons/commonLayout/bodyBg.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <div className="container mx-auto flex w-full flex-1 px-6 py-8 mt-10">
          <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-2">
              <Sidebar position="left" />
            </div>

            <div className="lg:col-span-8 space-y-8 p-2 w-full bg-[#EAEAEA] min-h-screen relative">
              {/* right side image */}
              <Image
                src="/icons/commonLayout/Main - Side bar.png"
                alt="Page Background"
                width={500}
                height={800}
                className="absolute -right-3 w-[15px] pointer-events-none top-1/2 -translate-y-1/2 h-[102%]"
              />

              {/* top image */}
              <Image
                src="/icons/commonLayout/Main 2.png"
                alt="Page Background"
                width={500}
                height={800}
                className="absolute -top-4 h-[30px] pointer-events-none left-1/2 -translate-x-1/2 w-[100%]"
              />

              {/* left image */}
              <Image
                src="/icons/commonLayout/asdfas.png"
                alt="Page Background"
                width={500}
                height={800}
                className="absolute -left-3 w-[15px] pointer-events-none top-1/2 -translate-y-1/2 h-[102%]"
              />

              {/* bottom image */}
              <Image
                src="/icons/commonLayout/aaaaaaa 2.png"
                alt="Page Background"
                width={500}
                height={800}
                className="absolute -bottom-11 h-[30px] pointer-events-none left-1/2 -translate-x-1/2 w-[100%]"
              />

              {children}
            </div>

            <div className="hidden lg:block lg:col-span-2">
              <Sidebar position="right" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
