import React from "react";
import { Box, Flex, IconButton, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaMailBulk, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TELEGRAM_URL, TWITTER_URL } from "../constants";
import { LinkButton } from "./Layout";

const Footer = () => {
    const link = useColorModeValue("text.lightBLue", "text.darkBlue");

    return (
        <Flex align="center" py={8} direction="column">
            <Box>
                <IconButton
                    href={TWITTER_URL}
                    title="Twitter"
                    isExternal
                    as={Link}
                    aria-label="Twitter"
                    icon={<FaTwitter size="24" />}
                    size="lg"
                    variant="ghost"
                    _hover={{ color: link }}
                />

                <IconButton
                    href={GITHUB_URL}
                    title="GitHub"
                    isExternal
                    as={Link}
                    aria-label="GitHub"
                    icon={<FaGithub size="24" />}
                    size="lg"
                    variant="ghost"
                    _hover={{ color: link }}
                />

                <IconButton
                    href={LINKEDIN_URL}
                    title="LinkedIn"
                    isExternal
                    as={Link}
                    aria-label="LinkedIn"
                    icon={<FaLinkedin size="24" />}
                    size="lg"
                    variant="ghost"
                    _hover={{ color: link }}
                />

                <IconButton
                    href={TELEGRAM_URL}
                    title="Telegram"
                    isExternal
                    as={Link}
                    aria-label="Telegram"
                    icon={<FaTelegramPlane size="24" />}
                    size="lg"
                    variant="ghost"
                    _hover={{ color: link }}
                />

                <IconButton
                    as={Link}
                    href={`mailto:${EMAIL}`}
                    title="Email"
                    aria-label="Email"
                    icon={<FaMailBulk size="24" />}
                    size="lg"
                    variant="ghost"
                    _hover={{ color: link }}
                />
            </Box>

            <Text textAlign="center">
                Made with <LinkButton text="Next.js" href="https://nextjs.org" /> • Hosted on{" "}
                <LinkButton text="Vercel" href="https://vercel.com" />
            </Text>

            {/* find better  */}
            {/* <Text textAlign="center">
                Design is inspired by <LinkButton text="Sreetam" href="https://sreetamdas.com" /> &{" "}
                <LinkButton text="Leerob" href="https://leerob.io" />
            </Text> */}
        </Flex>
    );
};

export default Footer;
