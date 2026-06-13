/* TKN — Section Services (4 cartes espacées, icône fine, chips, image au survol) */

const SERVICES = [
  {
    id: "nettoyage", route: "nettoyage", icon: "factory", img: 236698,
    title: "Nettoyage industriel",
    line: "Interventions sur sites de production, environnements industriels, machines et installations, en activité ou à l'arrêt, avec une adaptation aux accès, horaires et contraintes du site.",
    chips: ["Sites de production", "Machines & installations", "Contraintes de site"],
  },
  {
    id: "maintenance", route: "maintenance", icon: "wrench", img: 5463581,
    title: "Maintenance générale",
    line: "Entretien, réparations, finitions et remise en état pour entreprises, immeubles, commerces et particuliers. Une réponse polyvalente pour les besoins du bâtiment : plomberie, électricité, chauffage, toiture, plafonnage, peinture, carrelage et petits travaux.",
    chips: ["Entretien", "Réparations", "Finitions", "Remise en état"],
  },
  {
    id: "interventions", route: "interventions", icon: "flame", img: 209230,
    title: "Interventions spécialisées",
    line: "Pour les situations qui sortent du cadre habituel : sinistre, vidage, débarras, nettoyage lourd, évacuation et remise en état avant réutilisation des espaces. Des interventions organisées selon l'ampleur du chantier, les accès et les contraintes du site.",
    chips: ["Après sinistre", "Débarras & évacuation", "Remise en état"],
  },
  {
    id: "espaces", route: "espaces", icon: "leaf", img: 296230,
    title: "Espaces verts",
    line: "Entretien des jardins, abords, parkings et zones extérieures, en passage régulier ou ponctuel, pour garder les extérieurs propres, dégagés et présentables.",
    chips: ["Tonte & taille", "Jardins & abords", "Entretien régulier"],
  },
];

function ServicesSection({ navigate }) {
  return (
    <section className="section bg-black svc" id="services">
      <div className="wrap">
        <div className="svc__head">
          <Reveal className="section-head">
            <h2 className="h-section">Nos services</h2>
          </Reveal>
        </div>

        <div className="svc-panels">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.id}
              delay={(i % 2) + 1}
              className="svc-panel"
              onClick={() => navigate({ route: s.route })}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") navigate({ route: s.route }); }}
            >
              <span className="svc-panel__content">
                <span className="svc-panel__icon"><Ico name={s.icon} size={26} sw={1.5} /></span>
                <h3 className="svc-panel__title h-card">{s.title}</h3>
                <p className="svc-panel__desc">{s.line}</p>
                <span className="svc-panel__chips">
                  {s.chips.map((c) => <span key={c} className="svc-chip">{c}</span>)}
                </span>
                <span className="svc-panel__link">Découvrir <Ico name="arrow" size={16} sw={2} /></span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesSection, SERVICES });
