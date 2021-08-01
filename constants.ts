import { IProjectCardProps } from "./interfaces";
import { DefaultSeoProps } from "next-seo";

export const BASE_URL: string = "";

export const PROJECT_LIST: Array<IProjectCardProps> = [
    // {
    //     name: "Squadhelp",
    //     description:
    //         "Squadhelp is a largest and world's #1 naming platform and The best premium names on the web, curated by branding experts,available for immediate purchase",
    //     link: "https://dev.squadhelp.com",
    //     tags: ['Next.js', 'Tailwind CSS', 'Context API'],
    // },
    // {
    //     name: "Notice Ninja",
    //     description:
    //         "NoticeNinja is a SaaS platform to Track, Manage, and Resolve all Tax and Compliance Notices",
    //     link: "https://app.noticeninja.com",
    //     tags: ['React', 'Redux', 'Ant Design'],
    // },
    {
        name: "Teenivo",
        description:
            "Teenivo is a platform where one can find and make local friends, school friends, other friends of interest, chat with friends, post status updates, get a live feed of featured entrepreneur stories, get activity points and connect with local teengels (teen business investors).",
        link: "https://app.teenivo.com",
        tags: ['React', 'Bootstrap', 'Django REST Framework', 'AWS'],
    },
    {
        name: "Covid-19 Dashboard",
        description:
            "It is a dashboard showing new cases, recovered and deceased cases. You can track these for all countries worldwide with map, chart and numeric presentation.",
        link: "https://covid19worlddashboard.web.app/",
        githubLink: "https://github.com/tejasdevani83/covid-19-dashboard",
        tags: ['React', 'Material UI', 'Leaflet', 'chart.js'],
    },
    {
        name: "Teenager Startups",
        description:
            "Teenager Startups is a new interconnected world for teenage entrepreneurs to network with fellow members, cultivate innovations, apply for funding, access entrepreneurship education, join local chapters, share expertise, and solve challenges, and more.",
        link: "https://teenagerstartups.com/",
        tags: ['Python', 'Django', 'Bootstrap'],
    },
];
const DEFAULT_TITLE = "Tejas Devani";
const TWITTER_HANDLE = "@tejas_devani";

export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
    title: DEFAULT_TITLE,
    canonical: BASE_URL,
    openGraph: {
        type: "website",
        locale: "en_IE",
        url: BASE_URL,
        title: DEFAULT_TITLE,
        images: [
            {
                url: "",
                alt: DEFAULT_TITLE,
                width: 1280,
                height: 720,
            },
        ],
    },
    twitter: {
        handle: TWITTER_HANDLE,
        site: TWITTER_HANDLE,
        cardType: "summary_large_image",
    },
};

export const TWITTER_URL = "https://twitter.com/tejas_devani";
export const GITHUB_URL = "https://github.com/tejasdevani83";
export const LINKEDIN_URL = "https://www.linkedin.com/in/tejas-devani/";
export const TELEGRAM_URL = "https://t.me/d_tejas";
export const EMAIL = "devanitejas23@gmail.com";
