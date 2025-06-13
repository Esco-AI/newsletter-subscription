"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type HorizontalTickerProps = {
  images: string[];
  imgWidth?: number;
  imgHeight?: number;
};

const CARD_OFFSET = 15; // How much the back cards stick out
const SCALE_FACTOR = 0.1; // How much smaller the back cards are

export default function HorizontalTicker({
  images,
  imgWidth = 300,
  imgHeight = 467,
}: HorizontalTickerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDragEnd = (event: any, info: any) => {
    const { offset, velocity } = info;
    // A simplified but effective check for swipe strength and direction
    if (offset.x < -50 || velocity.x < -500) {
      // Swiped left
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (offset.x > 50 || velocity.x > 500) {
      // Swiped right
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div className="relative" style={{ width: imgWidth, height: imgHeight }}>
      {/* This div is for capturing drag events */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        className="absolute top-0 left-0 w-full h-full z-20 cursor-grab active:cursor-grabbing"
      />

      <div className="absolute w-full h-full" style={{ perspective: "1000px" }}>
        {images.map((image, i) => {
          // New logic to calculate the relative index with wrapping
          let relativeIndex = i - activeIndex;
          const totalImages = images.length;
          if (relativeIndex > totalImages / 2) {
            relativeIndex -= totalImages;
          }
          if (relativeIndex < -totalImages / 2) {
            relativeIndex += totalImages;
          }

          let style = {};
          if (relativeIndex === 0) {
            style = {
              transform: "translateZ(0px)",
              zIndex: 3,
              opacity: 1,
            };
          } else if (relativeIndex === -1) {
            // Previous
            style = {
              transform: `translateX(-${CARD_OFFSET}%) scale(${
                1 - SCALE_FACTOR
              })`,
              zIndex: 2,
              opacity: 0.6,
            };
          } else if (relativeIndex === 1) {
            // Next
            style = {
              transform: `translateX(${CARD_OFFSET}%) scale(${
                1 - SCALE_FACTOR
              })`,
              zIndex: 2,
              opacity: 0.6,
            };
          } else {
            // Hide other cards far away
            style = {
              transform: `translateX(${
                relativeIndex > 0 ? 100 : -100
              }%) scale(0.8)`,
              zIndex: 1,
              opacity: 0,
            };
          }

          return (
            <motion.div
              key={image + i} // Using index in key for safety with duplicate images
              className="absolute w-full h-full rounded-2xl overflow-hidden"
              style={{
                width: imgWidth,
                height: imgHeight,
                transformStyle: "preserve-3d",
              }}
              initial={false}
              animate={style}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <Image
                src={image}
                alt={`Carousel Image ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={relativeIndex === 0}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center items-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="p-1"
            aria-label={`Go to slide ${i + 1}`}
          >
            <motion.div
              className={`transition-colors duration-300 ${
                i === activeIndex ? "bg-white/40" : "bg-white/30"
              }`}
              style={{
                width: i === activeIndex ? 61 : 17,
                height: 17,
                borderRadius: 9999,
              }}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
