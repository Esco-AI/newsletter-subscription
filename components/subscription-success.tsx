import Image from "next/image";
import { motion } from "framer-motion";

export default function SubscriptionSuccess() {
  return (
    // This outer container is now simplified to just ensure full size.
    <div className="w-full h-full">
      <motion.div
        // The key change is REMOVING lg:h-auto, so h-full applies to all screen sizes.
        className="bg-white w-full flex flex-col items-center justify-center text-center p-8 relative shadow-xl h-full rounded-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* ESCO Logo (hidden on mobile, visible on desktop) */}
        <motion.div
          className="absolute top-8 left-8 hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/ESCO-logo-2.svg"
            alt="ESCO Logo"
            width={130}
            height={52}
          />
        </motion.div>

        {/* Centered Content */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            <Image
              src="/check-mark-icon.svg"
              alt="Success Checkmark"
              width={128}
              height={95}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="my-6 text-3xl md:text-4xl font-normal text-[#00467F]"
          >
            Thank you for Subscribing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base text-[#2E3A59] max-w-sm"
          >
            You’re all set. You’ll receive our next newsletter in your inbox
            soon.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
