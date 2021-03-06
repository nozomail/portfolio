import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import * as gtag from "../utils/gtag";

import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    function handleRouteChange(url: URL) {
      gtag.pageview(url);
    }

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <title>Nozomi Mail</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}
