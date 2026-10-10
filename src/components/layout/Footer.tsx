import Link from "next/link";
import { ArrowUp, ArrowUpRight, Asterisk } from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnchorLink from "../ui/AnchorLink";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
  },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-olive-dark px-6 pt-20 pb-8 text-[#F6F2E9] sm:px-10 lg:px-14 lg:pt-24 lg:pb-8"
    >
      <div className="mx-auto max-w-400">
        {/* Section Header */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-12 flex items-center justify-between border-b border-white/20 pb-5 lg:mb-16">
            <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-white/75">06 / Get In Touch</p>

            <Asterisk size={24} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Heading */}
          <div className="lg:col-span-9">
            <ScrollReveal y={56} duration={1.2} delay={0.1}>
              <h2 className="font-display text-[clamp(3.5rem,7vw,8.5rem)] leading-[0.9] tracking-[-0.06em]">
                Have something
                <br />
                in mind?
                <br />
                <span className="italic text-[#B5BDA0]">
                  Let&apos;s make
                  <br />
                  it happen.
                </span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-end lg:col-span-3 lg:pb-2">
            <ScrollReveal y={28} duration={0.9} delay={0.2}>
              <p className="font-manrope max-w-xs text-sm leading-7 text-white/75">
                Have a project, an idea, or an opportunity in mind? I&apos;d love to hear about it.
              </p>
            </ScrollReveal>

            <ScrollReveal y={20} duration={0.8} delay={0.3}>
              <Link
                href="mailto:hfairuzzaki@gmail.com"
                className="group mt-7 inline-flex w-fit items-center gap-4 border-b border-white/40 pb-3 transition-colors duration-300 hover:border-white"
              >
                <span className="font-manrope text-sm font-medium">Let&apos;s Talk</span>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Large Wordmark */}
        <ScrollReveal variant="fade-in" duration={1.4}>
          <div className="mt-20 border-b border-white/20 pb-5 lg:mt-20">
            <p
              aria-hidden="true"
              className="font-display text-center text-[clamp(5rem,16vw,17rem)] leading-[0.7] tracking-[-0.08em] text-[#F6F2E9]"
            >
              HARIE.
            </p>
          </div>
        </ScrollReveal>

        {/* Footer Links */}
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-10">
          {/* Description */}
          <div className="lg:col-span-6">
            <ScrollReveal y={20} duration={0.85}>
              <p className="font-manrope max-w-xs text-sm leading-7 text-white/75">
                Frontend developer crafting thoughtful digital experiences through design and code.
              </p>
            </ScrollReveal>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <ScrollReveal y={24} duration={0.9} delay={0.1}>
              <p className="font-manrope mb-5 text-[10px] uppercase tracking-[0.18em] text-white/70">Navigation</p>

              <div className="flex flex-col items-start gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-manrope text-sm text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </nav>

          {/* Socials */}
          <div className="lg:col-span-3">
            <ScrollReveal y={24} duration={0.9} delay={0.2}>
              <p className="font-manrope mb-5 text-[10px] uppercase tracking-[0.18em] text-white/70">Elsewhere</p>

              <div className="flex flex-col items-start gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-manrope group inline-flex items-center gap-2 text-sm text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {social.label}

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal variant="fade-in" duration={0.9}>
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/20 pt-6">
            <p className="font-manrope text-[10px] uppercase tracking-[0.14em] text-white/70">
              © 2026 Harie. All Rights Reserved.
            </p>

            <AnchorLink
              href="#home"
              className="font-manrope group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.14em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              <span>Back to Top</span>

              <span className="flex size-9 items-center justify-center rounded-full border border-white/30 transition-colors duration-300 group-hover:bg-[#F6F2E9] group-hover:text-olive-dark">
                <ArrowUp size={16} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </AnchorLink>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
