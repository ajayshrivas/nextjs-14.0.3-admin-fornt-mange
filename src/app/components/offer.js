'use client';

import Link from "next/link";

export default function Offer() {
  return (
        <>
        <div className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <p className="font-bold text-white">Special Offer!</p>
            <p className="text-white">Get 20% off on all products. Limited time offer.</p>
          </div>
          <button className="bg-white text-blue-500 py-2 px-4 rounded">Shop Now</button>
          <Link href="/admin"> Go Admin</Link>
        </div>
        </div>
        </>
       )
}
