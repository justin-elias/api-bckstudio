import '../styles/globals.css'
import React, {Fragment} from "react";
import Head from "next/head";


function MyApp({ Component, pageProps, err }) {
  return (
      <Fragment>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href={require("public/apple-touch-icon.png")}/>
          <link rel="icon" type="image/png" sizes="32x32" href={require("public/favicon-32x32.png")}/>
          <link rel="icon" type="image/png" sizes="16x16" href={require("public/favicon-16x16.png")}/>
          <link rel="manifest" href={require("public/manifest.json")}/>
          <link rel="mask-icon" href={require("public/safari-pinned-tab.svg")} color="#406d7f"/>
          <meta name="msapplication-TileColor" content="#00aba9"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Component {...pageProps} err={err}/>
      </Fragment>
  )
}

export default MyApp
