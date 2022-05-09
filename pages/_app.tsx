import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import theme from "styles/themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>English Spelling Checker</title>
        <meta name="description" content="Let's make your english the best" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
