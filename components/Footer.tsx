"use client";

import Image from "next/image";

export default function Footer() {
  const handleClick = () => {
    window.dispatchEvent(new Event("back-to-top"));
  };

  return (
    <footer className="fixed -z-10 inset-x-0 bottom-0 bg-white px-8 mx-auto w-full h-[80vh] flex flex-col justify-around">
      <div className="flex items-center justify-between">
        <p className="text-background">&copy; 2026</p>

        <button type="button" className="flex items-center gap-4" onClick={handleClick}>
          <span className="text-background">BACK TO TOP</span>
          <span className="bg-background w-9 h-9 rounded-full flex items-center justify-center">
            <Image
              src="/icons/arrow-top.svg"
              alt="Icon Arrow Top"
              width={0}
              height={0}
              sizes="100vw"
              className="w-3 h-3"
            />
          </span>
        </button>
      </div>

      <div>
        <p className="text-background lg:ms-3">READY FOR THE NEXT CHALLENGE.</p>
        <p className="text-6xl lg:text-[150px] leading-none text-background">LET'S TALK</p>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <button
          type="button"
          className="w-25 px-4 py-2 text-sm lg:text-base lg:w-40 lg:px-6 lg:py-3 border-2 border-background rounded-full transition-colors text-background hover:bg-background active:bg-vermillion-dark"
        >
          GITHUB
        </button>
        <button
          type="button"
          className="w-25 px-4 py-2 text-sm lg:text-base lg:w-40 lg:px-6 lg:py-3 border-2 border-background rounded-full transition-colors text-background hover:bg-background active:bg-vermillion-dark"
        >
          LINKEDIN
        </button>
        <button
          type="button"
          className="w-25 px-4 py-2 text-sm lg:text-base lg:w-40 lg:px-6 lg:py-3 border-2 border-background rounded-full transition-colors text-background hover:bg-background active:bg-vermillion-dark"
        >
          RESUME
        </button>
      </div>
    </footer>
  );
}
