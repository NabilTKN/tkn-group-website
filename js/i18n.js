/* ============================================================
   TKN Technics — i18n (plain JS, no framework)
   - One translations object: fr / nl / en.
   - Swaps the text of any element marked data-i18n="key"
     (also data-i18n-ph for placeholders, data-i18n-aria for aria-label).
   - Persists the chosen language in localStorage ("tkn-lang").
   - Defaults to FR.
   Add a string: add the same key to fr, nl and en below, then put
   data-i18n="key" on the element in index.html.
   ============================================================ */

var TKN_TR = {
  /* ----------------------------- FR ----------------------------- */
  fr: {
    "nav.home": "Accueil", "nav.services": "Services", "nav.about": "À propos", "nav.teams": "Équipes", "nav.contact": "Contact", "nav.quote": "Demander un devis", "nav.servicesGroup": "Services",

    "sv.nettoyage": "Nettoyage industriel", "sv.maintenance": "Maintenance générale", "sv.interventions": "Interventions spécialisées", "sv.espaces": "Espaces verts",

    "hero.eyebrow": "Services multi-techniques · Belgique",
    "hero.title": "Une structure d'intervention pour environnements industriels et professionnels.",
    "hero.lead": "Nettoyage industriel, maintenance générale, interventions spécialisées et entretien extérieur pour sites industriels, entreprises et interventions privées. Présents partout en Belgique, jusqu'aux zones frontalières.",
    "hero.ctaQuote": "Demander un devis", "hero.ctaServices": "Voir nos services",

    "services.heading": "Nos services", "services.discover": "Découvrir",
    "services.nettoyage.line": "Interventions sur sites de production, environnements industriels, machines et installations, en activité ou à l'arrêt, avec une adaptation aux accès, horaires et contraintes du site.",
    "services.nettoyage.chip1": "Sites de production", "services.nettoyage.chip2": "Machines & installations", "services.nettoyage.chip3": "Contraintes de site",
    "services.maintenance.line": "Entretien, réparations, finitions et remise en état pour entreprises, immeubles, commerces et particuliers. Une réponse polyvalente pour les besoins du bâtiment : plomberie, électricité, chauffage, toiture, plafonnage, peinture, carrelage et petits travaux.",
    "services.maintenance.chip1": "Entretien", "services.maintenance.chip2": "Réparations", "services.maintenance.chip3": "Finitions", "services.maintenance.chip4": "Remise en état",
    "services.interventions.line": "Pour les situations qui sortent du cadre habituel : sinistre, vidage, débarras, nettoyage lourd, évacuation et remise en état avant réutilisation des espaces. Des interventions organisées selon l'ampleur du chantier, les accès et les contraintes du site.",
    "services.interventions.chip1": "Après sinistre", "services.interventions.chip2": "Débarras & évacuation", "services.interventions.chip3": "Remise en état",
    "services.espaces.line": "Entretien des jardins, abords, parkings et zones extérieures, en passage régulier ou ponctuel, pour garder les extérieurs propres, dégagés et présentables.",
    "services.espaces.chip1": "Tonte & taille", "services.espaces.chip2": "Jardins & abords", "services.espaces.chip3": "Entretien régulier",

    "coverage.eyebrow": "Zone d'intervention", "coverage.heading": "Zone d'intervention.",
    "coverage.lead": "Nous intervenons sur l'ensemble du territoire belge, avec une organisation pensée pour rester mobile, réactive et adaptable. Basés à Bruxelles, nous pouvons nous déplacer rapidement selon la nature de la demande, le niveau d'urgence, les accès disponibles, les contraintes du site et les moyens nécessaires sur place.",
    "coverage.p1": "Notre zone d'intervention ne se limite pas à une région précise. Nous pouvons organiser des prestations dans toute la Belgique, aussi bien pour des interventions ponctuelles que pour des passages réguliers, des travaux planifiés, des urgences ou des opérations plus larges nécessitant plusieurs personnes, du matériel spécifique ou une préparation en amont.",
    "coverage.p2": "Cette mobilité concerne l'ensemble de notre activité : nettoyage, entretien de sites, travaux techniques, réparations, remise en état, interventions spécialisées, évacuations, espaces extérieurs et demandes particulières. Nous intervenons aussi bien sur des sites industriels que dans des bâtiments professionnels, des zones d'exploitation, des chantiers, des espaces communs, des extérieurs ou des lieux privés lorsque la demande le nécessite.",
    "coverage.p3": "Lorsque le contexte le permet, nous pouvons également intervenir dans certaines zones frontalières, notamment pour des clients situés à proximité de la France, des Pays-Bas, de l'Allemagne ou du Luxembourg. Chaque demande est évaluée selon sa faisabilité, les moyens à mobiliser et le niveau d'organisation nécessaire, afin de proposer une intervention claire, sérieuse et adaptée.",

    "map.nl": "Pays-Bas", "map.de": "Allemagne", "map.fr": "France", "map.lu": "Luxembourg",
    "map.hub": "Bruxelles - siège", "map.legendHub": "Bruxelles, siège", "map.legendPorts": "Hubs portuaires", "map.legendPoints": "Points de couverture",
    "map.aria": "Carte de couverture TKN Technics : toute la Belgique, base à Bruxelles et zones frontalières.",

    "about.heading": "À propos.",
    "about.factK1": "Création", "about.factV1": "2020",
    "about.factK2": "Base", "about.factV2": "Bruxelles",
    "about.factK3": "Zone d'intervention", "about.factV3": "Toute la Belgique et zones frontalières",
    "about.factK4": "Environnements", "about.factV4": "Sites industriels, entreprises et interventions privées",
    "about.factK5": "Effectif opérationnel", "about.factV5": "+50 collaborateurs",
    "about.leadPre": "Chez TKN Technics, nous sommes spécialisés dans les ", "about.leadStrong": "interventions concrètes", "about.leadPost": " liées au nettoyage, aux travaux techniques, à la remise en état et aux besoins spécifiques des sites, bâtiments et espaces exploités.",
    "about.p1": "Nous intervenons lorsque la demande doit être comprise rapidement, organisée proprement et exécutée avec sérieux. Certaines situations ne rentrent pas toujours dans une catégorie simple : nettoyer, réparer, dégager, remettre en état, préparer un lieu avant reprise d'activité ou répondre à un besoin urgent sur place. Notre rôle est de transformer cette situation en une intervention claire, adaptée et correctement préparée.",
    "about.p2": "Notre activité s'adresse principalement aux entreprises, sites industriels, bâtiments professionnels, espaces d'exploitation et environnements de travail. Nous pouvons également répondre à certaines demandes privées lorsque le contexte le justifie, tout en gardant une approche structurée, propre et professionnelle.",
    "about.p3": "Chaque intervention dépend d'une réalité concrète : accès, délais, site occupé, contraintes de sécurité, urgence, matériel nécessaire ou préparation en amont. C'est cette lecture du contexte qui nous permet d'apporter une réponse sérieuse, sans promettre trop, mais sans limiter notre capacité à agir lorsque la demande est claire.",
    "about.p4": "Nous sommes une société organisée, réactive et polyvalente, capable de répondre à des demandes simples comme à des situations plus larges, avec une exécution fiable, une préparation adaptée et un vrai sens du travail bien fait.",

    "team.heading": "Nos équipes.",
    "team.p1": "Chez TKN Technics, la qualité d'une intervention repose d'abord sur les personnes qui la réalisent. Nos équipes regroupent des profils opérationnels, techniques et spécialisés : agents d'entretien industriel, techniciens polyvalents, plombiers, électriciens, couvreurs, plafonneurs, chauffagistes et profils de remise en état.",
    "team.p2": "Chaque intervention est préparée selon le contexte : type de site, accès, contraintes de sécurité, matériel nécessaire, délais et consignes sur place. L'objectif est que les équipes arrivent avec une organisation claire, les bons équipements et une compréhension précise du travail à réaliser.",
    "team.p3": "Nous attachons aussi une réelle importance au respect des collaborateurs. Une équipe bien encadrée, correctement équipée et considérée travaille avec plus de sérieux, de stabilité et de précision. Sur site, cela se traduit par un comportement professionnel, le respect des consignes, des lieux, du client, du personnel présent et des règles nécessaires à la sécurité de tous.",
    "team.point1": "Sécurité & EPI adaptés", "team.point2": "Formations et qualifications", "team.point3": "Respect du client et du personnel", "team.point4": "Comportement professionnel sur site", "team.point5": "Travail propre, encadré et sérieux",
    "team.habLabel": "Formations & habilitations",
    "team.habTxt": "La grande majorité de nos collaborateurs dispose d'une certification VCA. Selon les profils et les interventions, nos équipes peuvent également disposer de permis, formations et habilitations spécifiques : permis B, permis C, Clark, nacelle, plateforme à ciseaux, travail en hauteur, harnais, accès contraints et autres qualifications adaptées aux exigences du site.",

    "recruit.eyebrow": "Recrutement", "recruit.title": "Rejoindre nos équipes.",
    "recruit.txt": "Nous recrutons régulièrement de vrais profils de terrain, sérieux et qualifiés. Si ça vous parle, écrivez-nous.",
    "recruit.prof1T": "Nettoyage industriel", "recruit.prof1D": "Entretien de sites, nettoyage technique et remise en état.",
    "recruit.prof2T": "Métiers techniques", "recruit.prof2D": "Plomberie, électricité, toiture, plafonnage, chauffage…",
    "recruit.prof3T": "Espaces verts", "recruit.prof3D": "Entretien des abords, élagage, débroussaillage, espaces extérieurs.",
    "recruit.prof4T": "Permis & certificats valorisés", "recruit.prof4D": "VCA, permis B, Clark, nacelle et autres habilitations.",
    "recruit.fNom": "Nom", "recruit.fTel": "Téléphone", "recruit.fMetier": "Métier visé", "recruit.fMetierPh": "Choisir un métier",
    "recruit.fExp": "Expérience", "recruit.fExpPh": "ex. 5 ans bâtiment", "recruit.fPermis": "Permis / certificats", "recruit.fPermisPh": "VCA, B, Clark…",
    "recruit.fDispo": "Disponibilité", "recruit.fDispoPh": "Immédiate, préavis…", "recruit.fCv": "CV / certificat", "recruit.fMsg": "Message",
    "recruit.optClean": "Nettoyage industriel", "recruit.optTech": "Métiers techniques", "recruit.optGreen": "Espaces verts", "recruit.optSup": "Encadrement", "recruit.optOther": "Autre · polyvalent",
    "recruit.submit": "Envoyer ma candidature", "recruit.successTitle": "Candidature reçue", "recruit.successMsg": "Merci de votre intérêt pour TKN. Nous revenons vers vous rapidement.",

    "contact.eyebrow": "Contact", "contact.heading": "Nous contacter.",
    "contact.lead": "Pour une intervention ponctuelle, un besoin régulier ou une situation urgente, décrivez simplement l'essentiel. Nous revenons vers vous rapidement avec une proposition claire et adaptée. Pour les urgences, notre équipe reste joignable 24/7.",
    "contact.emailLabel": "E-mail", "contact.phoneLabel": "Téléphone", "contact.addressLabel": "Adresse", "contact.addressValue": "Avenue Paul de Merten 71, 1090 Jette, Belgique",
    "contact.tabQuote": "Demande de devis", "contact.tabQuick": "Contact rapide",
    "contact.q.societe": "Société", "contact.q.nom": "Nom / fonction", "contact.q.tel": "Téléphone", "contact.q.email": "E-mail",
    "contact.q.type": "Type de prestation", "contact.q.typePh": "Choisir une prestation", "contact.q.ville": "Ville / site",
    "contact.q.freq": "Fréquence", "contact.q.urgence": "Urgence", "contact.q.photos": "Photos du site (optionnel)", "contact.q.msg": "Message", "contact.q.submit": "Demander un devis",
    "contact.q.optClean": "Nettoyage industriel", "contact.q.optMaint": "Maintenance générale", "contact.q.optInterv": "Interventions spécialisées", "contact.q.optGreen": "Espaces verts", "contact.q.optMulti": "Plusieurs besoins / à préciser",
    "contact.q.freqPonc": "Ponctuel", "contact.q.freqReg": "Régulier", "contact.q.urgStd": "Standard", "contact.q.urgUrg": "Urgent",
    "contact.q.successTitle": "Demande de devis reçue", "contact.q.successMsg": "Un interlocuteur revient vers vous avec une proposition claire.",
    "contact.k.nom": "Nom", "contact.k.societe": "Société", "contact.k.tel": "Téléphone", "contact.k.email": "E-mail", "contact.k.msg": "Message", "contact.k.submit": "Être recontacté",
    "contact.k.successTitle": "Demande envoyée", "contact.k.successMsg": "Nous vous recontactons dans les plus brefs délais.",

    "forms.required": "Champ requis", "forms.addFile": "Ajouter un fichier (PDF, JPG, PNG)", "forms.newRequest": "Nouvelle demande",

    "footer.colServices": "Services", "footer.colCompany": "Entreprise", "footer.colContact": "Contact",
    "footer.slogan": "Services multi-techniques · Belgique", "footer.vca": "Certification VCA*",
    "footer.linkAbout": "À propos", "footer.linkTeams": "Nos équipes", "footer.linkCoverage": "Zone d'intervention",
    "footer.addr1": "Avenue Paul de Merten 71,", "footer.addr2": "1090 Jette, Belgique",
    "footer.legal1": "TKN Technics, TKN Group SRL", "footer.legal2": "N° d'entreprise 0746.960.475", "footer.legal3": "TVA BE 0746.960.475",
    "footer.minor1": "Mentions légales", "footer.minor2": "Confidentialité", "footer.minor3": "Cookies",
    "footer.copy": "© 2026 TKN Technics. Tous droits réservés.",
  },

  /* ----------------------------- NL ----------------------------- */
  nl: {
    "nav.home": "Home", "nav.services": "Diensten", "nav.about": "Over ons", "nav.teams": "Teams", "nav.contact": "Contact", "nav.quote": "Offerte aanvragen", "nav.servicesGroup": "Diensten",

    "sv.nettoyage": "Industriële reiniging", "sv.maintenance": "Algemeen onderhoud", "sv.interventions": "Gespecialiseerde interventies", "sv.espaces": "Groenonderhoud",

    "hero.eyebrow": "Multitechnische diensten · België",
    "hero.title": "Een interventiepartner voor industriële en professionele omgevingen.",
    "hero.lead": "Industriële reiniging, algemeen onderhoud, gespecialiseerde interventies en buitenonderhoud voor bedrijfssites, ondernemingen en particuliere opdrachten. Actief in heel België, tot in de grensstreken.",
    "hero.ctaQuote": "Offerte aanvragen", "hero.ctaServices": "Onze diensten",

    "services.heading": "Onze diensten", "services.discover": "Ontdekken",
    "services.nettoyage.line": "Interventies op productiesites, industriële omgevingen, machines en installaties, in bedrijf of stilgelegd, afgestemd op de toegang, werktijden en beperkingen van de site.",
    "services.nettoyage.chip1": "Productiesites", "services.nettoyage.chip2": "Machines & installaties", "services.nettoyage.chip3": "Sitebeperkingen",
    "services.maintenance.line": "Onderhoud, herstellingen, afwerking en renovatie voor ondernemingen, gebouwen, handelszaken en particulieren. Een veelzijdig antwoord op de behoeften van het gebouw: sanitair, elektriciteit, verwarming, dakwerk, pleisterwerk, schilderwerk, betegeling en kleine werken.",
    "services.maintenance.chip1": "Onderhoud", "services.maintenance.chip2": "Herstellingen", "services.maintenance.chip3": "Afwerking", "services.maintenance.chip4": "Renovatie",
    "services.interventions.line": "Voor situaties die buiten het gewone kader vallen: schadegevallen, leeghalen, ontruiming, zware reiniging, afvoer en herstel voor het hergebruik van ruimtes. Interventies georganiseerd naar de omvang van de werf, de toegang en de beperkingen van de site.",
    "services.interventions.chip1": "Na schade", "services.interventions.chip2": "Ontruiming & afvoer", "services.interventions.chip3": "Renovatie",
    "services.espaces.line": "Onderhoud van tuinen, omgevingen, parkings en buitenzones, periodiek of eenmalig, om de buitenruimtes proper, vrij en verzorgd te houden.",
    "services.espaces.chip1": "Maaien & snoeien", "services.espaces.chip2": "Tuinen & omgeving", "services.espaces.chip3": "Periodiek onderhoud",

    "coverage.eyebrow": "Werkgebied", "coverage.heading": "Werkgebied.",
    "coverage.lead": "Wij werken in heel België, met een organisatie die mobiel, reactief en flexibel blijft. Vanuit Brussel zijn wij snel ter plaatse, afhankelijk van de aard van de aanvraag, de mate van dringendheid, de beschikbare toegang, de beperkingen van de site en de middelen die ter plaatse nodig zijn.",
    "coverage.p1": "Ons werkgebied is niet beperkt tot één regio. Wij organiseren prestaties in heel België, zowel voor eenmalige interventies als voor periodieke passages, geplande werken, noodgevallen of grotere operaties die meerdere mensen, specifiek materieel of voorbereiding vooraf vereisen.",
    "coverage.p2": "Die mobiliteit geldt voor onze hele activiteit: reiniging, siteonderhoud, technische werken, herstellingen, renovatie, gespecialiseerde interventies, ontruimingen, buitenruimtes en bijzondere aanvragen. Wij werken zowel op bedrijfssites als in professionele gebouwen, exploitatiezones, werven, gemeenschappelijke ruimtes, buitenruimtes of private locaties wanneer de aanvraag dit vereist.",
    "coverage.p3": "Waar de context het toelaat, werken wij ook in bepaalde grensstreken, met name voor klanten in de buurt van Frankrijk, Nederland, Duitsland of Luxemburg. Elke aanvraag wordt beoordeeld op haalbaarheid, de in te zetten middelen en de vereiste organisatie, om een heldere, ernstige en passende interventie voor te stellen.",

    "map.nl": "Nederland", "map.de": "Duitsland", "map.fr": "Frankrijk", "map.lu": "Luxemburg",
    "map.hub": "Brussel - hoofdzetel", "map.legendHub": "Brussel, hoofdzetel", "map.legendPorts": "Havenhubs", "map.legendPoints": "Dekkingspunten",
    "map.aria": "Dekkingskaart TKN Technics: heel België, basis in Brussel en grensstreken.",

    "about.heading": "Over ons.",
    "about.factK1": "Opgericht", "about.factV1": "2020",
    "about.factK2": "Thuisbasis", "about.factV2": "Brussel",
    "about.factK3": "Werkgebied", "about.factV3": "Heel België en grensstreken",
    "about.factK4": "Omgevingen", "about.factV4": "Bedrijfssites, ondernemingen en particuliere opdrachten",
    "about.factK5": "Operationeel team", "about.factV5": "+50 medewerkers",
    "about.leadPre": "Bij TKN Technics zijn wij gespecialiseerd in ", "about.leadStrong": "concrete interventies", "about.leadPost": " rond reiniging, technische werken, renovatie en de specifieke behoeften van sites, gebouwen en geëxploiteerde ruimtes.",
    "about.p1": "Wij komen tussen wanneer een aanvraag snel begrepen, netjes georganiseerd en ernstig uitgevoerd moet worden. Sommige situaties passen niet altijd in één eenvoudige categorie: reinigen, herstellen, vrijmaken, renoveren, een locatie voorbereiden voor de heropstart van de activiteit of inspelen op een dringende behoefte ter plaatse. Onze rol is om die situatie om te zetten in een heldere, passende en goed voorbereide interventie.",
    "about.p2": "Onze activiteit richt zich in de eerste plaats op ondernemingen, bedrijfssites, professionele gebouwen, exploitatieruimtes en werkomgevingen. Wij beantwoorden ook bepaalde particuliere aanvragen wanneer de context dit rechtvaardigt, met behoud van een gestructureerde, nette en professionele aanpak.",
    "about.p3": "Elke interventie hangt af van een concrete realiteit: toegang, termijnen, een bezette site, veiligheidsbeperkingen, dringendheid, benodigd materieel of voorbereiding vooraf. Net die lezing van de context laat ons toe een ernstig antwoord te bieden, zonder te veel te beloven, maar zonder onze slagkracht te beperken wanneer de aanvraag duidelijk is.",
    "about.p4": "Wij zijn een georganiseerd, reactief en veelzijdig bedrijf, in staat om zowel eenvoudige aanvragen als ruimere situaties aan te pakken, met een betrouwbare uitvoering, een passende voorbereiding en een echte zin voor goed werk.",

    "team.heading": "Onze teams.",
    "team.p1": "Bij TKN Technics berust de kwaliteit van een interventie in de eerste plaats op de mensen die ze uitvoeren. Onze teams bundelen operationele, technische en gespecialiseerde profielen: industriële onderhoudsmedewerkers, polyvalente technici, loodgieters, elektriciens, dakdekkers, plafonneerders, verwarmingstechnici en renovatieprofielen.",
    "team.p2": "Elke interventie wordt voorbereid volgens de context: type site, toegang, veiligheidsbeperkingen, benodigd materieel, termijnen en richtlijnen ter plaatse. Het doel is dat de teams aankomen met een heldere organisatie, de juiste uitrusting en een nauwkeurig begrip van het uit te voeren werk.",
    "team.p3": "Wij hechten ook echt belang aan respect voor onze medewerkers. Een team dat goed omkaderd, correct uitgerust en gewaardeerd wordt, werkt met meer ernst, stabiliteit en precisie. Op de site vertaalt zich dat in professioneel gedrag en respect voor de richtlijnen, de locatie, de klant, het aanwezige personeel en de regels die nodig zijn voor ieders veiligheid.",
    "team.point1": "Veiligheid & aangepaste PBM", "team.point2": "Opleidingen en kwalificaties", "team.point3": "Respect voor klant en personeel", "team.point4": "Professioneel gedrag op de site", "team.point5": "Net, omkaderd en ernstig werk",
    "team.habLabel": "Opleidingen & attesten",
    "team.habTxt": "De grote meerderheid van onze medewerkers beschikt over een VCA-attest. Afhankelijk van de profielen en de interventies kunnen onze teams ook beschikken over rijbewijzen, opleidingen en specifieke attesten: rijbewijs B, rijbewijs C, heftruck, hoogwerker, schaarlift, werken op hoogte, harnas, besloten ruimtes en andere kwalificaties afgestemd op de eisen van de site.",

    "recruit.eyebrow": "Rekrutering", "recruit.title": "Word lid van onze teams.",
    "recruit.txt": "Wij werven regelmatig echte terreinprofielen aan, ernstig en gekwalificeerd. Spreekt dit u aan? Schrijf ons.",
    "recruit.prof1T": "Industriële reiniging", "recruit.prof1D": "Siteonderhoud, technische reiniging en renovatie.",
    "recruit.prof2T": "Technische beroepen", "recruit.prof2D": "Loodgieterij, elektriciteit, dakwerk, pleisterwerk, verwarming…",
    "recruit.prof3T": "Groenonderhoud", "recruit.prof3D": "Onderhoud van omgevingen, snoeien, vrijmaken, buitenruimtes.",
    "recruit.prof4T": "Rijbewijzen & attesten gewaardeerd", "recruit.prof4D": "VCA, rijbewijs B, heftruck, hoogwerker en andere attesten.",
    "recruit.fNom": "Naam", "recruit.fTel": "Telefoon", "recruit.fMetier": "Gewenste functie", "recruit.fMetierPh": "Kies een functie",
    "recruit.fExp": "Ervaring", "recruit.fExpPh": "bv. 5 jaar bouw", "recruit.fPermis": "Rijbewijzen / attesten", "recruit.fPermisPh": "VCA, B, heftruck…",
    "recruit.fDispo": "Beschikbaarheid", "recruit.fDispoPh": "Onmiddellijk, opzegtermijn…", "recruit.fCv": "CV / attest", "recruit.fMsg": "Bericht",
    "recruit.optClean": "Industriële reiniging", "recruit.optTech": "Technische beroepen", "recruit.optGreen": "Groenonderhoud", "recruit.optSup": "Leidinggevend", "recruit.optOther": "Andere · polyvalent",
    "recruit.submit": "Mijn sollicitatie versturen", "recruit.successTitle": "Sollicitatie ontvangen", "recruit.successMsg": "Bedankt voor uw interesse in TKN. Wij nemen snel contact met u op.",

    "contact.eyebrow": "Contact", "contact.heading": "Contacteer ons.",
    "contact.lead": "Voor een eenmalige interventie, een terugkerende behoefte of een dringende situatie: beschrijf gewoon het essentiële. Wij nemen snel contact met u op met een helder en passend voorstel. Voor noodgevallen blijft ons team 24/7 bereikbaar.",
    "contact.emailLabel": "E-mail", "contact.phoneLabel": "Telefoon", "contact.addressLabel": "Adres", "contact.addressValue": "Avenue Paul de Merten 71, 1090 Jette, België",
    "contact.tabQuote": "Offerteaanvraag", "contact.tabQuick": "Snel contact",
    "contact.q.societe": "Bedrijf", "contact.q.nom": "Naam / functie", "contact.q.tel": "Telefoon", "contact.q.email": "E-mail",
    "contact.q.type": "Type prestatie", "contact.q.typePh": "Kies een prestatie", "contact.q.ville": "Stad / site",
    "contact.q.freq": "Frequentie", "contact.q.urgence": "Dringendheid", "contact.q.photos": "Foto's van de site (optioneel)", "contact.q.msg": "Bericht", "contact.q.submit": "Offerte aanvragen",
    "contact.q.optClean": "Industriële reiniging", "contact.q.optMaint": "Algemeen onderhoud", "contact.q.optInterv": "Gespecialiseerde interventies", "contact.q.optGreen": "Groenonderhoud", "contact.q.optMulti": "Meerdere behoeften / te bepalen",
    "contact.q.freqPonc": "Eenmalig", "contact.q.freqReg": "Periodiek", "contact.q.urgStd": "Standaard", "contact.q.urgUrg": "Dringend",
    "contact.q.successTitle": "Offerteaanvraag ontvangen", "contact.q.successMsg": "Een contactpersoon komt bij u terug met een helder voorstel.",
    "contact.k.nom": "Naam", "contact.k.societe": "Bedrijf", "contact.k.tel": "Telefoon", "contact.k.email": "E-mail", "contact.k.msg": "Bericht", "contact.k.submit": "Word teruggebeld",
    "contact.k.successTitle": "Aanvraag verzonden", "contact.k.successMsg": "Wij nemen zo snel mogelijk contact met u op.",

    "forms.required": "Verplicht veld", "forms.addFile": "Een bestand toevoegen (PDF, JPG, PNG)", "forms.newRequest": "Nieuwe aanvraag",

    "footer.colServices": "Diensten", "footer.colCompany": "Onderneming", "footer.colContact": "Contact",
    "footer.slogan": "Multitechnische diensten · België", "footer.vca": "VCA-attest*",
    "footer.linkAbout": "Over ons", "footer.linkTeams": "Onze teams", "footer.linkCoverage": "Werkgebied",
    "footer.addr1": "Avenue Paul de Merten 71,", "footer.addr2": "1090 Jette, België",
    "footer.legal1": "TKN Technics, TKN Group SRL", "footer.legal2": "Ondernemingsnr. 0746.960.475", "footer.legal3": "Btw BE 0746.960.475",
    "footer.minor1": "Wettelijke vermeldingen", "footer.minor2": "Privacy", "footer.minor3": "Cookies",
    "footer.copy": "© 2026 TKN Technics. Alle rechten voorbehouden.",
  },

  /* ----------------------------- EN ----------------------------- */
  en: {
    "nav.home": "Home", "nav.services": "Services", "nav.about": "About", "nav.teams": "Teams", "nav.contact": "Contact", "nav.quote": "Request a quote", "nav.servicesGroup": "Services",

    "sv.nettoyage": "Industrial cleaning", "sv.maintenance": "General maintenance", "sv.interventions": "Specialised interventions", "sv.espaces": "Green spaces",

    "hero.eyebrow": "Multi-technical services · Belgium",
    "hero.title": "A field-services partner for industrial and professional environments.",
    "hero.lead": "Industrial cleaning, general maintenance, specialised interventions and outdoor upkeep for industrial sites, businesses and private clients. Working throughout Belgium, right up to the border regions.",
    "hero.ctaQuote": "Request a quote", "hero.ctaServices": "View our services",

    "services.heading": "Our services", "services.discover": "Discover",
    "services.nettoyage.line": "Work on production sites, industrial environments, machinery and installations, running or shut down, adapted to each site's access, schedules and constraints.",
    "services.nettoyage.chip1": "Production sites", "services.nettoyage.chip2": "Machinery & installations", "services.nettoyage.chip3": "Site constraints",
    "services.maintenance.line": "Upkeep, repairs, finishing and restoration for businesses, buildings, retail premises and private clients. A versatile response to every building need: plumbing, electrical, heating, roofing, plastering, painting, tiling and small works.",
    "services.maintenance.chip1": "Upkeep", "services.maintenance.chip2": "Repairs", "services.maintenance.chip3": "Finishing", "services.maintenance.chip4": "Restoration",
    "services.interventions.line": "For situations beyond the usual scope: damage, clear-outs, removal, heavy cleaning, evacuation and restoration before spaces are reused. Work organised around the scale of the job, access and site constraints.",
    "services.interventions.chip1": "After damage", "services.interventions.chip2": "Clear-out & removal", "services.interventions.chip3": "Restoration",
    "services.espaces.line": "Upkeep of gardens, surroundings, car parks and outdoor areas, on a regular or one-off basis, to keep grounds clean, clear and presentable.",
    "services.espaces.chip1": "Mowing & pruning", "services.espaces.chip2": "Gardens & grounds", "services.espaces.chip3": "Regular upkeep",

    "coverage.eyebrow": "Coverage area", "coverage.heading": "Coverage area.",
    "coverage.lead": "We operate across the whole of Belgium, with an organisation built to stay mobile, responsive and adaptable. Based in Brussels, we can reach a site quickly depending on the nature of the request, the level of urgency, the available access, the site constraints and the resources required on site.",
    "coverage.p1": "Our coverage is not limited to a single region. We can organise work anywhere in Belgium, for one-off interventions as well as regular visits, planned works, emergencies or larger operations requiring several people, specific equipment or advance preparation.",
    "coverage.p2": "This mobility applies to our entire activity: cleaning, site upkeep, technical works, repairs, restoration, specialised interventions, clear-outs, outdoor areas and special requests. We work on industrial sites as well as in professional buildings, operating areas, worksites, common spaces, outdoor areas or private premises when the request calls for it.",
    "coverage.p3": "Where the context allows, we can also work in certain border regions, in particular for clients close to France, the Netherlands, Germany or Luxembourg. Each request is assessed on its feasibility, the resources to be mobilised and the level of organisation required, so we can propose a clear, serious and suitable intervention.",

    "map.nl": "Netherlands", "map.de": "Germany", "map.fr": "France", "map.lu": "Luxembourg",
    "map.hub": "Brussels - head office", "map.legendHub": "Brussels, head office", "map.legendPorts": "Port hubs", "map.legendPoints": "Coverage points",
    "map.aria": "TKN Technics coverage map: the whole of Belgium, based in Brussels, with cross-border zones.",

    "about.heading": "About.",
    "about.factK1": "Founded", "about.factV1": "2020",
    "about.factK2": "Home base", "about.factV2": "Brussels",
    "about.factK3": "Coverage area", "about.factV3": "All of Belgium and border regions",
    "about.factK4": "Environments", "about.factV4": "Industrial sites, businesses and private clients",
    "about.factK5": "Operational team", "about.factV5": "+50 staff",
    "about.leadPre": "At TKN Technics, we specialise in ", "about.leadStrong": "hands-on interventions", "about.leadPost": " for cleaning, technical works, restoration and the specific needs of working sites, buildings and spaces.",
    "about.p1": "We step in when a request needs to be understood quickly, organised cleanly and carried out properly. Some situations don't fit neatly into a single category: cleaning, repairing, clearing, restoring, preparing a place before activity resumes or responding to an urgent need on site. Our role is to turn that situation into a clear, suitable and properly prepared intervention.",
    "about.p2": "Our work is aimed primarily at businesses, industrial sites, professional buildings, operating areas and working environments. We can also handle certain private requests where the context justifies it, while keeping a structured, clean and professional approach.",
    "about.p3": "Every intervention depends on a concrete reality: access, deadlines, an occupied site, safety constraints, urgency, the equipment needed or preparation beforehand. It is this reading of the context that lets us provide a serious response, without over-promising, but without limiting our ability to act when the request is clear.",
    "about.p4": "We are an organised, responsive and versatile company, able to handle simple requests as well as larger situations, with reliable execution, suitable preparation and a real sense of work done well.",

    "team.heading": "Our teams.",
    "team.p1": "At TKN Technics, the quality of an intervention rests first on the people who carry it out. Our teams bring together operational, technical and specialised profiles: industrial cleaning operatives, multi-skilled technicians, plumbers, electricians, roofers, plasterers, heating engineers and restoration profiles.",
    "team.p2": "Every intervention is prepared according to the context: type of site, access, safety constraints, equipment needed, deadlines and on-site instructions. The aim is for teams to arrive with a clear plan, the right equipment and a precise understanding of the work to be done.",
    "team.p3": "We also place real importance on respect for our staff. A team that is well supported, properly equipped and valued works with more care, stability and precision. On site, that translates into professional conduct and respect for the instructions, the premises, the client, the people present and the rules needed for everyone's safety.",
    "team.point1": "Safety & suitable PPE", "team.point2": "Training and qualifications", "team.point3": "Respect for client and staff", "team.point4": "Professional conduct on site", "team.point5": "Clean, supervised and serious work",
    "team.habLabel": "Training & certifications",
    "team.habTxt": "The vast majority of our staff hold VCA certification. Depending on the profiles and the work, our teams may also hold specific licences, training and certifications: category B licence, category C licence, forklift, aerial platform, scissor lift, working at height, harness, restricted access and other qualifications suited to the site's requirements.",

    "recruit.eyebrow": "Recruitment", "recruit.title": "Join our teams.",
    "recruit.txt": "We regularly recruit genuine, serious and qualified field profiles. If that sounds like you, get in touch.",
    "recruit.prof1T": "Industrial cleaning", "recruit.prof1D": "Site upkeep, technical cleaning and restoration.",
    "recruit.prof2T": "Technical trades", "recruit.prof2D": "Plumbing, electrical, roofing, plastering, heating…",
    "recruit.prof3T": "Green spaces", "recruit.prof3D": "Upkeep of surroundings, pruning, clearing, outdoor areas.",
    "recruit.prof4T": "Licences & certificates valued", "recruit.prof4D": "VCA, category B licence, forklift, aerial platform and other certifications.",
    "recruit.fNom": "Name", "recruit.fTel": "Phone", "recruit.fMetier": "Role sought", "recruit.fMetierPh": "Choose a role",
    "recruit.fExp": "Experience", "recruit.fExpPh": "e.g. 5 years in construction", "recruit.fPermis": "Licences / certificates", "recruit.fPermisPh": "VCA, B, forklift…",
    "recruit.fDispo": "Availability", "recruit.fDispoPh": "Immediate, notice period…", "recruit.fCv": "CV / certificate", "recruit.fMsg": "Message",
    "recruit.optClean": "Industrial cleaning", "recruit.optTech": "Technical trades", "recruit.optGreen": "Green spaces", "recruit.optSup": "Supervision", "recruit.optOther": "Other · multi-skilled",
    "recruit.submit": "Send my application", "recruit.successTitle": "Application received", "recruit.successMsg": "Thank you for your interest in TKN. We'll get back to you shortly.",

    "contact.eyebrow": "Contact", "contact.heading": "Get in touch.",
    "contact.lead": "For a one-off intervention, a regular need or an urgent situation, simply describe the essentials. We'll get back to you quickly with a clear, suitable proposal. For emergencies, our team stays reachable 24/7.",
    "contact.emailLabel": "Email", "contact.phoneLabel": "Phone", "contact.addressLabel": "Address", "contact.addressValue": "Avenue Paul de Merten 71, 1090 Jette, Belgium",
    "contact.tabQuote": "Quote request", "contact.tabQuick": "Quick contact",
    "contact.q.societe": "Company", "contact.q.nom": "Name / role", "contact.q.tel": "Phone", "contact.q.email": "Email",
    "contact.q.type": "Type of service", "contact.q.typePh": "Choose a service", "contact.q.ville": "City / site",
    "contact.q.freq": "Frequency", "contact.q.urgence": "Urgency", "contact.q.photos": "Site photos (optional)", "contact.q.msg": "Message", "contact.q.submit": "Request a quote",
    "contact.q.optClean": "Industrial cleaning", "contact.q.optMaint": "General maintenance", "contact.q.optInterv": "Specialised interventions", "contact.q.optGreen": "Green spaces", "contact.q.optMulti": "Several needs / to be specified",
    "contact.q.freqPonc": "One-off", "contact.q.freqReg": "Regular", "contact.q.urgStd": "Standard", "contact.q.urgUrg": "Urgent",
    "contact.q.successTitle": "Quote request received", "contact.q.successMsg": "A member of our team will come back to you with a clear proposal.",
    "contact.k.nom": "Name", "contact.k.societe": "Company", "contact.k.tel": "Phone", "contact.k.email": "Email", "contact.k.msg": "Message", "contact.k.submit": "Get a call back",
    "contact.k.successTitle": "Request sent", "contact.k.successMsg": "We'll get back to you as soon as possible.",

    "forms.required": "Required field", "forms.addFile": "Add a file (PDF, JPG, PNG)", "forms.newRequest": "New request",

    "footer.colServices": "Services", "footer.colCompany": "Company", "footer.colContact": "Contact",
    "footer.slogan": "Multi-technical services · Belgium", "footer.vca": "VCA certification*",
    "footer.linkAbout": "About", "footer.linkTeams": "Our teams", "footer.linkCoverage": "Coverage area",
    "footer.addr1": "Avenue Paul de Merten 71,", "footer.addr2": "1090 Jette, Belgium",
    "footer.legal1": "TKN Technics, TKN Group SRL", "footer.legal2": "Company no. 0746.960.475", "footer.legal3": "VAT BE 0746.960.475",
    "footer.minor1": "Legal notice", "footer.minor2": "Privacy", "footer.minor3": "Cookies",
    "footer.copy": "© 2026 TKN Technics. All rights reserved.",
  },
};

(function () {
  var STORE_KEY = "tkn-lang";
  var DEFAULT_LANG = "fr";

  function getSavedLang() {
    try {
      var s = localStorage.getItem(STORE_KEY);
      if (s && TKN_TR[s]) return s;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    var dict = TKN_TR[lang] || TKN_TR[DEFAULT_LANG];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-ph")];
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", v);
    });

    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function setLang(lang) {
    if (!TKN_TR[lang]) return;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  function init() {
    applyLang(getSavedLang());
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /* Expose a tiny API for other scripts (e.g. js/main.js form messages). */
  window.TKNi18n = {
    setLang: setLang,
    apply: applyLang,
    t: function (key) {
      var lang = getSavedLang();
      var dict = TKN_TR[lang] || TKN_TR[DEFAULT_LANG];
      return dict[key] != null ? dict[key] : key;
    },
    get current() { return getSavedLang(); },
  };
})();
