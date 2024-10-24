import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

// SocialLink is an object type
export interface SocialLink {
    id: number;
    name: string;
    url: string;
    icon: JSX.Element;
}

export const socialLinks: SocialLink[] = [
    { id: 1, name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourprofile', icon: <FaLinkedin /> },
    { id: 2, name: 'GitHub', url: 'https://github.com/yourprofile', icon: <FaGithub /> },
    { id: 3, name: 'Twitter', url: 'https://twitter.com/yourprofile', icon: <FaTwitter /> },
    { id: 4, name: 'Instagram', url: 'https://www.instagram.com/yourprofile', icon: <FaInstagram /> },
];