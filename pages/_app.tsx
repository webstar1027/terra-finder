import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useHydrateAtoms } from "jotai/utils";
import type { AppProps } from "next/app";
import Head from "next/head";
import { getConfigs } from "../src/apis/config";
import Layout from "../src/components/shared/organisms/Layout";
import {
  activesAtom,
  chainsAtom,
  cw20ContractsAtom,
  cw721ContractsAtom,
  selectedActiveAtom,
  selectedChainAtom,
  tokensAtom,
} from "../src/store/app";
import "../src/styles/globals.css";
import { themeOptions } from "../src/utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  useHydrateAtoms([
    [tokensAtom, pageProps.tokens],
    [chainsAtom, pageProps.chains],
    [cw20ContractsAtom, pageProps.cw20Contracts],
    [cw721ContractsAtom, pageProps.cw721Contracts],
    [activesAtom, pageProps.actives],
    [selectedActiveAtom, "uusd"],
    [selectedChainAtom, pageProps.chains && Object.keys(pageProps.chains)[0]],
  ]);
  const theme = createTheme(themeOptions);
  return (
    <>
      <Head>
        <title>Terra Finder</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  const confins = await getConfigs();
  return { pageProps: { ...confins } };
};

export default MyApp;
