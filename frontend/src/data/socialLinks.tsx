import { FaLinkedin, FaGithub, FaInstagram, FaDeviantart, FaLink } from 'react-icons/fa';

// SocialLink is an object type
export interface SocialLink {
    id: number;
    name: string;
    url: string;
    icon: JSX.Element;
    dev: boolean;
}

export const socialLinks: SocialLink[] = [
    { id: 1, name: 'LinkedIn', url: 'https://www.linkedin.com/in/nazhone-morgan/', icon: <FaLinkedin />, dev: true },
    { id: 2, name: 'GitHub', url: 'https://github.com/nazhonem', icon: <FaGithub />, dev: true },
    { id: 3, name: 'Instagram', url: 'https://www.instagram.com/mitranovaart/', icon: <FaInstagram />, dev: false },
    { id: 4, name: 'DeviantArt', url: 'https://www.deviantart.com/mitranova', icon: <FaDeviantart />, dev: false },
    { id: 5, name: 'Link Card Site', url: 'https://mitranova.carrd.co/', icon: <FaLink />, dev: false }
];