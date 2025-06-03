import Image from "next/image";

export default function Footer() {
  return (
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
          <Image src="/insta-logo.svg" alt="Instagram" width={32} height={32} />
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
  );
}
