"use client";
import Image from "next/image";
import { useState } from "react";

const AREAS = [
  "IVF & Embryology",
  "Cleanroom & Containment",
  "Pharmaceutical Production",
  "Medical Equipment & Safety",
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [areas, setAreas] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <main className="mx-auto w-full flex-1">
        {/* Company Title and Product List */}
        <div className="mb-8 w-full">
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

        {/* Newsletter Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-8 m-8 flex flex-col gap-4 max-w-2xl mx-auto text-black"
          >
            <label className="font-semibold">Name</label>
            <input
              type="text"
              required
              className="border rounded p-2"
              placeholder="Your Name"
            />
            <label className="font-semibold">Email</label>
            <input
              type="email"
              required
              className="border rounded p-2"
              placeholder="you@email.com"
            />
            <label className="font-semibold">Area of Interest</label>
            <div className="flex flex-col gap-2">
              {AREAS.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer relative pl-7"
                >
                  <input
                    type="checkbox"
                    name="area"
                    value={item}
                    checked={areas.includes(item)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAreas([...areas, item]);
                      } else {
                        setAreas(areas.filter((area) => area !== item));
                      }
                    }}
                    className="peer absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-gray-400 checked:border-blue-600 checked:bg-blue-600 transition duration-200 appearance-none cursor-pointer"
                  />
                  {/* Custom dot for checked */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center pointer-events-none transition duration-200 cursor-pointer">
                    {areas.includes(item) && (
                      <span className="w-3 h-3 rounded-full bg-white"></span>
                    )}
                  </span>
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="accent-blue-600"
              />
              I agree to receive monthly educational content from Esco
              Lifesciences.
            </label>
            <span className="text-gray-500 text-xs">
              (Subscribe Now. Unsubscribe anytime)
            </span>
            <button
              type="submit"
              className="mt-4 bg-[#005D9F] text-white rounded-lg py-2 font-semibold hover:bg-[#004C80] transition cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <div className="m-auto p-8 text-center text-[#00467F] text-xl">
            Thank you for subscribing! 🎉
            <br />
            You’ll receive our next newsletter in your inbox.
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#00467F] text-white px-4 py-8">
        <div className="flex justify-center gap-8 mb-6">
          <a href="#" aria-label="Facebook" className="hover:opacity-80">
            <Image
              src="/facebook-logo.svg"
              alt="Facebook"
              width={32}
              height={32}
            />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80">
            <Image
              src="/insta-logo.svg"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
          <a href="#" aria-label="X" className="hover:opacity-80">
            <Image src="/x-logo.svg" alt="X" width={32} height={32} />
          </a>
          <a href="#" aria-label="Website" className="hover:opacity-80">
            <Image src="/web-logo.svg" alt="Website" width={32} height={32} />
          </a>
          <a href="#" aria-label="TikTok" className="hover:opacity-80">
            <Image src="/tiktok-logo.svg" alt="TikTok" width={32} height={32} />
          </a>
        </div>
        <div className="text-center mb-2">
          <Image
            src="/ESCO-logo-1.svg"
            alt="ESCO"
            width={100}
            height={100}
            className="mx-auto mb-2"
            style={{ maxHeight: 40 }}
          />
        </div>
        <div className="text-center text-sm mb-4">
          Copyright (C) |2025| Esco Micro Pte. Ltd.. All rights reserved.
        </div>
        <div className="text-center text-sm mb-2">
          <span className="font-semibold">Our mailing address:</span>
          <br />
          <a
            href="https://www.escolifesciences.com/contact-us"
            className="underline"
          >
            https://www.escolifesciences.com/contact-us
          </a>
          <br />
          <a href="mailto:ede.info@escolifesciences.com" className="underline">
            ede.info@escolifesciences.com
          </a>
          <br />
          <a
            href="mailto:olivia.tvaldez@escolifesciences.com"
            className="underline"
          >
            olivia.tvaldez@escolifesciences.com
          </a>
        </div>
        <div className="text-center text-sm">
          Want to change how you receive these emails? <br />
          You can{" "}
          <a href="#" className="underline">
            update your preferences
          </a>{" "}
          or{" "}
          <a href="#" className="underline">
            unsubscribe
          </a>
        </div>
      </footer>
    </div>
  );
}
