/* TKN — Couverture (texte + carte Belgique remplie + 4 points clés) */

const MAP_LAT0 = 50.5;
const MAP_K = Math.cos((MAP_LAT0 * Math.PI) / 180); // ~0.6374

/* Contour de la Belgique — tracé géographique (lon, lat), sens horaire. */
const BE_BORDER = [
  [2.54, 51.09], [2.62, 51.12], [2.72, 51.14], [2.92, 51.23], [3.06, 51.29], [3.18, 51.34], [3.36, 51.37],
  [3.41, 51.27], [3.51, 51.25], [3.58, 51.30], [3.79, 51.21], [3.90, 51.21], [3.97, 51.36], [4.22, 51.36],
  [4.33, 51.46], [4.47, 51.48], [4.55, 51.43], [4.77, 51.50], [5.03, 51.49], [5.13, 51.31], [5.24, 51.26],
  [5.56, 51.22], [5.81, 51.16], [5.90, 51.05], [5.69, 50.96], [5.74, 50.90], [5.97, 50.75], [6.02, 50.66],
  [6.18, 50.62], [6.37, 50.55], [6.34, 50.46], [6.20, 50.33], [6.11, 50.18], [5.97, 50.13], [5.88, 49.94],
  [5.78, 49.79], [5.90, 49.66], [5.83, 49.55], [5.45, 49.51], [5.30, 49.56], [5.05, 49.69], [4.85, 49.79],
  [4.69, 49.99], [4.83, 50.14], [4.62, 50.05], [4.32, 49.97], [4.14, 50.04], [4.05, 50.31], [3.73, 50.34],
  [3.66, 50.45], [3.39, 50.50], [3.21, 50.62], [3.27, 50.71], [3.11, 50.78], [2.87, 50.70], [2.64, 50.81],
  [2.58, 50.95], [2.54, 51.09],
];

/* Pays voisins — étiquettes posées NETTEMENT À L'EXTÉRIEUR de la silhouette,
   chacune reliée à sa frontière par un fin trait pointillé.
   b  : point lon/lat sur la frontière concernée (départ du trait)
   lx/ly : position du libellé (coordonnées viewBox)
   cx/cy : point de raccord du trait, juste au bord du libellé          */
const NEIGHBORS = [
  { t: "Pays-Bas",   b: [4.55, 51.45], lx: 49.5, ly: 7.4,  cx: 49.5, cy: 10.6 }, // haut
  { t: "Allemagne",  b: [6.32, 50.52], lx: 91,   ly: 40.5, cx: 81,   cy: 40.5 }, // droite
  { t: "Luxembourg", b: [5.83, 49.60], lx: 84,   ly: 84,   cx: 75,   cy: 79.5 }, // bas-droite
  { t: "France",     b: [3.90, 50.30], lx: 16.5, ly: 84,   cx: 25,   cy: 80   }, // bas-gauche
];

/* Un seul repère : Bruxelles (le siège). Aucune pastille de ville. */
const HUB = { t: "Bruxelles", sub: "SIÈGE", lon: 4.35, lat: 50.85 };

/* La silhouette est ajustée DANS un cadre intérieur, laissant des marges
   généreuses tout autour pour les libellés des pays voisins. */
const VB = { w: 100, h: 92 };
const INNER = { x0: 23, y0: 15, x1: 73, y1: 73 };
function buildMapGeometry() {
  const px = BE_BORDER.map(([lon]) => lon * MAP_K);
  const py = BE_BORDER.map(([, lat]) => -lat);
  const minX = Math.min(...px), maxX = Math.max(...px);
  const minY = Math.min(...py), maxY = Math.max(...py);
  const spanX = maxX - minX, spanY = maxY - minY;
  const availW = INNER.x1 - INNER.x0, availH = INNER.y1 - INNER.y0;
  const scale = Math.min(availW / spanX, availH / spanY);
  const offX = INNER.x0 + (availW - spanX * scale) / 2;
  const offY = INNER.y0 + (availH - spanY * scale) / 2;
  const project = ([lon, lat]) => [
    offX + (lon * MAP_K - minX) * scale,
    offY + (-lat - minY) * scale,
  ];
  const toPath = (pts) => pts.map((p, i) => `${i ? "L" : "M"}${project(p).map((n) => n.toFixed(2)).join(" ")}`).join(" ") + " Z";
  return { project, toPath };
}

