"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  href?: string;
  className?: string;
}

export function Logo({ href = "/", className = "" }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link href={href} className={`flex items-center gap-2 group ${className}`}>
      {!imgError ? (
        <div className="relative h-8 w-auto">
          <Image 
            src="/logo.svg" 
            alt="UniversaTV" 
            width={120} 
            height={32}
            className="object-contain h-full w-auto"
            onError={() => setImgError(true)}
            priority
          />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.8)] transition-all">
            <span className="text-white font-bold text-lg">U</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Universa<span className="text-orange-brand">TV</span>
          </span>
        </div>
      )}
    </Link>
  );
}
