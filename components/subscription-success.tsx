import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SubscriptionSuccess() {
  return (
    <div className="flex items-center justify-center p-3 min-h-screen lg:h-screen w-full">
      <motion.div
        className="flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-xl p-4 sm:p-8 w-full h-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
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
          <CheckCircle className="text-green-500" size={60} strokeWidth={2} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-tight"
        >
          Thank You for Subscribing!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 px-4 leading-relaxed"
        >
          You’re all set. You'll receive our next newsletter in your inbox soon.
        </motion.p>
      </motion.div>
    </div>
  );
}
