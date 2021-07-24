import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO_CONFIG } from "../constants";
import { theme } from "../styles/theme";

function App({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <>
            <DefaultSeo {...DEFAULT_SEO_CONFIG} />
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default App;
