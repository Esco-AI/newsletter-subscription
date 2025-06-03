"use client";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer";
import NewsletterForm from "@/components/newsletter-form";

export default function NewsletterSubsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <main className="mx-auto w-full flex-1">
        {/* Banner */}
        <div className=" w-full">
          <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden">
            <Image
              src="/product-banner.png"
              alt="Product"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {!submitted ? (
          <NewsletterForm onSuccess={() => setSubmitted(true)} />
        ) : (
          <div className="m-auto p-8 text-center text-[#00467F] text-xl">
            Thank you for subscribing! 🎉
            <br />
            You’ll receive our next newsletter in your inbox.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
