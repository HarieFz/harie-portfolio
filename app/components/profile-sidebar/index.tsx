"use client";

import React, { useContext } from "react";
import Github from "../../../public/icons/github.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Mail from "../../../public/icons/mail.svg";
import Instagram from "../../../public/icons/instagram.svg";
import Phone from "../../../public/icons/phone.svg";
import Resume from "../../../public/icons/resume.svg";
import Image from "next/image";
import HighlightContext from "@/app/contexts/highlight.context";
import Link from "next/link";
import { useTooltip } from "@/hooks/useTooltip";
import { Tooltip } from "@/components/Tooltip";

const nav = ["about", "experience", "projects", "technical-skills", "certifications"];

export default function ProfileSidebar() {
  const { highlight } = useContext(HighlightContext);
  const { tooltip, handleMouseEnter, handleMouseLeave, handleMouseMove } = useTooltip({
    showDelay: 500,
    hideDelay: 200,
    offset: { x: 10, y: 5 },
  });

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Profile */}
      <section>
        <div className="w-22.5 h-22.5 lg:w-25 lg:h-25 xl:w-30 xl:h-30 rounded-full overflow-hidden lg:mb-6 mb-3">
          <Image
            src="https://res.cloudinary.com/harie/image/upload/q_auto/v1749224649/Profile_Photo_Circle_qvl9ue.png"
            alt="Harie"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover scale-120 shadow"
            priority
          />
        </div>
        <div>
          <h1 className="2xl:text-[40px] lg:text-3xl text-2xl text-white 2xl:mb-3 mb-1.5">HARIE FAIRUZ ZAKI</h1>
          <p className="2xl:text-2xl lg:text-lg text-xs text-white 2xl:mb-6 mb-3">Front-End Web Developer</p>
          <p className="2xl:text-base lg:text-sm text-2xs text-white">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav role="navigation" className="lg:block hidden">
        <ul className="flex flex-col 2xl:gap-3.75 gap-1.5">
          {nav.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 cursor-pointer w-fit"
              onClick={() => scrollToElement(item)}
            >
              <div
                className={`transition-all ${
                  highlight === item.toLowerCase() ? "bg-[#D9D9D9] w-37.5 h-0.5" : "bg-[#D9D9D9] w-25 h-0.25"
                }`}
              />
              <p
                className={`transition-colors font-bold 2xl:text-xl xl:text-base nav-text text-sm ${
                  highlight === item.toLowerCase() ? "text-white" : "text-[#EBEDF0]/80"
                }`}
              >
                {item.replace(/-/g, " ").toUpperCase()}
              </p>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact */}
      <section className="flex items-center lg:gap-6 gap-3 max-lg:mt-3" onMouseMove={handleMouseMove}>
        <Link
          href="https://github.com/HarieFz"
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => handleMouseEnter(e, "Github")}
          onMouseLeave={handleMouseLeave}
        >
          <Github className="xl:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/harie-fairuz-zaki-691b05136/"
          aria-label="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => handleMouseEnter(e, "LinkedIn")}
          onMouseLeave={handleMouseLeave}
        >
          <LinkedIn className="xl:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
        <Link
          href="mailto:hfairuzzaki@gmail.com"
          aria-label="gmail"
          onMouseEnter={(e) => handleMouseEnter(e, "Gmail")}
          onMouseLeave={handleMouseLeave}
        >
          <Mail className="xl:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
        <Link
          href="https://www.instagram.com/hariefairuz/"
          aria-label="instagram"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => handleMouseEnter(e, "Instagram")}
          onMouseLeave={handleMouseLeave}
        >
          <Instagram className="xl:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=6285928993274"
          aria-label="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => handleMouseEnter(e, "Whatsapp")}
          onMouseLeave={handleMouseLeave}
        >
          <Phone className="xl:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
        <Link
          href="/resume/HARIE-FAIRUZ-ZAKI_RESUME.pdf"
          aria-label="resume"
          download="HARIE FAIRUZ ZAKI_RESUME"
          onMouseEnter={(e) => handleMouseEnter(e, "Resume")}
          onMouseLeave={handleMouseLeave}
        >
          <Resume className="xl:w-6 xl:h-6 w-4 h-4 text-[#EBEDF0]/80 hover:text-white" />
        </Link>
      </section>

      {/* Tooltip */}
      <Tooltip tooltip={tooltip} />
    </>
  );
}
