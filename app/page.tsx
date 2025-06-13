"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import VerticalTicker from "@/components/vertical-ticker";
import HorizontalTicker from "@/components/horizontal-ticker";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const leftImages = ["/image-1.png", "/image-2.png", "/image-3.png"];
  const rightImages = ["/image-4.png", "/image-5.png", "/image-6.png"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-x-hidden">
      {/* Left section */}
      <div className="flex flex-col w-full max-w-full lg:max-w-[870px] pb-8 lg:pb-0">
        <div className="flex flex-col flex-grow lg:justify-center lg:min-h-screen">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center pt-8 pb-2 lg:justify-start lg:pl-[52px] lg:pt-[53px] lg:pb-0"
          >
            <Image
              src="/ESCO-logo-2.svg"
              alt="ESCO Logo"
              width={160}
              height={60}
              priority
              className="lg:w-[130px] lg:h-[52px]"
            />
          </motion.div>

          {/* Horizontal Ticker for mobile view with animation */}
          <motion.div
            className="block mt-8 lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-grow flex flex-col justify-center items-center px-6 py-6 lg:items-start lg:px-[89px]"
          >
            <motion.h1
              variants={itemVariants}
              className="text-xl leading-normal font-semibold text-[#00467F] mb-4 text-center lg:text-left lg:text-4xl"
            >
              Connect with us for expert insights, practical tips, and the
              latest advancements in laboratory safety and innovation.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base text-neutral-700 mb-6 text-center lg:text-left lg:text-xl"
            >
              Together, let’s build safer, smarter labs—because your work drives
              progress.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 w-full max-w-sm mx-auto lg:flex-row lg:justify-start lg:gap-4 lg:w-auto lg:max-w-full lg:mx-0"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/newsletter-subscription")}
                className="w-full h-[50px] bg-[#00467F] hover:bg-[#0070C0] transition-colors text-white rounded-sm shadow-md text-base font-normal lg:px-4 lg:w-[275px] cursor-pointer"
              >
                Subscribe for Expert Insights
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.escolifesciences.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[50px] flex items-center justify-center border border-gray-300 text-[#00467F] rounded-sm bg-white hover:bg-gray-100 transition text-base font-normal lg:w-auto lg:px-8 lg:flex-1"
              >
                Visit our Website
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right section with animation */}
      <div className="hidden lg:flex gap-6 px-0 lg:mx-auto">
        {/* Animate first vertical ticker from the left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <VerticalTicker images={leftImages} direction="down" speed={30} />
        </motion.div>
        {/* Animate second vertical ticker from the right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <VerticalTicker images={rightImages} direction="up" speed={30} />
        </motion.div>
      </div>
    </div>
  );
}
