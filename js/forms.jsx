/* TKN — Form primitives with focus + validation states */
const { useState: useStateF } = React;

function useForm(fields) {
  const init = {}; fields.forEach((f) => (init[f] = ""));
  const [values, setValues] = useStateF(init);
  const [errors, setErrors] = useStateF({});
  const [sent, setSent] = useStateF(false);
  const set = (k, v) => { setValues((s) => ({ ...s, [k]: v })); if (errors[k]) setErrors((e) => ({ ...e, [k]: false })); };
  const validate = (required) => {
    const errs = {};
    required.forEach((k) => { if (!String(values[k] || "").trim()) errs[k] = true; });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  return { values, set, errors, validate, sent, setSent };
}

function Field({ label, name, form, type = "text", required, half, placeholder }) {
  const [focus, setFocus] = useStateF(false);
  const err = form.errors[name];
  return (
    <label className={`field ${half ? "field--half" : ""} ${focus ? "is-focus" : ""} ${err ? "is-err" : ""}`}>
      <span className="field__label">{label}{required && <span className="field__req">*</span>}</span>
      <input
        className="field__input" type={type} value={form.values[name] || ""} placeholder={placeholder || ""}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        onChange={(e) => form.set(name, e.target.value)}
      />
      <span className="field__line" />
      {err && <span className="field__msg">Champ requis</span>}
    </label>
  );
}

function Area({ label, name, form, required }) {
  const [focus, setFocus] = useStateF(false);
  const err = form.errors[name];
  return (
    <label className={`field field--full ${focus ? "is-focus" : ""} ${err ? "is-err" : ""}`}>
      <span className="field__label">{label}{required && <span className="field__req">*</span>}</span>
      <textarea
        className="field__input field__area" rows="3" value={form.values[name] || ""}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        onChange={(e) => form.set(name, e.target.value)}
      />
      <span className="field__line" />
      {err && <span className="field__msg">Champ requis</span>}
    </label>
  );
}

function Select({ label, name, form, options, half, required, placeholder }) {
  const [focus, setFocus] = useStateF(false);
  const err = form.errors[name];
  return (
    <label className={`field ${half ? "field--half" : ""} ${focus ? "is-focus" : ""} ${err ? "is-err" : ""} ${form.values[name] ? "has-value" : ""}`}>
      <span className="field__label">{label}{required && <span className="field__req">*</span>}</span>
      <div className="field__selwrap">
        <select className="field__input field__select" value={form.values[name] || ""}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          onChange={(e) => form.set(name, e.target.value)}>
          <option value="" disabled>{placeholder || "Sélectionner…"}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <span className="field__chev"><Ico name="chevronDown" size={16} sw={2} /></span>
      </div>
      <span className="field__line" />
      {err && <span className="field__msg">Champ requis</span>}
    </label>
  );
}

/* Segmented toggle (pleine largeur, 2 moitiés égales) */
function Segment({ label, name, form, options }) {
  const val = form.values[name];
  return (
    <div className="field field--full">
      <span className="field__label">{label}</span>
      <div className="seg seg--full">
        {options.map((o) => (
          <button key={o} type="button" className={`seg__btn ${val === o ? "is-on" : ""}`}
            onClick={() => form.set(name, o)}>{o}</button>
        ))}
      </div>
    </div>
  );
}

function FileField({ label, name, form }) {
  const [fname, setFname] = useStateF("");
  return (
    <label className="field field--full filefield">
      <span className="field__label">{label}</span>
      <div className="filefield__drop">
        <Ico name="upload" size={20} sw={1.5} />
        <span className="filefield__txt">{fname || "Ajouter un fichier (PDF, JPG, PNG)"}</span>
        <input type="file" className="filefield__input"
          onChange={(e) => { const f = e.target.files[0]; setFname(f ? f.name : ""); form.set(name, f ? f.name : ""); }} />
      </div>
    </label>
  );
}

function FormSuccess({ title, msg, onReset }) {
  return (
    <div className="form-success">
      <span className="form-success__ico"><Ico name="check" size={30} sw={2} /></span>
      <h4 className="form-success__t">{title}</h4>
      <p className="form-success__m">{msg}</p>
      <button className="link-arrow" onClick={onReset}>Nouvelle demande <span className="arr"><Ico name="arrow" size={16} sw={2} /></span></button>
    </div>
  );
}

Object.assign(window, { useForm, Field, Area, Select, Segment, FileField, FormSuccess });
