import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_ID } from "../utils/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {GA_ID !== "" && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
          <meta name="robots" content="noindex" />
          <meta property="og:title" content="Nozomi Mail" />
          <meta property="og:url" content="https://nozomi-mail.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Nozomi Mail, a front-end developer based in Melbourne." />
          <meta property="og:image" content="https://nozomi-mail.vercel.app/og.png" />
          <meta name="description" content="Nozomi Mail, a front-end developer based in Melbourne." />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;400;600;700&family=Philosopher:wght@400;700&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
