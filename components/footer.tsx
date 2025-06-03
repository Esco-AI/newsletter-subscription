import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
};

const socials = [
  { href: "#", src: "/facebook-logo.svg", alt: "Facebook" },
  { href: "#", src: "/insta-logo.svg", alt: "Instagram" },
  { href: "#", src: "/x-logo.svg", alt: "X" },
  { href: "#", src: "/tiktok-logo.svg", alt: "TikTok" },
  { href: "#", src: "/web-logo.svg", alt: "Website" },
];

export default function Footer() {
  return (
    <footer className="bg-[#00467F] text-white">
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/ESCO-logo-1.svg"
                alt="ESCO Lifesciences Logo"
                width={140}
                height={45}
              />
            </Link>
            <p className="mt-3 text-sm text-gray-200 max-w-xs">
              Empowering scientific progress through innovation and quality.
            </p>
            <div className="flex justify-center mt-4 space-x-5 md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 transition-transform duration-300 hover:text-white hover:scale-110"
                  aria-label={social.alt}
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
              Contact Us
            </h3>
            {/* === MODIFIED: Tighter spacing (mt-3, space-y-2) === */}
            <div className="mt-3 space-y-2 text-gray-200">
              {/* === MODIFIED: Tighter line-height (leading-normal) === */}
              <p className="leading-normal">
                Esco Micro Pte. Ltd. (HQ)
                <br />
                21 Changi South Street 1
                <br />
                Singapore 486777
              </p>
              <p>
                <a
                  href="mailto:ede.info@escolifesciences.com"
                  className="transition-colors duration-300 hover:text-white"
                >
                  ede.info@escolifesciences.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 text-sm border-t border-white/10">
          {/* === MODIFIED: Tighter vertical gap on mobile (gap-y-3) === */}
          <div className="flex flex-col items-center gap-x-4 gap-y-3 md:flex-row md:justify-between">
            <p className="text-gray-200 order-2 md:order-1">
              &copy; {new Date().getFullYear()} Esco Micro Pte. Ltd. All rights
              reserved.
            </p>
            <div className="text-gray-200 order-3 md:order-2">
              <a
                href="#"
                className="underline transition-colors duration-300 hover:text-white"
              >
                Update your preferences
              </a>
              <span className="mx-1">or</span>
              <a
                href="#"
                className="underline transition-colors duration-300 hover:text-white"
              >
                unsubscribe
              </a>
            </div>
            <div className="flex items-center gap-x-4 order-1 md:order-3">
              {footerLinks.legal.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
