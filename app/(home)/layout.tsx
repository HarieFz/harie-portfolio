import Head from "next/head";
import React from "react";
import HighlightProvider from "./contexts/highlight.provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://harie-portfolio.vercel.app/" key="canonical" />
      </Head>

      <div className="h-dvh">
        <div className="md:h-full md:overflow-hidden">
          <div className="relative 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl w-full h-full mx-auto">
            <div className="w-full h-full lg:flex lg:items-center lg:justify-center">
              <HighlightProvider>{children}</HighlightProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
