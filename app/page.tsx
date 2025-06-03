"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-lg mx-auto text-center px-4">
        <button
          className="bg-[#005D9F] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#004C80] transition text-lg shadow"
          onClick={() => router.push("/newsletter-subs")}
        >
          🧬 Join Lab Minds Like Yours
        </button>
        <p className="mb-8 text-gray-700 md:text-lg">
          Connect with us for expert insights, practical tips, and the latest
          advancements in laboratory safety and innovation.
          <br />
          Together, let’s build safer, smarter labs—because your work drives
          progress.
        </p>
      </div>
    </div>
  );
}
