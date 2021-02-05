import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import Layout from "../components/layout";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}
