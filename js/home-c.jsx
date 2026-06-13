/* TKN — À propos, Nos équipes (P1), Postuler (P2), Footer */

/* ---------- À propos (la société) ---------- */
const ABOUT_FACTS = [
  { k: "Création", v: "2020" },
  { k: "Base", v: "Bruxelles" },
  { k: "Zone d'intervention", v: "Toute la Belgique et zones frontalières" },
  { k: "Environnements", v: "Sites industriels, entreprises et interventions privées" },
  { k: "Effectif opérationnel", v: "+50 collaborateurs" },
];

function About() {
  return (
    <section className="section bg-black about" id="apropos" data-screen-label="À propos">
      <div className="wrap about__grid">
        <div className="about__rail">
          <Reveal className="section-head">
            <h2 className="h-section">À propos.</h2>
          </Reveal>
          <Reveal delay={1} className="about__facts">
            {ABOUT_FACTS.map((f, i) => (
              <div key={f.k} className="about__fact">
                <span className="about__fact-k"><span className="about__fact-i">{String(i + 1).padStart(2, "0")}</span>{f.k}</span>
                <span className="about__fact-v">{f.v}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="about__body">
          <Reveal delay={1} className="about__leadwrap">
            <p className="about__lead">Chez TKN Technics, nous sommes spécialisés dans les <strong>interventions concrètes</strong> liées au nettoyage, aux travaux techniques, à la remise en état et aux besoins spécifiques des sites, bâtiments et espaces exploités.</p>
          </Reveal>
          <Reveal delay={1} className="about__paras">
            <p>Nous intervenons lorsque la demande doit être comprise rapidement, organisée proprement et exécutée avec sérieux. Certaines situations ne rentrent pas toujours dans une catégorie simple : nettoyer, réparer, dégager, remettre en état, préparer un lieu avant reprise d'activité ou répondre à un besoin urgent sur place. Notre rôle est de transformer cette situation en une intervention claire, adaptée et correctement préparée.</p>
            <p>Notre activité s'adresse principalement aux entreprises, sites industriels, bâtiments professionnels, espaces d'exploitation et environnements de travail. Nous pouvons également répondre à certaines demandes privées lorsque le contexte le justifie, tout en gardant une approche structurée, propre et professionnelle.</p>
            <p>Chaque intervention dépend d'une réalité concrète : accès, délais, site occupé, contraintes de sécurité, urgence, matériel nécessaire ou préparation en amont. C'est cette lecture du contexte qui nous permet d'apporter une réponse sérieuse, sans promettre trop, mais sans limiter notre capacité à agir lorsque la demande est claire.</p>
            <p>Nous sommes une société organisée, réactive et polyvalente, capable de répondre à des demandes simples comme à des situations plus larges, avec une exécution fiable, une préparation adaptée et un vrai sens du travail bien fait.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Nos équipes — Partie 1 : présentation ---------- */
const TEAM_POINTS = [
  "Sécurité & EPI adaptés",
  "Formations et qualifications",
  "Respect du client et du personnel",
  "Comportement professionnel sur site",
  "Travail propre, encadré et sérieux",
];

function TeamIntro() {
  return (
    <section className="section bg-anthracite team" id="equipes">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="h-section">Nos équipes.</h2>
        </Reveal>

        <div className="team__grid">
          <div className="team__body">
            <Reveal delay={1}><p className="team__p">Chez TKN Technics, la qualité d'une intervention repose d'abord sur les personnes qui la réalisent. Nos équipes regroupent des profils opérationnels, techniques et spécialisés : agents d'entretien industriel, techniciens polyvalents, plombiers, électriciens, couvreurs, plafonneurs, chauffagistes et profils de remise en état.</p></Reveal>
            <Reveal delay={1}><p className="team__p">Chaque intervention est préparée selon le contexte : type de site, accès, contraintes de sécurité, matériel nécessaire, délais et consignes sur place. L'objectif est que les équipes arrivent avec une organisation claire, les bons équipements et une compréhension précise du travail à réaliser.</p></Reveal>
            <Reveal delay={1}><p className="team__p">Nous attachons aussi une réelle importance au respect des collaborateurs. Une équipe bien encadrée, correctement équipée et considérée travaille avec plus de sérieux, de stabilité et de précision. Sur site, cela se traduit par un comportement professionnel, le respect des consignes, des lieux, du client, du personnel présent et des règles nécessaires à la sécurité de tous.</p></Reveal>

            <Reveal delay={2} className="team__points">
              {TEAM_POINTS.map((p) => (
                <div key={p} className="team__point"><Ico name="check" size={17} sw={2.2} />{p}</div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={1} className="team__aside">
            <div className="team__hab">
              <span className="team__hab-label"><Ico name="shield" size={15} sw={1.7} />Formations & habilitations</span>
              <p className="team__hab-txt">La grande majorité de nos collaborateurs dispose d'une certification VCA. Selon les profils et les interventions, nos équipes peuvent également disposer de permis, formations et habilitations spécifiques : permis B, permis C, Clark, nacelle, plateforme à ciseaux, travail en hauteur, harnais, accès contraints et autres qualifications adaptées aux exigences du site.</p>
            </div>
            <Ph label="Équipe TKN sur le terrain" src={PEXELS(1216589)} position="center 40%" className="team__img" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Postuler — Partie 2 : recrutement ---------- */
const RECRUIT_PROFILES = [
  { t: "Nettoyage industriel", d: "Entretien de sites, nettoyage technique et remise en état." },
  { t: "Métiers techniques", d: "Plomberie, électricité, toiture, plafonnage, chauffage…" },
  { t: "Espaces verts", d: "Entretien des abords, élagage, débroussaillage, espaces extérieurs." },
  { t: "Permis & certificats valorisés", d: "VCA, permis B, Clark, nacelle et autres habilitations." },
];

function Recruitment() {
  const form = useForm(["nom", "tel", "metier", "exp", "permis", "dispo", "msg", "cv"]);
  const submit = (e) => { e.preventDefault(); if (form.validate(["nom", "tel"])) form.setSent(true); };
  return (
    <section className="section bg-black recruit-sec" id="recrutement">
      <div className="wrap">
        <Reveal className="recruit">
          <div className="recruit__left">
            <span className="eyebrow">Recrutement</span>
            <h2 className="recruit__title h-card">Rejoindre nos équipes.</h2>
            <p className="recruit__txt muted">Nous recrutons régulièrement de vrais profils de terrain, sérieux et qualifiés. Si ça vous parle, écrivez-nous.</p>
            <div className="recruit__cards">
              {RECRUIT_PROFILES.map((p) => (
                <div key={p.t} className="profile-card">
                  <span className="profile-card__bar" />
                  <div className="profile-card__body">
                    <span className="profile-card__t">{p.t}</span>
                    <span className="profile-card__d">{p.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="recruit__form">
            {form.sent ? (
              <FormSuccess title="Candidature reçue" msg="Merci de votre intérêt pour TKN. Nous revenons vers vous rapidement." onReset={() => { form.setSent(false); }} />
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="field-grid">
                  <Field label="Nom" name="nom" form={form} half required />
                  <Field label="Téléphone" name="tel" form={form} type="tel" half required />
                  <Select label="Métier visé" name="metier" form={form} placeholder="Choisir un métier"
                    options={["Nettoyage industriel", "Métiers techniques", "Espaces verts", "Encadrement", "Autre · polyvalent"]} half />
                  <Field label="Expérience" name="exp" form={form} half placeholder="ex. 5 ans bâtiment" />
                  <Field label="Permis / certificats" name="permis" form={form} half placeholder="VCA, B, Clark…" />
                  <Field label="Disponibilité" name="dispo" form={form} half placeholder="Immédiate, préavis…" />
                  <FileField label="CV / certificat" name="cv" form={form} />
                  <Area label="Message" name="msg" form={form} />
                </div>
                <Button kind="primary" type="submit" arrow>Envoyer ma candidature</Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Pied de page (sombre) ---------- */
function Footer({ navigate }) {
  const cols = [
    { h: "Services", items: [["Nettoyage industriel", { route: "nettoyage" }], ["Maintenance générale", { route: "maintenance" }], ["Interventions spécialisées", { route: "interventions" }], ["Espaces verts", { route: "espaces" }]] },
    { h: "Entreprise", items: [["À propos", { anchor: "apropos" }], ["Nos équipes", { anchor: "equipes" }], ["Zone d'intervention", { anchor: "couverture" }]] },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="assets/tkn-logo.png" alt="TKN Technics" className="footer__logo" />
            <p className="footer__slogan">Services multi-techniques · Belgique</p>
            <span className="footer__vca"><Ico name="shield" size={14} sw={1.6} />Certification VCA*</span>
          </div>
          {cols.map((c) => (
            <nav key={c.h} className="footer__col">
              <span className="footer__h">{c.h}</span>
              {c.items.map(([label, tgt]) => (
                <button key={label} className="footer__link" onClick={() => navigate(tgt)}>{label}</button>
              ))}
            </nav>
          ))}
          <div className="footer__col footer__contact">
            <span className="footer__h">Contact</span>
            <a className="footer__link" href="mailto:info@tkn-technics.be"><Ico name="mail" size={15} sw={1.6} />info@tkn-technics.be</a>
            <a className="footer__link" href="tel:+32499312523"><Ico name="phone" size={15} sw={1.6} />+32 499 31 25 23</a>
            <span className="footer__link footer__link--static"><Ico name="pin" size={15} sw={1.6} />Avenue Paul de Merten 71,<br />1090 Jette, Belgique</span>
          </div>
        </div>
        <div className="footer__legalrow">
          <span className="footer__legal">TKN Technics — TKN Group SRL</span>
          <span className="footer__legal">N° d'entreprise 0746.960.475</span>
          <span className="footer__legal">TVA BE 0746.960.475</span>
        </div>
        <div className="footer__bottom">
          <div className="footer__links">
            <a className="footer__minor" href="#">Mentions légales</a>
            <span className="footer__dot">·</span>
            <a className="footer__minor" href="#">Confidentialité</a>
            <span className="footer__dot">·</span>
            <a className="footer__minor" href="#">Cookies</a>
          </div>
          <span className="footer__copy">© 2026 TKN Technics. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { About, TeamIntro, Recruitment, Footer });
