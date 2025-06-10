"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { getNames } from "country-list";
import { ChevronDown, CircleHelp } from "lucide-react";

const AREAS = [
  "IVF & Embryology",
  "Cleanroom & Containment",
  "Pharmaceutical Production",
  "Medical Equipment & Safety",
  "Laboratory Equipment & General Lab Solutions",
  "Educational Content & Scientific Updates",
];

interface NewsletterFormProps {
  onSuccess: () => void;
}

export default function NewsletterForm({ onSuccess }: NewsletterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [areas, setAreas] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const countrySelectRef = useRef<HTMLDivElement>(null);

  const countries = useMemo(() => getNames(), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countrySelectRef.current &&
        !countrySelectRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countrySelectRef]);

  function handleAreaChange(item: string) {
    setAreas((prevAreas) => {
      if (prevAreas.includes(item)) {
        return prevAreas.filter((area) => area !== item);
      } else {
        return [...prevAreas, item];
      }
    });
  }

  function handleCountrySelect(selectedCountry: string) {
    setCountry(selectedCountry);
    setIsCountryDropdownOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({
      name,
      email,
      country,
      areas,
      consent,
    });
    onSuccess();
  }

  return (
    <div className="flex items-center justify-center p-3 h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl py-[86px] px-16 w-full h-full"
      >
        <div className="flex flex-col gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#00467F] mb-1">
              Subscribe to our Newsletter
            </h2>
            <p className="text-[#00467F]">
              Stay updated with the latest in life sciences.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-normal text-[#4B4B4B] mb-2 flex items-center"
              >
                Name <CircleHelp size={14} className="ml-1 text-[#8E8E8E]" />
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-3 text-[#4B4B4B] border border-[#E4E9F2] rounded-lg outline-none focus:border-[#00467F] hover:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#4B4B4B] mb-2 flex items-center"
              >
                Email <CircleHelp size={16} className="ml-1 text-[#8E8E8E]" />
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 text-[#4B4B4B] border border-[#E4E9F2] rounded-lg outline-none focus:border-[#00467F] hover:border-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div className="relative" ref={countrySelectRef}>
              <label
                htmlFor="country-custom-select"
                className="block text-sm font-medium text-[#4B4B4B] mb-2"
              >
                Country
                <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <div
                id="country-custom-select"
                className="w-full px-4 py-3 border border-[#E4E9F2] rounded-lg outline-none focus:border-[#00467F] hover:border-blue-500 transition cursor-pointer flex items-center justify-between"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsCountryDropdownOpen(!isCountryDropdownOpen);
                  }
                }}
              >
                <span className={country ? "text-[#4B4B4B]" : "text-[#8E8E8E]"}>
                  {country || "Select your country"}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#8E8E8E] transition-transform ${
                    isCountryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isCountryDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-[#E4E9F2] rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
                  {countries.map((countryName) => (
                    <div
                      key={countryName}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#4B4B4B]"
                      onClick={() => handleCountrySelect(countryName)}
                    >
                      {countryName}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#4B4B4B] mb-4">
              Area of Interest
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
              {AREAS.map((item) => (
                <label
                  key={item}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="area"
                      value={item}
                      checked={areas.includes(item)}
                      onChange={() => handleAreaChange(item)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200
                        ${
                          areas.includes(item)
                            ? "border-[#00467F]"
                            : "border-[#E4E9F2]"
                        }
                        group-hover:border-blue-500
                      `}
                    >
                      {areas.includes(item) && (
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#00467F] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-[#4B4B4B]">{item}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded p-0.5 border-2 transition-all duration-200 flex items-center justify-center hover:border-[#00467F] ${
                  consent
                    ? "bg-[#00467F] border-[#00467F]"
                    : "bg-white border-[#E4E9F2]"
                }`}
              >
                {consent && (
                  <svg
                    className="w-full h-full text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-[#2E3A59] font-normal">
                I agree to receive monthly educational content from Esco
                Lifesciences.
              </span>
            </label>
            <p className="text-xs text-[#8E8E8E] font-normal mt-1 pl-8">
              (Subscribe Now. Unsubscribe anytime)
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full mt-4 bg-[#005D9F] text-white text-base font-normal rounded-lg py-3 px-6 hover:bg-[#0070C0] shadow-lg cursor-pointer"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
