import { Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const AboutPage = () => (
    <Layout title="About" description="About Tejas Devani" relativeCanonicalURL="/about">
        <Heading>About</Heading>
        <Text fontSize="lg">
            {/* Hey and welcome! I’m a Software developer working in a fin-tech startup called Refyne in India. In my free
            time I make things in Python, Node js or Golang. */}
            work in progress...
        </Text>
    </Layout>
);

export default AboutPage;
