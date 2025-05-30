import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="lg:hidden block w-full h-[0.5px] bg-[#EBEDF0]/40 my-3" />
      <p className="lg:text-base text-2xs text-white lg:p-6 max-lg:py-3">
        Crafted in Figma, brought to life in VS Code. Powered by Next.js + Tailwind CSS, deployed via Vercel. All text
        is set in the Futura typeface.
      </p>
      <div className="lg:hidden block w-full h-[0.5px] bg-[#EBEDF0]/40 mt-3 mb-5.5" />
    </footer>
  );
}
