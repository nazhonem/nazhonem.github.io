import { socialLinks, SocialLink } from "../data/socialLinks";

export default function DevSocials() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {socialLinks.map((social: SocialLink) => (
        <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
          {social.icon}
        </a>
      ))}
    </div>
  );
}