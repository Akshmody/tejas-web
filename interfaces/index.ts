export interface IProjectCardProps {
    name: string;
    description: string;
    link: string;
    githubLink?: string;
    tags?: Array<string>;
    isNpmLink?: boolean;
}
