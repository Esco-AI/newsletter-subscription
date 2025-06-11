import { CheckCircle } from "lucide-react";

export default function SubscriptionSuccess() {
  return (
    <div className="flex items-center justify-center p-3 min-h-screen lg:h-screen w-full">
      <div className="flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-xl p-4 sm:p-8 w-full h-full">
        <CheckCircle className="text-green-500" size={60} strokeWidth={1.5} />
        <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
          Thank You for Subscribing!
        </h2>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 px-4 leading-relaxed">
          You’re all set. You'll receive our next newsletter in your inbox soon.
        </p>
      </div>
    </div>
  );
}
