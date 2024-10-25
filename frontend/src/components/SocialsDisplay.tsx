import { socialLinks, SocialLink } from "../data/socialLinks";

export default function DevSocials() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {socialLinks.map((social: SocialLink) => (
        social.dev ?
          <a key={social.id} className="text-2xl" href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            {social.icon}
          </a>
        : null
      ))}
    </div>
  );
}

export function ArtSocials() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {socialLinks.map((social: SocialLink) => (
        !social.dev ?
          <a key={social.id} className="text-2xl" href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            {social.icon}
          </a>
        : null
      ))}
    </div>
  );
}