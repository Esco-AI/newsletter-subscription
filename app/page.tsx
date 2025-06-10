"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import VerticalTicker from "@/components/vertical-ticker";

export default function Home() {
  const router = useRouter();

  const leftImages = ["/image-1.png", "/image-2.png", "/image-3.png"];
  const rightImages = ["/image-4.png", "/image-5.png", "/image-6.png"];

  return (
    <div className="min-h-screen flex justify-between bg-white">
      {/* Left section */}
      <div className="flex flex-col w-full max-w-[870px]">
        {/* Logo at top */}
        <div className="pl-[52px] pt-[53px]">
          <Image
            src="/ESCO-logo-2.svg"
            alt="ESCO Logo"
            width={130}
            height={52}
            priority
          />
        </div>
        <div className="flex-1 flex flex-col justify-center pl-[89px]">
          <h1 className="text-[2rem] leading-snug font-normal text-[#00467F] mb-[43px]">
            Connect with us for expert insights, practical tips, and the latest
            advancements in laboratory safety and innovation.
          </h1>
          <p className="text-xl text-black mb-[43px]">
            Together, let’s build safer, smarter labs—because your work drives
            progress.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/newsletter-subs")}
              className="bg-[#00467F] hover:bg-[#00345c] transition-colors w-[275px] h-[48px] text-white rounded font-medium cursor-pointer border-none"
            >
              Subscribe for Expert Insights
            </button>
            <a
              href="https://www.escolifesciences.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-black w-[202px] h-[48px] rounded text-black font-medium bg-white hover:bg-gray-50 transition-colors"
            >
              Visit our Website
            </a>
          </div>
        </div>
      </div>
      {/* Right section (images, ticker effect) */}
      <div className="flex gap-6 px-[98px]">
        <VerticalTicker images={leftImages} direction="down" speed={30} />
        <VerticalTicker images={rightImages} direction="up" speed={30} />
      </div>
    </div>
  );
}
