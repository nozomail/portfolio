import Head from "next/head";
import { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const siteName = "Nozomi's Portfolio";

export default function Layout({ children, pageTitle }: Props) {
  const title = pageTitle ? `${pageTitle} | ${siteName}` : siteName;
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener("resize", () => setHeight(window.innerHeight));
  }, []);

  return (
    <div
      className="p-4 md:p-8 bg-gradient-to-r from-indigo-900 to-fuchsia-900 overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}
