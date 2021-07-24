import { extendTheme } from "@chakra-ui/react";
const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
    fonts: {
        body: `'Raleway', -apple-system, sans-serif`,
        heading: "'Raleway', -apple-system, sans-serif",
    },
    colors: {
        text: {
            darkBlue: "#93C5FD",
            lightBlue: "#60A5FA",
        },
    },
};
const theme = extendTheme(config);

export { theme };
