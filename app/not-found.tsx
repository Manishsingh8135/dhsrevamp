'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded-md mr-4 hover:bg-purple-600"
          onClick={() => reset()}
        >
          Try again
        </button>
        <Link href="/" className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
          Go home
        </Link>
      </div>
    </div>
  );
}