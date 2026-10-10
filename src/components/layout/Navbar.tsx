"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import AnchorLink from "../ui/AnchorLink";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 w-full max-w-350 items-center justify-between px-6 md:px-10 lg:px-14"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Harie — Home"
          onClick={closeMenu}
          className="font-display text-3xl font-semibold tracking-[-0.06em] text-cream"
        >
          Harie<span className="text-[#D4C6A2]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <AnchorLink
              key={item.href}
              href={item.href}
              className="font-body text-xs font-medium text-cream/80 transition-colors hover:text-cream"
            >
              {item.label}
            </AnchorLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="mailto:hfairuzzaki@gmail.com"
          className="group hidden items-center gap-5 rounded-full bg-cream py-1.5 pl-5 pr-1.5 text-charcoal transition-colors hover:bg-white md:flex"
        >
          <span className="font-body text-xs font-semibold">Let&apos;s Talk</span>

          <span className="flex size-9 items-center justify-center rounded-full bg-olive-dark text-cream transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={17} strokeWidth={1.8} />
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
          className="flex size-10 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/10 md:hidden"
        >
          <span className="relative flex size-5 items-center justify-center">
            <Menu
              size={20}
              className={`absolute transition-all duration-300 ${
                isOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <X
              size={20}
              className={`absolute transition-all duration-300 ${
                isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        inert={!isOpen}
        aria-hidden={!isOpen}
        className={`mx-4 grid transition-all duration-400 ease-out motion-reduce:transition-none md:hidden ${
          isOpen
            ? "visible grid-rows-[1fr] translate-y-0 opacity-100"
            : "invisible grid-rows-[0fr] -translate-y-3 opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="rounded-xl border border-cream/15 bg-olive-dark p-5 shadow-xl">
            <div className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <AnchorLink
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`font-body rounded-lg px-3 py-3 text-sm text-cream transition-all duration-300 hover:bg-white/10 motion-reduce:transition-none ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                </AnchorLink>
              ))}

              {/* Mobile CTA */}
              <Link
                href="mailto:hfairuzzaki@gmail.com"
                onClick={closeMenu}
                className={`font-body mt-3 flex items-center justify-between rounded-full bg-cream px-4 py-3 text-xs font-semibold text-charcoal transition-all duration-300 motion-reduce:transition-none ${
                  isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? "200ms" : "0ms",
                }}
              >
                Let&apos;s Talk
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
