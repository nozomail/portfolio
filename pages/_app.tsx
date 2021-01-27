import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
