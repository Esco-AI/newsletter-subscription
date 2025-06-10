"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type VerticalTickerProps = {
  images: string[];
  direction?: "up" | "down";
  speed?: number;
};

export default function VerticalTicker({
  images,
  direction = "down",
  speed = 30,
}: VerticalTickerProps) {
  const imageList = [...images, ...images];
  const imgHeight = 297;
  const imgGap = 24;
  const visibleCount = images.length;
  const moveDistance = (imgHeight + imgGap) * visibleCount;

  const animation =
    direction === "down"
      ? { y: [-moveDistance, 0] }
      : { y: [0, -moveDistance] };

  return (
    <div className="overflow-hidden h-screen w-[226px] rounded-[18px] relative">
      <motion.div
        animate={animation}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
        className="flex flex-col"
      >
        {imageList.map((img, idx) => (
          <div
            key={idx}
            className="mb-6 last:mb-0 w-[226px] h-[297px] rounded-[18px] overflow-hidden"
          >
            <Image
              src={img}
              alt={`Image ${idx + 1}`}
              width={226}
              height={297}
              className="object-cover"
              priority={idx < 3}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
