"use client";

import Link from "next/link";
import Image from "next/image"; // 🔹 à ajouter

type FooterProps = {
  href: string;
  text: string;
};

export default function Footer({ href, text }: FooterProps) {
  return (
    <footer className="text-center text-gray-600 py-6">
      <div className="whitespace-pre-line underline">
        <Link href={href} target="_blank" className="inline-flex items-center justify-center">
          <Image
            src="/favicon.png"
            alt="favicon"
            width={16}
            height={16}
            className="inline-block mr-1 mb-1"
          />
          {text}
        </Link>
      </div>
    </footer>
  );
}
