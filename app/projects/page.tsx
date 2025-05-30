import React from "react";
import ArrowLeft from "../../public/icons/arrow-left.svg";
import ArrowRight from "../../public/icons/arrow-right.svg";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="relative max-w-7xl max-[1400px]:max-w-6xl w-full h-full mx-auto">
      <Link href="/" className="flex items-center gap-3 mb-3">
        <ArrowLeft className="text-[14px] text-white" />
        <p className="text-2xl text-white">Harie Fairuz Zaki</p>
      </Link>

      <h1 className="font-bold text-[40px] text-white mb-14">All Projects</h1>

      <table className="w-full py-6 text-white">
        <thead>
          <tr className="[&>th]:pe-4">
            <th align="left">Year</th>
            <th align="left">Project</th>
            <th align="left">Made At</th>
            <th align="left">Build with</th>
            <th align="left">Link</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((_, index, { length }) => (
            <tr
              key={index}
              className={`${
                length - 1 === index ? "" : "border-b-[0.5px] border-[#EBEDF0]/40"
              } [&>td]:py-6 [&>td]:pe-4`}
            >
              <td className="text-[#EBEDF0]/80">2025</td>
              <td className="font-bold text-lg">Tunas Unggul</td>
              <td className="text-[#EBEDF0]/80">PT. Sinergi Nusantara Integrasi</td>
              <td>
                <div className="flex flex-wrap items-center gap-3">
                  <div className=" bg-[#2489FF]/25 rounded px-1.5 py-1">
                    <p className="font-bold text-xs text-[#2489FF]">React.js</p>
                  </div>
                  <div className=" bg-[#2489FF]/25 rounded px-1.5 py-1">
                    <p className="font-bold text-xs text-[#2489FF]">Next.js</p>
                  </div>
                  <div className=" bg-[#2489FF]/25 rounded px-1.5 py-1">
                    <p className="font-bold text-xs text-[#2489FF]">Redux</p>
                  </div>
                  <div className=" bg-[#2489FF]/25 rounded px-1.5 py-1">
                    <p className="font-bold text-xs text-[#2489FF]">REST API</p>
                  </div>
                  <div className=" bg-[#2489FF]/25 rounded px-1.5 py-1">
                    <p className="font-bold text-xs text-[#2489FF]">TailwindCSS</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="flex items-center gap-2.5 text-[#EBEDF0]/80">
                  tunas.unggul{" "}
                  <span>
                    <ArrowRight className="w-2.5 h-2.5 -rotate-45" />
                  </span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
