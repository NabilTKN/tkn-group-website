/* ============================================================
   TKN Technics — Données des pages de détail des services.
   Contenu restauré depuis l'ancienne SPA React (js/service-page.jsx
   + js/services.jsx, supprimés lors de la conversion en HTML statique
   au commit a803752). Rebranché ici pour les pages de détail statiques.
   ============================================================ */

/* Icônes (mêmes tracés SVG que la section « Nos services »). */
var TKN_ICONS = {
  factory: '<path d="M3 21h18"/><path d="M4 21V10l5 3.5V10l5 3.5V6l6 4v11"/><path d="M8 21v-4"/><path d="M13 21v-4"/>',
  wrench: '<path d="M14.5 6.5a3.5 3.5 0 00-4.6 4.3L4 16.7 7.3 20l5.9-5.9a3.5 3.5 0 004.3-4.6l-2.2 2.2-2-2 2.2-2.2z"/>',
  flame: '<path d="M12 3c1 3-2 4-2 7a2 2 0 004 0c0-1.2-.5-1.8-.5-1.8 1.8 1 3 3 3 5.3a4.5 4.5 0 01-9 0C7.5 8 12 7 12 3z"/>',
  leaf: '<path d="M5 19C4 12 9 5 19 5c0 9-6 13-12 13a5 5 0 01-2-.5z"/><path d="M5 19c2-5 5-8 9-9.5"/>',
  arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17L17 7"/><path d="M8 7h9v9"/>'
};

/* Liste courte (section services + bloc « Autres services »). */
var TKN_SERVICES = [
  { id: "nettoyage", route: "nettoyage", icon: "factory", title: "Nettoyage industriel",
    line: "Interventions sur sites de production, environnements industriels, machines et installations, en activité ou à l'arrêt, avec une adaptation aux accès, horaires et contraintes du site." },
  { id: "maintenance", route: "maintenance", icon: "wrench", title: "Maintenance générale",
    line: "Entretien, réparations, finitions et remise en état pour entreprises, immeubles, commerces et particuliers. Une réponse polyvalente pour les besoins du bâtiment : plomberie, électricité, chauffage, toiture, plafonnage, peinture, carrelage et petits travaux." },
  { id: "interventions", route: "interventions", icon: "flame", title: "Interventions spécialisées",
    line: "Pour les situations qui sortent du cadre habituel : sinistre, vidage, débarras, nettoyage lourd, évacuation et remise en état avant réutilisation des espaces. Des interventions organisées selon l'ampleur du chantier, les accès et les contraintes du site." },
  { id: "espaces", route: "espaces", icon: "leaf", title: "Espaces verts",
    line: "Entretien des jardins, abords, parkings et zones extérieures, en passage régulier ou ponctuel, pour garder les extérieurs propres, dégagés et présentables." }
];

