import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="lg:hidden block w-full h-[0.5px] bg-[#EBEDF0]/40 mb-3" />
      <div className="flex flex-col items-center justify-center lg:p-6 max-lg:py-3">
        <p className="lg:text-base text-2xs text-white">&copy; 2025 Harie Fairuz Zaki. All rights reserved.</p>
        <p className="lg:text-base text-2xs text-white">Front-End Web Developer specializing in React.js and Next.js</p>
      </div>
      <div className="lg:hidden block w-full h-[0.5px] bg-[#EBEDF0]/40 mt-3 mb-5.5" />
    </footer>
  );
}
