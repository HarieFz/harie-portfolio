import Head from "next/head";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl w-full h-full lg:mt-10 mx-auto">
      <Head>
        <link rel="canonical" href="https://harie-portfolio.vercel.app/projects" key="canonical" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
