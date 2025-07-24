import React from 'react';
import { InstagramIcon, MapPinIcon } from 'lucide-react';


export function SocialSection() {
  const socialLinks = [{
    label: "Instagram",
    url: "#",
    icon: <InstagramIcon size={20} />
  }, {
    label: "WhatsApp",
    url: "#",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5m0-5a5 5 0 0 1 5 5" />
        </svg>
  }, {
    label: "Localização",
    url: "#",
    icon: <MapPinIcon size={20} />
  }];
  return <section>
      <h3 className="text-2xl font-light text-custom-gold mb-6 tracking-wide">
        Redes Sociais
      </h3>
      <ul className="space-y-4">
        {socialLinks.map((link, index) => <li key={index}>
            <a href={link.url} className="flex items-center gap-3 text-white hover:text-custom-gold transition-colors text-lg">
              {link.icon}
              {link.label}
            </a>
          </li>)}
      </ul>
    </section>;
}