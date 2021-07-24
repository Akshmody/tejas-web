import { Box, Flex, Heading, HStack, IconButton, Link, Stack, Tag, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { CgNpm } from "react-icons/cg";

interface ILinkCardProps {
    name: string;
    description?: string;
    link: string;
    githubLink?: string;
    tags?: Array<string>;
    isPinned?: boolean;
    isNpmLink?: boolean;
}

const LinkCard = ({ name, description, link, githubLink, tags, isNpmLink }: ILinkCardProps) => {
    return (
        <Box
            display="block"
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            padding="1.5rem"
            // _hover={{ textDecoration: "none" }}
        >
            <Flex width="100%" align="flex-start" justifyContent="space-between" flexDirection="column">
                <Stack direction="row" align="center" style={{ width: "100%" }} justify="space-between">
                    <Heading letterSpacing="wide" size="md" as="h3">
                        {name}
                    </Heading>

                    <HStack>
                        {githubLink && (
                            <NextLink href={githubLink} passHref>
                                <IconButton
                                    as={Link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${name} - link to github repo`}
                                    variant="outline"
                                    size="sm"
                                >
                                    <AiFillGithub size="20" />
                                </IconButton>
                            </NextLink>
                        )}

                        <NextLink href={link} passHref>
                            <IconButton
                                as={Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${name} - link to live website`}
                                variant="outline"
                                size="sm"
                            >
                                {isNpmLink ? <CgNpm size="20" /> : <BiLinkExternal size="20" />}
                            </IconButton>
                        </NextLink>
                    </HStack>
                </Stack>

                {description && (
                    <Text mt="1rem" fontSize="md" variant="solid" colorScheme="teal">
                        {description}
                    </Text>
                )}

                {tags && (
                    <Stack direction="row" mt="1rem">
                        {tags?.map((tag: string) => (
                            <Tag key={tag} size="sm">
                                {tag}
                            </Tag>
                        ))}
                    </Stack>
                )}
            </Flex>
        </Box>
    );
};

export default LinkCard;
