"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export function Logo({ href = "/", className = "" }: LogoProps) {
  return (
    <Link href={href} className={`flex items-center gap-2 group ${className}`}>
      <div className="relative h-10 md:h-12 w-auto flex items-center">
        {/* We use standard html img element for scaling robustness across flex headers */}
        <img 
          src="/logo-horizontal.png" 
          alt="UniversaTV" 
          className="object-contain h-full w-auto group-hover:opacity-90 transition-opacity"
        />
      </div>
    </Link>
  );
}
