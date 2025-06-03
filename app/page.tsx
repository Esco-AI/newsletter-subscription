"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    // The main container: takes up the full screen and centers content.
    // A subtle radial gradient adds a professional touch without being distracting.
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <main className="flex flex-col items-center w-full max-w-xl text-center">
        {/* 1. Logo for Trust and Branding */}
        <div className="mb-8">
          <Image
            src="/ESCO-logo-2.svg"
            alt="Esco Lifesciences Logo"
            width={180}
            height={60}
            priority
          />
        </div>

        {/* 2. The Core Message (Headline and Subtext) */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00467F] tracking-tight">
            🧬 Join Lab Minds Like Yours
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            Connect with us for expert insights, practical tips, and the latest
            advancements in laboratory safety and innovation.
            <br />
            <br />
            Together, let’s build safer, smarter labs—because your work drives
            progress.
          </p>
        </div>

        {/* 3. The Primary Call-to-Action Button */}
        <button
          onClick={() => router.push("/newsletter-subs")}
          className="bg-[#005D9F] text-white rounded-xl px-10 py-4 font-bold text-lg md:text-xl
                              hover:bg-[#004C80] 
                              transition-transform transform hover:scale-105 
                              shadow-lg hover:shadow-xl focus:outline-none 
                              focus:ring-4 focus:ring-blue-300"
        >
          Subscribe for Expert Insights
        </button>
      </main>
    </div>
  );
}
