// components/subscription-success.tsx

import Link from "next/link";

// A simple checkmark icon component
const CheckmarkIcon = () => (
  <svg
    className="w-16 h-16 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function SubscriptionSuccess() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 w-full max-w-2xl mx-auto my-12">
      <CheckmarkIcon />
      <h2 className="mt-6 text-3xl font-bold text-gray-900">
        Thank You for Subscribing!
      </h2>
      <p className="mt-2 text-lg text-gray-600">
        You’re all set. You'll receive our next newsletter in your inbox soon.
      </p>
      <Link href="/" passHref>
        <a className="mt-8 inline-block px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Return to Homepage
        </a>
      </Link>
    </div>
  );
}
