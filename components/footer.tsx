import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: [
    { href: "https://www.escolifesciences.com/", label: "Home" },
    { href: "https://www.escolifesciences.com/about-us", label: "About Us" },
    { href: "https://www.escolifesciences.com/contact-us", label: "Contact" },
    { href: "https://www.escolifesciences.com/careers", label: "Careers" },
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
    { href: "/events", label: "Events & Webinars" },
    { href: "/documentation", label: "Documentation" },
  ],
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

const FooterLinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) => (
  <div className="text-center md:text-left">
    <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
      {title}
    </h3>
    <ul className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-gray-200 transition-colors duration-300 hover:text-white"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#00467F] text-white">
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block">
              <Image
                src="/ESCO-logo-1.svg"
                alt="ESCO Lifesciences Logo"
                width={140}
                height={45}
              />
            </Link>
            <p className="mt-4 text-sm text-gray-200 max-w-xs mx-auto md:mx-0">
              Empowering scientific progress through innovation and quality.
            </p>

            <div className="flex justify-center mt-6 space-x-5 md:justify-start">
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

          <div className="grid grid-cols-1 col-span-1 gap-8 text-sm sm:grid-cols-2 md:col-span-1 lg:col-span-3 lg:grid-cols-3">
            <FooterLinkColumn title="Company" links={footerLinks.company} />
            <FooterLinkColumn title="Resources" links={footerLinks.resources} />

            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">
                Contact Us
              </h3>
              <div className="mt-4 space-y-3 text-gray-200">
                <p className="leading-relaxed">
                  Esco Micro Pte. Ltd. (HQ)
                  <br />
                  21 Changi South Street 1<br />
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
        </div>

        <div className="pt-8 mt-12 text-sm border-t border-white/10">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
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
