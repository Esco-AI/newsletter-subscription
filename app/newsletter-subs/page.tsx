// app/newsletter-subs/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/footer";
import NewsletterForm from "@/components/newsletter-form";
import SubscriptionSuccess from "@/components/subscription-success"; // Import the new component

export default function NewsletterSubsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="w-full flex-grow">
        {/* Hero Section */}
        <div className="relative w-full h-72 md:h-80 text-white">
          {/* Background Image */}
          <Image
            src="/product-banner.png"
            alt="Scientific research banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-blue-900 bg-opacity-60" /> */}

          {/* Content */}
          {/* <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight shadow-sm">
              Stay Ahead in Science
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Subscribe to our newsletter for the latest research, product
              updates, and expert insights from Esco Lifesciences.
            </p>
          </div> */}
        </div>

        {/* Conditional rendering of Form or Success message */}
        {!submitted ? (
          <NewsletterForm onSuccess={() => setSubmitted(true)} />
        ) : (
          <SubscriptionSuccess />
        )}
      </main>

      {/* The Footer remains at the bottom */}
      <Footer />
    </div>
  );
}
