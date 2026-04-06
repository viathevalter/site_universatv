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
        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-500">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-800 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-white font-black text-xl italic tracking-tighter shadow-sm relative z-10">U</span>
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase relative">
            Universa<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">TV</span>
          </span>
        </div>
      )}
    </Link>
  );
}
