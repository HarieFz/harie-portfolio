import Head from "next/head";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://harie-portfolio.vercel.app/projects" key="canonical" />
      </Head>

      <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl w-full h-full lg:my-10 mx-auto">
        <main>{children}</main>
      </div>
    </>
  );
}
