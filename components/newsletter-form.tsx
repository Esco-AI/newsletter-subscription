"use client";
import { useState, useMemo } from "react";
import { getNames } from "country-list";

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

  const countries = useMemo(() => getNames(), []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // You can handle submission logic here (e.g., API call)
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
    <div className="bg-gray-50 flex items-center justify-center p-4 my-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 w-full max-w-4xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600">
              Stay updated with the latest in life sciences.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-3 text-gray-700 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 text-gray-700 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Country{" "}
                <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="block w-full px-3 py-3 text-gray-700 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition cursor-pointer"
              >
                <option value="" disabled className="text-gray-700">
                  Select your country
                </option>
                {countries.map((countryName) => (
                  <option key={countryName} value={countryName}>
                    {countryName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Area of Interest
            </label>
            <div className="space-y-3">
              {AREAS.map((item) => (
                <label
                  key={item}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <div className="relative">
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
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        areas.includes(item)
                          ? "bg-blue-600 border-blue-600"
                          : "bg-gray-200 border-gray-300"
                      }`}
                    >
                      {areas.includes(item) && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 mt-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
                  consent
                    ? "bg-blue-600 border-blue-600"
                    : "bg-gray-200 border-gray-300"
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
              <span className="text-sm text-gray-600">
                I agree to receive monthly educational content from Esco
                Lifesciences.
              </span>
            </label>
            <p className="text-xs text-gray-500 mt-2 pl-8">
              (Subscribe Now. Unsubscribe anytime)
            </p>
          </div>

          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full mt-4 bg-[#005D9F] text-white rounded-lg py-3 px-6 font-semibold hover:bg-[#004C80] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg cursor-pointer"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
