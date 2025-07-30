import React from 'react';


export function LinkSection() {
  const links = [{
    label: "Serviços",
    url: "#"
  }, {
    label: "Agendamento",
    url: "#"
  }, {
    label: "Sobre Nós",
    url: "#"
  }, {
    label: "FAQ",
    url: "#"
  }];
  return <section>
      <h3 className="text-2xl font-light text-custom-gold mb-6 tracking-wide">
        Links Úteis
      </h3>
      <ul className="space-y-4 text-white">
        {links.map((link, index) => <li key={index}>
            <a href={link.url} className="hover:text-custom-gold transition-colors text-lg">
              {link.label}
            </a>
          </li>)}
      </ul>
    </section>;
}