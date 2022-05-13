import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import theme from "styles/themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="title" content="English spelling checker" />
        <meta
          name="description"
          content="English spelling checker it's a funny way to test your English level"
        />
        <meta
          name="keywords"
          content="english, spelling, checker, check, learn, future, money, career, international, travel, leveling"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          name="author"
          content="Guilherme Moraes <https://github.com/GuiMoraesDev>"
        />

        <meta property="og:title" content="English spelling checker" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="English spelling checker it's a funny way to test your English level."
        />
        <meta
          property="og:image"
          content="https://english-spelling-checker.vercel.app/favicon.ico"
        />
        <meta
          property="og:url"
          content="https://english-spelling-checker.vercel.app/home"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <title>English Spelling Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
