"use client";

import React, { ReactNode } from "react";

export default function Dialog({
  open,
  onClose,
  children,
  ref,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  ref?: React.Ref<HTMLDivElement> | undefined;
}) {
  return (
    <div className={`fixed inset-0 transition-all ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-40" onClick={onClose} />

      {/* Dialog Content */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 2xl:w-7xl xl:w-5xl lg:w-4xl max-lg:w-full max-lg:px-6 transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <div
          ref={ref}
          className="w-full 2xl:h-[700px] xl:h-[600px] lg:h-[500px] h-[400px] dialog-h-for-small-screen overflow-y-auto rounded-2xl"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
