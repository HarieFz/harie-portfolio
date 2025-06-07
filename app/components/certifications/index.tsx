import Image from "next/image";
import React from "react";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { certificationsData } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="lg:mb-8">
        <div className="lg:hidden block w-fit">
          <h2 className="font-bold text-xs text-white mb-2">CERTIFICATIONS</h2>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        <div className="flex flex-col gap-3">
          {certificationsData.map((item, index, { length }) => (
            <Link href={`/certifications/${slugify(item.title)}`} key={index}>
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 hover-gradient-border max-lg:py-3">
                <div className="hidden lg:block lg:col-span-3 w-full lg:aspect-[155/120] lg:shrink-0">
                  <Image
                    src={item.thumbnail}
                    alt={`certificate-${index + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>

                <div className="lg:col-span-9 flex flex-col lg:gap-6 gap-3">
                  <div>
                    <h3 className="font-bold lg:text-2xl text-xs text-white lg:mb-3 mb-2">{item.title}</h3>
                    <p className="lg:text-xl text-xs text-[#EBEDF0]/80 lg:mb-3 mb-2">{item.issuing_organization}</p>

                    <div className="block lg:hidden w-32.5 h-22.5 mb-3">
                      <Image
                        src={item.thumbnail}
                        alt={`certificate-${index + 1}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="lg:text-base text-2xs text-justify text-white line-clamp-4"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    {item.tech.map((tech, i) => (
                      <div key={i} className="card-tech">
                        <p className="font-bold lg:text-xs text-2xs text-[#2489FF]">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {length - 1 === index ? null : (
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-3">
                  <div className="lg:col-span-3 lg:block hidden" />
                  <div className="lg:col-span-9 w-full h-[0.5px] bg-[#EBEDF0]/40" />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="lg:block hidden w-full h-[0.5px] bg-[#EBEDF0]/40" />
    </section>
  );
}
