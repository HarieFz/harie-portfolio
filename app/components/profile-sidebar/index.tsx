"use client";

import React, { useContext } from "react";
import Harie from "../../../public/images/harie.jpg";
import Github from "../../../public/icons/github.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Mail from "../../../public/icons/mail.svg";
import Instagram from "../../../public/icons/instagram.svg";
import Phone from "../../../public/icons/phone.svg";
import Image from "next/image";
import HighlightContext from "@/app/contexts/highlight.context";
import Link from "next/link";

export default function ProfileSidebar() {
  const { highlight } = useContext(HighlightContext);
  const nav = ["about", "experience", "projects", "technical-skills", "certifications"];

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <div className="w-22.5 h-22.5 lg:w-25 lg:h-25 rounded-full overflow-hidden lg:mb-6 mb-3">
          <Image
            src={Harie}
            alt="Harie"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-[50%_60%] object-cover scale-200"
          />
        </div>
        <div>
          <h1 className="2xl:text-[40px] xl:text-3xl text-2xl text-white 2xl:mb-3 mb-1.5">HARIE FAIRUZ ZAKI</h1>
          <h2 className="2xl:text-2xl xl:text-lg text-xs text-white 2xl:mb-6 mb-3">Front-End Web Developer</h2>
          <p className="2xl:text-base xl:text-sm text-2xs text-white">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
      </div>

      <nav className="lg:block hidden">
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
                className={`transition-colors font-bold 2xl:text-xl xl:text-base text-sm ${
                  highlight === item.toLowerCase() ? "text-white" : "text-[#EBEDF0]/80"
                }`}
              >
                {item.replace(/-/g, " ").toUpperCase()}
              </p>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center lg:gap-6 gap-3 max-lg:mt-3">
        <Link href="https://github.com/HarieFz" target="_blank">
          <Github className="lg:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
        <Link href="https://www.linkedin.com/in/harie-fairuz-zaki-691b05136/" target="_blank">
          <LinkedIn className="lg:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
        <Link href="mailto:hfairuzzaki@gmail.com">
          <Mail className="lg:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
        <Link href="https://www.instagram.com/hariefairuz/" target="_blank">
          <Instagram className="lg:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=6285928993274" target="_blank">
          <Phone className="lg:text-2xl text-base text-[#EBEDF0]/80 hover:text-white" />
        </Link>
      </div>
    </>
  );
}