/* Contenu complet des pages de détail. */
var TKN_SERVICE_PAGES = {
  nettoyage: {
    code: "NI", route: "nettoyage", title: "Nettoyage industriel", subtitle: "Nettoyage industriel", icon: "factory",
    accroche: "Zones de production, machines, surfaces techniques, toitures, sanitaires, abords ou espaces contraints : nos équipes interviennent à l'intérieur comme à l'extérieur, avec le matériel adapté et dans le respect des consignes propres à chaque site.",
    heroImg: "assets/nettoyage-industriel.jpg", heroPos: "22% 88%",
    intro: [
      "Le nettoyage industriel fait partie de la vie d'un site. Il accompagne la production, la circulation des équipes, l'entretien des espaces communs, la propreté des zones techniques et le maintien en état des infrastructures. Chez TKN Technics, nous intervenons dans cet environnement avec une approche claire : des équipes formées, du matériel adapté, une organisation sérieuse et le respect des règles propres à chaque site.",
      "Nos interventions couvrent aussi bien les zones de production, machines, lignes, sols techniques, toitures et abords extérieurs que les réfectoires, vestiaires, sanitaires, bureaux de site et espaces de circulation. Cette diversité fait partie du nettoyage industriel : assurer la propreté là où les équipes travaillent, passent, produisent, se changent, se restaurent et circulent au quotidien.",
      "Sur un site industriel, la qualité d'une intervention ne se limite pas au résultat visible. Elle repose aussi sur la ponctualité, la préparation, la visibilité des équipes sur site, la sécurité, la coordination avec les responsables et la capacité à travailler sans perturber l'activité. La propreté participe directement à la sécurité de tous : elle limite les risques de chute, d'encombrement, de glissade, d'accumulation de résidus et contribue à maintenir un environnement de travail plus clair, plus sain et mieux organisé.",
      "Nous assurons un nettoyage industriel sérieux, structuré et adapté au fonctionnement réel des entreprises. De l'entretien régulier des locaux sociaux au nettoyage plus technique de zones de production, nous intervenons avec la même exigence : un travail propre, organisé et maîtrisé."
    ],
    prend: [
      { l: "Production & machines", d: "Nettoyage de zones de production, lignes, machines, convoyeurs, équipements et surfaces techniques. Dépoussiérage, dégraissage, aspiration industrielle, nettoyage manuel ou mécanisé, intervention à l'arrêt ou autour de l'activité selon l'organisation du site." },
      { l: "Sols industriels & grandes surfaces", d: "Nettoyage de sols, halls, zones de passage, structures, murs, plafonds et charpentes. Traitement des taches d'huile, dépôts, poussières, traces incrustées, résidus de production et salissures liées à l'activité industrielle." },
      { l: "Travaux manuels & remise en ordre", d: "Interventions concrètes sur site : raclage, pelletage, ramassage, aspiration, balayage industriel, dégagement de zones encombrées, évacuation de résidus, déchets ou matériaux non dangereux. Un travail propre, physique et organisé, jusqu'à remise en état de la zone." },
      { l: "Hauteur, toitures & accès spécifiques", d: "Nettoyage de toitures, bardages, façades, zones hautes et accès particuliers. Interventions préparées avec les équipements adaptés lorsque nécessaire : nacelles, plateformes, harnais et moyens d'accès sécurisés." },
      { l: "Locaux sociaux & espaces du personnel", d: "Entretien des réfectoires, vestiaires, sanitaires, bureaux de site, couloirs et espaces communs. Des prestations régulières ou ponctuelles qui font pleinement partie du nettoyage industriel et du bon fonctionnement quotidien d'un site." },
      { l: "Extérieurs & abords", d: "Nettoyage des voiries internes, cours, quais, parkings, entrées de site, abords d'usine et zones extérieures. Balayage, aspiration, haute pression, remise en ordre et gestion des dépôts liés à l'activité." }
    ],
    bandLabel: "Sécurité & moyens",
    band: [
      "Nous préparons chaque intervention avec les équipes, les équipements et les moyens adaptés au site. La grande majorité de nos collaborateurs dispose d'une certification VCA, et nos équipes sont formées à travailler dans des environnements industriels, professionnels ou techniques, en respectant les consignes propres à chaque client.",
      "Selon les profils et les besoins de l'intervention, nous pouvons mobiliser des collaborateurs disposant de permis, formations et habilitations spécifiques : permis B, permis C, Clark, nacelle, plateforme à ciseaux, travail en hauteur, port du harnais, accès contraints, EPI adaptés et autres qualifications liées aux exigences du site.",
      "Cette préparation nous permet d'intervenir de manière claire, visible et sécurisée, aussi bien pour l'entretien régulier des locaux, vestiaires, sanitaires et espaces communs que pour des interventions plus techniques sur zones de production, machines, sols industriels, toitures, abords ou accès spécifiques."
    ],
    ctaTitle: "Un site à nettoyer ?"
  },

  maintenance: {
    code: "MG", route: "maintenance", title: "Maintenance générale", subtitle: "Maintenance générale", icon: "wrench",
    accroche: "Entretenir, réparer, adapter, remettre en état : les interventions qui permettent à un bâtiment, un site ou un espace de rester fonctionnel, propre et exploitable. Du dépannage ponctuel à la remise en état complète, avec une organisation claire et des moyens adaptés à chaque situation.",
    heroImg: "assets/maintenance-generale.jpg", heroPos: "center 40%",
    intro: [
      "Entretenir, réparer, adapter, remettre en état : la maintenance générale regroupe les interventions qui permettent à un bâtiment, un site ou un espace de rester fonctionnel, propre et exploitable. Chez TKN Technics, nous intervenons sur des demandes concrètes, de l'intervention ponctuelle à la remise en état plus complète, avec une organisation claire et des moyens adaptés à chaque situation.",
      "Nos équipes prennent en charge des travaux de plomberie, électricité, peinture, plafonnage, toiture, chauffage, finitions, réparations, remises en ordre et interventions bâtiment. Une fuite, un local à rafraîchir, une toiture à contrôler, une installation à corriger, une finition à reprendre ou plusieurs travaux à coordonner : chaque demande est traitée avec méthode, sans dispersion.",
      "La maintenance générale demande plus que l'envoi d'un intervenant. Elle exige une bonne lecture du besoin, une préparation sérieuse, une exécution propre et une coordination fiable lorsque plusieurs métiers sont concernés. C'est précisément cette approche que nous mettons en place : comprendre la situation, organiser l'intervention et livrer un résultat clair, stable et directement exploitable.",
      "Avec plus de 800 interventions réalisées, nous disposons d'une expérience concrète du terrain, d'équipes formées aux exigences de sécurité et d'une organisation habituée aux environnements professionnels comme aux interventions privées. Nos prestations s'intègrent dans la réalité du bâtiment : accès, délais, consignes, propreté, continuité d'activité et respect des lieux.",
      "Qu'il s'agisse d'un dépannage, d'une réparation, d'un rafraîchissement, d'une remise en état ou d'une demande plus difficile à classer, nous apportons une réponse sérieuse, structurée et proportionnée. L'objectif reste le même : intervenir proprement, résoudre le problème et rendre l'espace utilisable dans les meilleures conditions."
    ],
    prend: [
      { l: "Toiture & interventions extérieures", d: "Réparations de toitures, contrôles, infiltrations, étanchéité, évacuations d'eau, gouttières, petites reprises, accès en hauteur et interventions ponctuelles sur éléments extérieurs du bâtiment." },
      { l: "Plomberie, sanitaires & débouchage", d: "Réparations de fuites, remplacements sanitaires, robinetterie, raccordements, évacuations, débouchages, désobstructions, remises en service et interventions urgentes sur réseaux d'eau." },
      { l: "Électricité & équipements techniques", d: "Dépannages électriques, adaptations, remplacements, petites installations, éclairage, prises, interrupteurs, corrections, contrôles visuels et interventions techniques courantes dans les bâtiments." },
      { l: "Chauffage & interventions bâtiment", d: "Dépannages ponctuels, remplacements d'éléments, purges, petites réparations, adaptations techniques et interventions liées au confort, au fonctionnement et à l'exploitation des espaces." },
      { l: "Peinture, plafonnage & finitions", d: "Préparation des supports, reprises de murs, plafonnage, enduits, peinture intérieure et extérieure, finitions propres, réparations après intervention et remise en état visuelle des espaces." },
      { l: "Sols, carrelage & revêtements", d: "Pose, remplacement ou réparation de revêtements de sol, carrelage, plinthes, petites reprises, finitions, rénovation de surfaces et remise en ordre après usure, dégât ou transformation." },
      { l: "Menuiserie, portes & petits aménagements", d: "Ajustements de portes, réparations, remplacement d'éléments, petites adaptations, finitions, aménagements légers et interventions pratiques pour rendre un espace plus fonctionnel." },
      { l: "Remise en état & demandes mixtes", d: "Lorsqu'une demande ne rentre pas dans une seule catégorie, TKN Technics organise l'intervention : réparation, nettoyage, débarras, remise en ordre, finition, coordination de plusieurs métiers et restitution d'un espace propre, stable et exploitable." }
    ],
    prendNote: "Une intervention peut commencer par une fuite, une toiture, un débouchage, une finition ou un local à remettre en état. Notre rôle est d'apporter une réponse claire, organisée et adaptée, sans limiter la demande à une seule catégorie lorsque la situation nécessite plusieurs métiers.",
    bandLabel: "Qualité & couverture",
    band: [
      "Des équipes qualifiées, formées aux exigences du secteur et habituées aux interventions bâtiment. Nous nous appuyons sur une culture de sécurité solide, une grande majorité de collaborateurs certifiés VCA, du matériel professionnel et des méthodes de travail cadrées. Chaque intervention est préparée avec sérieux : protection des zones, respect des consignes, exécution propre, coordination et remise en service dans les meilleures conditions.",
      "De la réparation ponctuelle à la remise en état plus complète, nous mobilisons les moyens adaptés pour intervenir proprement, efficacement et partout en Belgique."
    ],
    ctaTitle: "Un projet ou une réparation ?"
  },

  interventions: {
    code: "IS", route: "interventions", title: "Interventions spécialisées", subtitle: "Interventions spécialisées", icon: "flame",
    accroche: "Après-sinistre, débarras, évacuation, nettoyage lourd, remise en état ou intervention difficile à classer : nous mobilisons une équipe préparée, équipée et organisée pour rendre les lieux propres, dégagés et à nouveau exploitables.",
    heroImg: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1600", heroPos: "center 45%",
    intro: [
      "Un incendie, un dégât des eaux, un local à vider, un débarras important, un nettoyage après chantier, une zone fortement encrassée, une toiture à dégager, des encombrants à évacuer ou un espace à remettre en ordre rapidement : certaines situations demandent plus qu'une intervention standard. Elles exigent de la réactivité, du matériel adapté, une équipe équipée et une organisation capable d'intervenir proprement, même lorsque les accès, les volumes, les délais ou l'état des lieux compliquent le travail.",
      "Chez TKN Technics, nous intervenons dans ces contextes pour nettoyer, dégager, évacuer, remettre en état et rendre les lieux plus propres, plus sûrs, plus accessibles et à nouveau exploitables."
    ],
    prend: [
      { l: "Après-sinistre & dégâts majeurs", d: "Nettoyage, évacuation et remise en ordre après incendie, dégât des eaux, infiltration, dégradation ou incident important. Nous intervenons pour dégager les zones, traiter les résidus et préparer les lieux pour la suite." },
      { l: "Nettoyage lourd & après chantier", d: "Nettoyage de surfaces fortement encrassées, poussières, traces de travaux, résidus, dépôts, zones salies ou espaces nécessitant une remise au propre complète avant réutilisation." },
      { l: "Débarras & évacuations", d: "Vidage de locaux, enlèvement d'encombrants, évacuation de déchets, dégagement de caves, bâtiments, toitures, abords ou zones difficiles d'accès, avec organisation des moyens selon le volume et les contraintes." },
      { l: "Haute pression & extérieurs", d: "Nettoyage haute pression de sols, abords, surfaces extérieures, zones techniques, toitures ou accès exposés, avec matériel adapté selon l'état des lieux et la nature des surfaces." },
      { l: "Remise en état & demandes mixtes", d: "Interventions combinant nettoyage, débarras, évacuation, petite remise en état ou préparation d'un espace avant reprise d'activité, relocation, travaux, inspection ou réoccupation." },
      { l: "Urgences & interventions rapides", d: "Mobilisation d'une équipe adaptée lorsque la situation demande une réaction rapide, une organisation claire et une remise en ordre efficace dans des délais courts." }
    ],
    bandLabel: "Réactivité",
    band: [
      "Une intervention spécialisée demande d'abord une bonne lecture de la situation : comprendre l'état des lieux, les accès, les volumes, les risques éventuels, le matériel nécessaire et les compétences à mobiliser.",
      "Nous organisons ensuite l'intervention avec les bonnes équipes, les bons moyens et une méthode claire. L'objectif est d'agir rapidement, sans improvisation inutile : préparer ce qui doit l'être, intervenir proprement, évacuer ce qui doit l'être et rendre les lieux plus sûrs, plus accessibles et à nouveau exploitables."
    ],
    ctaTitle: "Une situation urgente ou exceptionnelle ?"
  },

  espaces: {
    code: "EV", route: "espaces", title: "Espaces verts", subtitle: "Espaces verts", icon: "leaf",
    heroSub: "Des extérieurs propres, maîtrisés et entretenus dans la durée.",
    accroche: "Entretien d'espaces verts, jardinage, tonte, taille, désherbage, débroussaillage et nettoyage des abords. Nous remettons les extérieurs en ordre pour les rendre propres, accessibles et soignés, toute l'année.",
    heroImg: "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&w=1600", heroPos: "center 50%",
    intro: [
      "L'image d'un site commence aussi par ses extérieurs. Chez TKN Technics, nous assurons l'entretien des espaces verts, le jardinage courant et la remise en ordre des abords afin de garder des environnements propres, accessibles et correctement entretenus dans la durée.",
      "Nos interventions couvrent la tonte, la taille, le désherbage, le débroussaillage, le nettoyage des accès, parkings, cours, talus, zones de passage et espaces périphériques. Nous pouvons intervenir sur des extérieurs déjà suivis, mais aussi sur des zones plus négligées, encombrées, difficiles d'accès ou à remettre au propre avant réutilisation.",
      "Qu'il s'agisse d'un passage ponctuel, d'un entretien régulier ou d'une remise en état plus complète, l'objectif reste le même : rendre les extérieurs nets, praticables et cohérents avec l'image du bâtiment, du site industriel ou de l'espace privé concerné. Une intervention propre ne se limite pas à couper ou dégager ; elle permet de retrouver des abords plus clairs, plus sûrs et plus agréables à utiliser au quotidien."
    ],
    prend: [
      { l: "Entretien des espaces verts", d: "Tonte, taille, désherbage, entretien des massifs, plantations et suivi régulier des extérieurs afin de garder des espaces propres, nets et présentables dans la durée." },
      { l: "Taille, élagage & débroussaillage", d: "Taille des haies, arbustes et végétation envahissante, débroussaillage de zones négligées, talus, abords et terrains difficiles d'accès ou à remettre en ordre." },
      { l: "Remise en ordre des extérieurs", d: "Intervention ponctuelle après manque d'entretien, intempéries, occupation, chantier ou dégradation : dégagement, coupe, nettoyage, évacuation et remise au propre des zones concernées." },
      { l: "Nettoyage des abords", d: "Nettoyage des accès, cours, parkings, voiries internes, zones de passage et périphéries de bâtiments, avec gestion des déchets verts et remise en état visuelle des extérieurs." },
      { l: "Jardinage & petits aménagements", d: "Plantations, remise en état de massifs, réaménagement simple d'espaces verts, préparation de zones extérieures et amélioration de l'aspect général des abords." },
      { l: "Extérieurs professionnels, industriels & privés", d: "Interventions sur sites industriels, bâtiments professionnels, espaces collectifs ou propriétés privées, pour maintenir des extérieurs praticables, propres et cohérents avec l'image du lieu." }
    ],
    prendNote: "Nos interventions sont préparées avec la même exigence que nos autres métiers : équipes encadrées, matériel adapté, culture VCA, respect des consignes, des lieux et des personnes présentes.",
    bandLabel: "Format d'intervention",
    band: "Un entretien suivi, une remise en ordre ponctuelle ou une intervention plus complète, partout en Belgique. Nos équipes interviennent avec une préparation adaptée au lieu, à l'état des abords et au niveau d'exigence attendu : matériel approprié, collaborateurs encadrés, culture VCA, respect des consignes, des lieux et des personnes présentes. L'objectif reste le même à chaque passage : des extérieurs propres, praticables et correctement entretenus, sans improvisation.",
    ctaTitle: "Des extérieurs à entretenir ?"
  }
};

window.TKN_ICONS = TKN_ICONS;
window.TKN_SERVICES = TKN_SERVICES;
window.TKN_SERVICE_PAGES = TKN_SERVICE_PAGES;
