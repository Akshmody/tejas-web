import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface ICustomLinkProps {
    href: string;
    children: string;
}

export const CustomLink = (props: ICustomLinkProps) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

    const link = useColorModeValue("text.lightBlue", "text.darkBlue");

    return (
        <NextLink href={href} passHref>
            <Link color={link} isExternal={!isInternalLink} {...props}>
                {props.children}
            </Link>
        </NextLink>
    );
};
