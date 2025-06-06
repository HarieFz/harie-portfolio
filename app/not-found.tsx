import Link from "next/link";
import React from "react";
import ArrowLeft from "../public/icons/arrow-left.svg";

export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <p className="font-bold text-9xl text-white mb-3">404</p>
      <p className="text-4xl text-white mb-5">Page Not Found</p>
      <Link href="/" className="bg-white rounded-md font-bold text-sm text-black px-4 py-2 flex items-center gap-2">
        <ArrowLeft className="text-2xs text-black" />
        Go Back
      </Link>
    </div>
  );
}
