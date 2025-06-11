"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HorizontalTickerProps = {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  imgWidth?: number;
  imgHeight?: number;
  gap?: number;
};

export default function HorizontalTicker({
  images,
  direction = "left",
  speed = 30,
  className = "",
  imgWidth = 226,
  imgHeight = 297,
  gap = 16,
}: HorizontalTickerProps) {
  // Duplicate images for seamless scroll
  const imageList = [...images, ...images];
  const visibleCount = images.length;
  const moveDistance = (imgWidth + gap) * visibleCount;

  const animation =
    direction === "left"
      ? { x: [0, -moveDistance] }
      : { x: [-moveDistance, 0] };

  return (
    <div
      className={`overflow-hidden w-full flex items-center ${className}`}
      style={{ height: imgHeight }}
    >
      <motion.div
        animate={animation}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
        className="flex"
      >
        {imageList.map((img, idx) => (
          <div
            key={idx}
            className="mr-4 last:mr-0 rounded-xl overflow-hidden"
            style={{ width: imgWidth, height: imgHeight, marginRight: gap }}
          >
            <Image
              src={img}
              alt={`Horizontal Image ${idx + 1}`}
              width={imgWidth}
              height={imgHeight}
              className="object-cover w-full h-full"
              priority={idx < 3}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
