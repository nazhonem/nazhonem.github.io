import { socialLinks, SocialLink } from "../../../../../frontend/src/data/socialLinks";

export default function DevSocials() {
  return (
    <div className="flex gap-10">
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
    <div className="flex gap-10">
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