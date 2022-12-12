import { Image, Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const Roadmap = () => (
    <Layout title="Home" description="Welcome to Tejas's corner of the internet" relativeCanonicalURL="">
        <Stack direction="column" spacing={5}>
            <Text as="h1" fontSize="5xl" my={4} textAlign="center" fontWeight="bold">
                Personal Roadmap
            </Text>
            <Image src='/static/images/personal_roadmap.png' alt='Dan Abramov' />
        </Stack>
    </Layout>
)

export default Roadmap;