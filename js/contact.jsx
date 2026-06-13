/* TKN — Contact (2 parcours) */
const { useState: useStateC } = React;

function QuickForm() {
  const form = useForm(["nom", "societe", "tel", "email", "msg"]);
  const submit = (e) => { e.preventDefault(); if (form.validate(["nom", "email"])) form.setSent(true); };
  if (form.sent) return <FormSuccess title="Demande envoyée" msg="Nous vous recontactons dans les plus brefs délais." onReset={() => form.setSent(false)} />;
  return (
    <form onSubmit={submit} noValidate>
      <div className="field-grid">
        <Field label="Nom" name="nom" form={form} half required />
        <Field label="Société" name="societe" form={form} half />
        <Field label="Téléphone" name="tel" form={form} type="tel" half />
        <Field label="E-mail" name="email" form={form} type="email" half required />
        <Area label="Message" name="msg" form={form} />
      </div>
      <Button kind="primary" type="submit" arrow>Être recontacté</Button>
    </form>
  );
}

function QuoteForm() {
  const form = useForm(["societe", "nom", "tel", "email", "type", "ville", "freq", "urgence", "photos", "msg"]);
  const submit = (e) => { e.preventDefault(); if (form.validate(["societe", "email", "type"])) form.setSent(true); };
  if (form.sent) return <FormSuccess title="Demande de devis reçue" msg="Un interlocuteur revient vers vous avec une proposition claire." onReset={() => form.setSent(false)} />;
  return (
    <form onSubmit={submit} noValidate>
      <div className="field-grid">
        <Field label="Société" name="societe" form={form} half required />
        <Field label="Nom / fonction" name="nom" form={form} half />
        <Field label="Téléphone" name="tel" form={form} type="tel" half />
        <Field label="E-mail" name="email" form={form} type="email" half required />
        <Select label="Type de prestation" name="type" form={form} required placeholder="Choisir une prestation"
          options={["Nettoyage industriel", "Maintenance générale", "Interventions spécialisées", "Espaces verts", "Plusieurs besoins / à préciser"]} half />
        <Field label="Ville / site" name="ville" form={form} half />
        <Segment label="Fréquence" name="freq" form={form} options={["Ponctuel", "Régulier"]} />
        <Segment label="Urgence" name="urgence" form={form} options={["Standard", "Urgent"]} />
        <FileField label="Photos du site (optionnel)" name="photos" form={form} />
        <Area label="Message" name="msg" form={form} />
      </div>
      <Button kind="primary" type="submit" arrow>Demander un devis</Button>
    </form>
  );
}

function Contact() {
  const [tab, setTab] = useStateC("devis");
  const coords = [
    { icon: "mail", label: "E-mail", v: "info@tkn-technics.be", href: "mailto:info@tkn-technics.be" },
    { icon: "phone", label: "Téléphone", v: "+32 499 31 25 23", href: "tel:+32499312523" },
    { icon: "pin", label: "Adresse", v: "Avenue Paul de Merten 71, 1090 Jette, Belgique", href: null },
  ];
  return (
    <section className="section bg-anthracite contact" id="contact">
      <div className="tech-lines" />
      <div className="wrap contact__grid">
        <div className="contact__left">
          <Reveal className="section-head">
            <span className="eyebrow">Contact</span>
            <h2 className="h-section">Nous contacter.</h2>
          </Reveal>
          <Reveal delay={1}><p className="lead contact__lead">Pour une intervention ponctuelle, un besoin régulier ou une situation urgente, décrivez simplement l'essentiel. Nous revenons vers vous rapidement avec une proposition claire et adaptée. Pour les urgences, notre équipe reste joignable 24/7.</p></Reveal>
          <Reveal delay={2} className="contact__coords">
            {coords.map((c) => (
              <div key={c.label} className="coord">
                <span className="coord__icon"><Ico name={c.icon} size={20} sw={1.5} /></span>
                <span className="coord__body">
                  <span className="coord__label">{c.label}</span>
                  {c.href ? <a className="coord__v" href={c.href}>{c.v}</a> : <span className="coord__v">{c.v}</span>}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={1} className="contact__card">
          <div className="tabs">
            <button className={`tab ${tab === "devis" ? "is-on" : ""}`} onClick={() => setTab("devis")}>Demande de devis</button>
            <button className={`tab ${tab === "rapide" ? "is-on" : ""}`} onClick={() => setTab("rapide")}>Contact rapide</button>
            <span className="tabs__ind" style={{ transform: tab === "rapide" ? "translateX(100%)" : "none" }} />
          </div>
          <div className="contact__formwrap">
            {tab === "devis" ? <QuoteForm /> : <QuickForm />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.Contact = Contact;
