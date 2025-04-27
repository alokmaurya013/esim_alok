'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-[90%] md:w-[70%] mx-auto py-3 md:py-4 px-4 md:px-6 flex justify-between items-center">
        <div className="text-lg md:text-xl font-bold text-teal-500">
          Leamigo eSIM
        </div>
        <div className="flex gap-4 md:gap-6">
          <Link href="/" className="text-gray-600 hover:text-teal-500 text-sm md:text-base">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
