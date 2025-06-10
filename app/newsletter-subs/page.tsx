// app/newsletter-subs/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import NewsletterForm from "@/components/newsletter-form";
import SubscriptionSuccess from "@/components/subscription-success";
import { ChevronLeft } from "lucide-react";

export default function NewsletterSubsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex justify-between bg-[url('/E-Blast-bg.png')]">
      <div className="flex flex-col w-full max-w-1/2">
        <div className="flex justify-between items-center px-[52px] pt-[53px]">
          <Image
            src="/ESCO-logo-1.svg"
            alt="ESCO Logo"
            width={130}
            height={52}
            priority
          />
          <a
            href="https://www.escolifesciences.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 justify-center w-[200px] h-[48px] rounded text-white font-medium text-sm transition-transform hover:scale-110"
          >
            <ChevronLeft size={24} />
            Back to Our Website
          </a>
        </div>
        <div className="flex-1 flex flex-col justify-center pl-[89px]">
          <h1 className="text-4xl leading-snug font-bold text-white mb-3">
            Join Lab Minds Like Yours
          </h1>
          <p className="text-xl text-white">
            Connect with us for expert insights, practical tips, and the latest
            advancements in laboratory safety and innovation.
          </p>
        </div>
      </div>

      <div>
        {!submitted ? (
          <NewsletterForm onSuccess={() => setSubmitted(true)} />
        ) : (
          <SubscriptionSuccess />
        )}
      </div>
    </div>
  );
}
