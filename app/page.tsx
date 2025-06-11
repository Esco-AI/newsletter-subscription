"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import VerticalTicker from "@/components/vertical-ticker";
import HorizontalTicker from "@/components/horizontal-ticker";

export default function Home() {
  const router = useRouter();

  const leftImages = ["/image-1.png", "/image-2.png", "/image-3.png"];
  const rightImages = ["/image-4.png", "/image-5.png", "/image-6.png"];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left section */}
      <div className="flex flex-col w-full max-w-full lg:max-w-[870px] min-h-screen">
        {/* Logo at top */}
        <div className="flex items-center justify-center pt-8 pb-2 lg:justify-start lg:pl-[52px] lg:pt-[53px]">
          <Image
            src="/ESCO-logo-2.svg"
            alt="ESCO Logo"
            width={160}
            height={60}
            priority
            className="lg:w-[130px] lg:h-[52px]"
          />
        </div>

        <div className="block mt-14 lg:hidden">
          <HorizontalTicker
            images={[
              "/image-1.png",
              "/image-2.png",
              "/image-3.png",
              "/image-4.png",
              "/image-5.png",
              "/image-6.png",
            ]}
            direction="left"
            speed={25}
            imgWidth={226}
            imgHeight={297}
            gap={16}
          />
        </div>

        {/* Centered content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 pb-8 lg:items-start lg:px-[89px]">
          <h1 className="text-[22px] leading-[1.35] font-semibold text-[#00467F] mb-5 text-center lg:text-left lg:text-4xl">
            Connect with us for expert insights, practical tips, and the latest
            advancements in laboratory safety and innovation.
          </h1>
          <p className="text-base text-neutral-700 mb-6 text-center lg:text-left lg:text-xl">
            Together, let’s build safer, smarter labs—because your work drives
            progress.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={() => router.push("/newsletter-subs")}
              className="w-full h-[50px] bg-[#00467F] hover:bg-[#0070C0] transition-colors text-white rounded-2xl shadow-md text-lg font-semibold mb-2"
            >
              Subscribe for Expert Insights
            </button>
            <a
              href="https://www.escolifesciences.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[50px] flex items-center justify-center border border-gray-300 text-[#00467F] rounded-2xl bg-white hover:bg-gray-100 transition text-lg font-medium"
            >
              Visit our Website
            </a>
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className="hidden lg:flex gap-6 px-0 lg:px-[98px]">
        <VerticalTicker images={leftImages} direction="down" speed={30} />
        <VerticalTicker images={rightImages} direction="up" speed={30} />
      </div>
    </div>
  );
}
