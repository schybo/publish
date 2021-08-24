import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-KJJZXBW",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
