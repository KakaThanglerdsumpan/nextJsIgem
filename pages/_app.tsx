import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Bottombar from "../components/Bottombar";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thailand_RIS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://static.igem.wiki/teams/4314/wiki/igemlogo2.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Bottombar />
    </>
  );
}

export default MyApp;
