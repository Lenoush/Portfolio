"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center text-gray-600 py-6">
      <div className="whitespace-pre-line underline">
        <Link href="https://www.linkedin.com/in/lena-oudjman-0a36b6226/" target="_blank" className="inline-flex items-center justify-center">
          <Image
            src="/favicon.png"
            alt="favicon"
            width={16}
            height={16}
            className="inline-block mr-1 mb-1"
          />
          <p>2025 - Portfolio Léna Oudjman</p>
        </Link>
      </div>
    </footer>
  );
}