function BelgiumMap() {
  const [ref, seen] = useInView({ threshold: 0.2 });
  const { project, toPath } = React.useMemo(buildMapGeometry, []);
  const bePath = toPath(BE_BORDER);
  const hp = project([HUB.lon, HUB.lat]);

  return (
    <div ref={ref} className={`be-map ${seen ? "is-in" : ""}`}>
      <svg viewBox={`0 0 ${VB.w} ${VB.h}`} className="be-svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Carte de couverture TKN Technics — toute la Belgique, base à Bruxelles, et zones transfrontalières">
        <defs>
          <filter id="be-soft" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>

        {/* Halo doux et chaud sous la silhouette — profondeur discrète */}
        <path d={bePath} className="be-bleed" filter="url(#be-soft)" />

        {/* Belgique : remplissage crème, contour doré fin */}
        <path d={bePath} className="be-fill" />
        <path d={bePath} className="be-outline" pathLength="1" fill="none" />

        {/* Pays voisins : libellés à l'extérieur + traits pointillés vers la frontière */}
        <g className="be-neighbors">
          {NEIGHBORS.map((n, i) => {
            const p = project(n.b);
            return (
              <g key={n.t} className="be-nb" style={{ transitionDelay: `${700 + i * 110}ms` }}>
                <line x1={n.cx} y1={n.cy} x2={p[0]} y2={p[1]} className="be-leader" />
                <text x={n.lx} y={n.ly} textAnchor="middle" className="be-country">{n.t}</text>
              </g>
            );
          })}
        </g>

        {/* Siège — Bruxelles : anneaux dorés concentriques */}
        <g className="be-hub" style={{ transitionDelay: "420ms" }}>
          <circle cx={hp[0]} cy={hp[1]} r="4.3" className="be-ring be-ring--3" />
          <circle cx={hp[0]} cy={hp[1]} r="2.9" className="be-ring be-ring--2" />
          <circle cx={hp[0]} cy={hp[1]} r="1.7" className="be-ring be-ring--1" />
          <circle cx={hp[0]} cy={hp[1]} r="0.85" className="be-pt" />
          <text x={hp[0]} y={hp[1] - 5.8} textAnchor="middle" className="be-lbl">{HUB.t}</text>
          <text x={hp[0]} y={hp[1] + 7.3} textAnchor="middle" className="be-lbl-sub">{HUB.sub}</text>
        </g>
      </svg>

      <div className="be-legend">
        <span className="be-leg"><span className="be-leg-sw" />Couverture nationale — toute la Belgique</span>
        <span className="be-leg"><span className="be-leg-dot be-leg-dot--hub" />Base à Bruxelles · zones frontalières possibles</span>
      </div>
    </div>
  );
}

function Coverage() {
  return (
    <section className="section bg-anthracite coverage" id="couverture">
      <div className="wrap coverage__grid">
        <div className="coverage__left">
          <Reveal className="section-head">
            <span className="eyebrow">Zone d'intervention</span>
            <h2 className="h-section">Zone d'intervention.</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="lead coverage__lead">Nous intervenons sur l'ensemble du territoire belge, avec une organisation pensée pour rester mobile, réactive et adaptable. Basés à Bruxelles, nous pouvons nous déplacer rapidement selon la nature de la demande, le niveau d'urgence, les accès disponibles, les contraintes du site et les moyens nécessaires sur place.</p>
          </Reveal>
          <Reveal delay={1}>
            <p className="coverage__txt muted">Notre zone d'intervention ne se limite pas à une région précise. Nous pouvons organiser des prestations dans toute la Belgique, aussi bien pour des interventions ponctuelles que pour des passages réguliers, des travaux planifiés, des urgences ou des opérations plus larges nécessitant plusieurs personnes, du matériel spécifique ou une préparation en amont.</p>
          </Reveal>
          <Reveal delay={1}>
            <p className="coverage__txt muted">Cette mobilité concerne l'ensemble de notre activité : nettoyage, entretien de sites, travaux techniques, réparations, remise en état, interventions spécialisées, évacuations, espaces extérieurs et demandes particulières. Nous intervenons aussi bien sur des sites industriels que dans des bâtiments professionnels, des zones d'exploitation, des chantiers, des espaces communs, des extérieurs ou des lieux privés lorsque la demande le nécessite.</p>
          </Reveal>
          <Reveal delay={1}>
            <p className="coverage__txt muted">Lorsque le contexte le permet, nous pouvons également intervenir dans certaines zones frontalières, notamment pour des clients situés à proximité de la France, des Pays-Bas, de l'Allemagne ou du Luxembourg. Chaque demande est évaluée selon sa faisabilité, les moyens à mobiliser et le niveau d'organisation nécessaire, afin de proposer une intervention claire, sérieuse et adaptée.</p>
          </Reveal>
        </div>

        <Reveal delay={1} className="coverage__map">
          <BelgiumMap />
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Coverage });
