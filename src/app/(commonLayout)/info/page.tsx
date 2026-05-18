import Image from "next/image";

export default function InfoPage() {
  return (
    <section className="p-6 md:p-8 border-2 border-foreground bg-background comic-border m-6">
      <h1 className="font-comic text-4xl text-primary drop-shadow-[1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000]">
        STRIP DATABASE
      </h1>
      <div className="mt-4 inline-block border-2 bg-primary px-4 py-2 text-white font-bold text-sm border-black drop-shadow-[2px_2px_0_#000]">
        WORK IN PROGRESS
      </div>
      <div className="mt-8">
        <Image
          src="/icons/commonLayout/wip.png"
          alt="Working in progress"
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <p className="mt-8 text-lg text-gray-800 font-comic">
        We are working on the Strip database. Stay Tuned !!!
      </p>
    </section>
  );
}
