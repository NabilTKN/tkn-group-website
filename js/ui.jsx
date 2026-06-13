/* TKN — shared UI primitives. Exported to window. */
const { useState, useEffect, useRef } = React;

/* Reveal on scroll via IntersectionObserver */
function useInView(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    let done = false;
    const reveal = () => { if (!done) { done = true; setSeen(true); } };

    // Immediate check: already in (or above) the viewport on mount
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * 0.95) { reveal(); return; }

    if (typeof IntersectionObserver === "undefined") { reveal(); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); reveal(); }
    }, { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? "0px 0px -6% 0px" });
    io.observe(el);

    // Failsafe: never leave content hidden if the observer doesn't fire
    const t = setTimeout(() => { io.disconnect(); reveal(); }, 1400);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return [ref, seen];
}

function Reveal({ children, className = "", delay = 0, as: Tag = "div", style, ...rest }) {
  const [ref, seen] = useInView();
  const d = delay ? ` d${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal${d} ${seen ? "in" : ""} ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}

function RuleDraw({ className = "", style }) {
  const [ref, seen] = useInView({ threshold: 0.6 });
  return <div ref={ref} className={`rule-draw ${seen ? "in" : ""} ${className}`} style={style} />;
}

/* Count-up number, animates when scrolled into view */
function CountUp({ to, prefix = "", suffix = "", dur = 1500 }) {
  const [ref, seen] = useInView({ threshold: 0.4 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVal(to); return; }
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(e * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* Logo — variants: full (lockup), mono (small text mark) */
function Logo({ height = 46, onClick, variant = "full", dark = false }) {
  if (variant === "mono") {
    return (
      <button onClick={onClick} aria-label="TKN Technics" style={{
        fontFamily: "var(--title)", fontWeight: 800, fontSize: height * 0.6,
        letterSpacing: "-0.02em", color: "var(--white)", lineHeight: 1, display: "inline-flex",
      }}>
        T<span style={{ color: "var(--yellow)" }}>K</span>N
      </button>
    );
  }
  return (
    <button onClick={onClick} aria-label="TKN Technics — accueil" className="logo-btn"
      style={{ display: "inline-flex", alignItems: "center" }}>
      <img src={dark ? "assets/tkn-logo-dark.png" : "assets/tkn-logo.png"} alt="TKN Technics" style={{ height, width: "auto" }} />
    </button>
  );
}

/* Language switch — FR active, NL/EN visible but inert */
function LangSwitch({ compact }) {
  const [lang, setLang] = useState("FR");
  const langs = ["FR", "NL", "EN"];
  return (
    <div className="langsw" role="group" aria-label="Langue">
      {langs.map((l, i) => (
        <React.Fragment key={l}>
          {i > 0 && <span className="langsw__sep">·</span>}
          <button
            className={`langsw__btn ${lang === l ? "is-active" : ""}`}
            onClick={() => setLang(l)}
            title={l === "FR" ? "Français" : l === "NL" ? "Nederlands (bientôt)" : "English (soon)"}
          >{l}</button>
        </React.Fragment>
      ))}
    </div>
  );
}

/* Pexels CDN helper (royalty-free, hotlinkable). Easy to swap later. */
const PEXELS = (id, w = 1600) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/* Dark technical image slot — loads a real photo, falls back to a styled
   concrete/grain block if it fails. Corner tag marks it as replaceable. */
function Ph({ label = "Photo", src, position = "center", h, ratio, className = "", style, children }) {
  const [failed, setFailed] = useState(false);
  const showImg = src && !failed;
  const s = { ...style };
  if (h) s.height = h;
  if (ratio) s.aspectRatio = ratio;
  return (
    <div className={`ph ${showImg ? "ph--photo" : ""} ${className}`} style={s}>
      {showImg && (
        <img className="ph__img" src={src} alt={label} loading="lazy"
          style={{ objectPosition: position }} onError={() => setFailed(true)} />
      )}
      {showImg && <span className="ph__scrim" />}
      {!showImg && <span className="ph__tag"><Ico name="camera" size={13} sw={1.6} />{label}</span>}
      {children}
    </div>
  );
}

function Badge({ icon, dot, children }) {
  return (
    <span className={`badge ${dot ? "badge--dot" : ""}`}>
      {icon && <Ico name={icon} size={16} sw={1.6} />}
      {children}
    </span>
  );
}

function Button({ kind = "primary", lg, block, children, arrow, onClick, type, className = "" }) {
  return (
    <button type={type} onClick={onClick}
      className={`btn btn--${kind} ${lg ? "btn--lg" : ""} ${block ? "btn--block" : ""} ${className}`}>
      {children}
      {arrow && <span className="arr"><Ico name="arrow" size={17} sw={2} /></span>}
    </button>
  );
}

function LinkArrow({ children, onClick }) {
  return (
    <button className="link-arrow" onClick={onClick}>
      {children}<span className="arr"><Ico name="arrow" size={16} sw={2} /></span>
    </button>
  );
}

Object.assign(window, { useInView, Reveal, RuleDraw, CountUp, Logo, LangSwitch, Ph, Badge, Button, LinkArrow, PEXELS });
