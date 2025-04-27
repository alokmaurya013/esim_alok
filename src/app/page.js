"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [bookingId, setBookingId] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (bookingId.trim()) {
      router.push(`/dashboard?bookingId=${bookingId}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-112px)] px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* 160px is approx. height of Navbar + Footer combined */}
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-800">
          Enter your eSIM Booking ID
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="e.g., esim_12345678"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            className="w-72 sm:w-80 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-center"
          />
          <button
            onClick={handleSubmit}
            className="w-40 bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
