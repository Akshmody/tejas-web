import { Heading, Stack, Text } from "@chakra-ui/react";

import { CustomLink } from "../components/CustomLink";
import Layout from "../components/Layout";
import LinkCard from "../components/LinkCard";
import { PROJECT_LIST } from "../constants";

const ProjectListComponent = () => (
    <Stack direction="column" spacing={5}>
        {PROJECT_LIST.map((project) => (
            <LinkCard
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
                githubLink={project.githubLink}
                tags={project.tags}
                isNpmLink={project.isNpmLink}
            />
        ))}
    </Stack>
);

const IndexPage = () => (
    <Layout title="Home" description="Welcome to Tejas's corner of the internet" relativeCanonicalURL="">
        <Stack direction="column" spacing={5}>
            <Text as="h1" fontSize="5xl" my={4} textAlign="center" fontWeight="bold">
                Hey, I'm Tejas! 👋
            </Text>
            <Text fontSize="xl">
                I'm a web developer from India who loves building apps with React. I have also worked with TypeScript,
                JavaScript, Python and Django
            </Text>

            <Text fontSize="xl">
                I'm currently a Software Engineer at{" "}
                <CustomLink href="https://infynno.com">Infynno Solutions</CustomLink>, where I build products using
                React, Redux, Next.js and Tailwind CSS.
            </Text>
            <Stack py={5} spacing={5}>
                <Heading as="h3">Projects</Heading>
                <ProjectListComponent />
            </Stack>
        </Stack>
    </Layout>
);

export default IndexPage;
