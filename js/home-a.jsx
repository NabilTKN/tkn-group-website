/* TKN — Header + Hero */
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

const SERVICES_NAV = [
  { id: "nettoyage", icon: "factory", label: "Nettoyage industriel", route: "nettoyage" },
  { id: "maintenance", icon: "wrench", label: "Maintenance générale", route: "maintenance" },
  { id: "interventions", icon: "flame", label: "Interventions spécialisées", route: "interventions" },
  { id: "espaces", icon: "leaf", label: "Espaces verts", route: "espaces" },
];

function Header({ navigate, route }) {
  const [scrolled, setScrolled] = useStateA(false);
  const [openMenu, setOpenMenu] = useStateA(false);
  const [svcOpen, setSvcOpen] = useStateA(false);

  useEffectA(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffectA(() => {
    document.body.classList.toggle("no-scroll", openMenu);
  }, [openMenu]);

  const items = [
    { label: "Accueil", anchor: "top" },
    { label: "À propos", anchor: "apropos" },
    { label: "Équipes", anchor: "equipes" },
    { label: "Contact", anchor: "contact" },
  ];

  const go = (target) => { setOpenMenu(false); setSvcOpen(false); navigate(target); };

  return (
    <header className={`hdr ${scrolled || route !== "home" ? "is-solid" : ""}`}>
      <div className="hdr__bar wrap">
        <Logo height={46} onClick={() => go({ anchor: "top" })} />

        <nav className="hdr__nav">
          {items.slice(0, 1).map((it) => (
            <button key={it.label} className="navlink" onClick={() => go({ anchor: it.anchor })}>{it.label}</button>
          ))}
          <div className="navitem" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
            <button className="navlink navlink--svc" onClick={() => go({ anchor: "services" })}>
              Services <Ico name="chevronDown" size={15} sw={2} style={{ transition: "transform .3s", transform: svcOpen ? "rotate(180deg)" : "none" }} />
            </button>
            <div className={`dropdown ${svcOpen ? "is-open" : ""}`}>
              <div className="dropdown__inner">
                {SERVICES_NAV.map((s, i) => (
                  <button key={s.id} className="dd-item" onClick={() => go(s.route ? { route: s.route } : { anchor: s.anchor })}>
                    <span className="dd-item__icon"><Ico name={s.icon} size={19} sw={1.5} /></span>
                    <span className="dd-item__label">{s.label}</span>
                    <span className="dd-item__arr"><Ico name="arrowUpRight" size={16} /></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {items.slice(1).map((it) => (
            <button key={it.label} className="navlink" onClick={() => go({ anchor: it.anchor })}>{it.label}</button>
          ))}
        </nav>

        <div className="hdr__right">
          <LangSwitch />
          <span className="hdr__divider" />
          <Button kind="primary" onClick={() => go({ anchor: "contact" })}>Demander un devis</Button>
          <button className={`burger ${openMenu ? "is-open" : ""}`} onClick={() => setOpenMenu(!openMenu)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`drawer ${openMenu ? "is-open" : ""}`}>
        <div className="drawer__inner">
          <button className="drawer__link" onClick={() => go({ anchor: "top" })}>Accueil</button>
          <div className="drawer__group">
            <span className="drawer__grouplabel">Services</span>
            {SERVICES_NAV.map((s) => (
              <button key={s.id} className="drawer__sub" onClick={() => go(s.route ? { route: s.route } : { anchor: s.anchor })}>{s.label}</button>
            ))}
          </div>
          <button className="drawer__link" onClick={() => go({ anchor: "apropos" })}>À propos</button>
          <button className="drawer__link" onClick={() => go({ anchor: "equipes" })}>Équipes</button>
          <button className="drawer__link" onClick={() => go({ anchor: "contact" })}>Contact</button>
          <div className="drawer__foot">
            <LangSwitch />
            <Button kind="primary" block onClick={() => go({ anchor: "contact" })} arrow>Demander un devis</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ navigate }) {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <Ph label="Site industriel" src="assets/hero-industrial.jpg" position="center" className="hero__ph" />
        <div className="hero__scrim" />
        <div className="hero__warm" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content wrap">
        <Reveal className="hero__eyebrow"><span className="eyebrow">Services multi-techniques · Belgique</span></Reveal>
        <Reveal delay={1}>
          <h1 className="hero__title">On entretient ce qui fait tourner vos sites et vos bâtiments.</h1>
        </Reveal>
        <Reveal delay={2} className="hero__sub">
          <p className="lead">Nettoyage industriel, maintenance générale, interventions spécialisées et entretien extérieur pour sites industriels, entreprises et interventions privées. Présents partout en Belgique, jusqu'aux zones frontalières.</p>
        </Reveal>
        <Reveal delay={3} className="hero__cta">
          <Button kind="primary" lg arrow onClick={() => navigate({ anchor: "contact" })}>Demander un devis</Button>
          <Button kind="ghost" lg onClick={() => navigate({ anchor: "services" })}>Voir nos services</Button>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero });
