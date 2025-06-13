// app/newsletter-subs/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import NewsletterForm from "@/components/newsletter-form";
import SubscriptionSuccess from "@/components/subscription-success";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsletterSubsPage() {
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[url('/E-Blast-bg.png')] bg-cover bg-center overflow-hidden">
      {/* Left Section */}
      <div className="flex flex-col w-full lg:max-w-1/2">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-between items-center px-4 pt-6 lg:px-[52px] lg:pt-[53px]"
        >
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
            className="flex items-center gap-2 justify-center w-[160px] h-[40px] lg:w-[200px] lg:h-[48px] rounded text-white font-medium text-xs lg:text-sm transition-transform hover:scale-110"
          >
            <ChevronLeft size={24} />
            Back to Our Website
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-center px-4 lg:pl-[89px]"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl lg:text-4xl leading-snug font-bold text-white mb-3 mt-5"
          >
            Join Lab Minds Like Yours
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-xl text-white"
          >
            Connect with us for expert insights, practical tips, and the latest
            advancements in laboratory safety and innovation.
          </motion.p>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="w-full flex-1 flex flex-col justify-center lg:flex-row lg:items-center lg:h-screen">
        {/* THIS IS THE FIX: The container is h-auto on mobile but h-full on desktop for the success view */}
        <div className={`w-full ${!submitted ? "h-full" : "h-auto lg:h-full"}`}>
          {!submitted ? (
            <NewsletterForm onSuccess={() => setSubmitted(true)} />
          ) : (
            <SubscriptionSuccess />
          )}
        </div>
      </div>
    </div>
  );
}
