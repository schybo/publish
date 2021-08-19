import "../styles/globals.css";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "G-GSDW2Y55XV",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
