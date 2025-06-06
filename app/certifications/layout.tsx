import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl w-full h-full lg:mt-10 mx-auto">
      <link rel="canonical" href="https://harie-portfolio.vercel.app/certifications" key="canonical" />
      <main>{children}</main>
    </div>
  );
}
