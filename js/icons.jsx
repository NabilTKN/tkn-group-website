/* TKN — thin line icons (stroke, currentColor). Exported to window. */
const Ico = ({ name, size = 22, sw = 1.5, style }) => {
  const p = ICONS[name] || ICONS.dot;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={style} aria-hidden="true">
      {p}
    </svg>
  );
};

const ICONS = {
  dot: <circle cx="12" cy="12" r="2" />,
  arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
  arrowDown: <><path d="M12 5v14" /><path d="M6 13l6 6 6-6" /></>,
  arrowUpRight: <><path d="M7 17L17 7" /><path d="M8 7h9v9" /></>,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  chevronDown: <path d="M6 9l6 6 6-6" />,

  /* services */
  factory: <><path d="M3 21h18" /><path d="M4 21V10l5 3.5V10l5 3.5V6l6 4v11" /><path d="M8 21v-4" /><path d="M13 21v-4" /></>,
  wrench: <path d="M14.5 6.5a3.5 3.5 0 00-4.6 4.3L4 16.7 7.3 20l5.9-5.9a3.5 3.5 0 004.3-4.6l-2.2 2.2-2-2 2.2-2.2z" />,
  flame: <path d="M12 3c1 3-2 4-2 7a2 2 0 004 0c0-1.2-.5-1.8-.5-1.8 1.8 1 3 3 3 5.3a4.5 4.5 0 01-9 0C7.5 8 12 7 12 3z" />,
  leaf: <><path d="M5 19C4 12 9 5 19 5c0 9-6 13-12 13a5 5 0 01-2-.5z" /><path d="M5 19c2-5 5-8 9-9.5" /></>,

  /* capacités */
  shield: <><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 11.5l2 2 4-4" /></>,
  forklift: <><path d="M3 17a2 2 0 104 0 2 2 0 10-4 0z" /><path d="M14 17a2 2 0 104 0 2 2 0 10-4 0z" /><path d="M5 15V6h5l3 4h3v5" /><path d="M19 15V5M19 5h2" /></>,
  lift: <><path d="M6 21V8l6-4 6 4v13" /><path d="M6 13h12M6 17h12" /><path d="M12 4v17" /></>,
  helmet: <><path d="M3 16a9 9 0 0118 0" /><path d="M2 16h20v2H2z" /><path d="M12 7v-3M9 7l-1-2.5M15 7l1-2.5" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 8v4.5l3 2" /></>,

  /* méthode */
  clipboard: <><path d="M9 4h6v3H9z" /><path d="M9 5.5H6v15h12v-15h-3" /><path d="M9 11h6M9 15h4" /></>,
  team: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20a5.5 5.5 0 0111 0" /><path d="M16 6.2a3 3 0 010 5.6" /><path d="M17 14.5a5.5 5.5 0 013.5 5.5" /></>,
  play: <><circle cx="12" cy="12" r="8.5" /><path d="M10 8.5l5 3.5-5 3.5z" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.7" /></>,

  /* secteurs */
  box: <><path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z" /><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" /></>,
  beaker: <><path d="M9 3v6L4.5 19a1.5 1.5 0 001.4 2h12.2a1.5 1.5 0 001.4-2L15 9V3" /><path d="M8 3h8M7 14h10" /></>,
  recycle: <><path d="M7 17l-2.5-1 1-2.5" /><path d="M4.5 16l3-5 3 1.5" /><path d="M16 6l1 2.5L19.5 8" /><path d="M13 4l3 5-2.5 1.5" /><path d="M11 20h4l-1.5-2.5" /><path d="M15 20l-3-5-2.5 1.5" /></>,
  anchor: <><circle cx="12" cy="5" r="2" /><path d="M12 7v13" /><path d="M5 12a7 7 0 0014 0" /><path d="M5 12H3M21 12h-2" /></>,
  truck: <><path d="M3 16V6h11v10" /><path d="M14 9h4l3 3v4h-7" /><circle cx="7" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" /></>,
  building: <><path d="M5 21V4h9v17" /><path d="M14 9h5v12" /><path d="M8 8h3M8 12h3M8 16h3M17 13h0M17 17h0" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></>,
  file: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9 13h6M9 17h6" /></>,

  /* contact */
  pin: <><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="M5 4h3l1.5 5-2 1.5a11 11 0 005 5l1.5-2 5 1.5v3a2 2 0 01-2.2 2A16 16 0 013 6.2 2 2 0 015 4z" />,
  mail: <><path d="M3 6h18v12H3z" /><path d="M3 7l9 6 9-6" /></>,
  camera: <><path d="M3 8h3.5L8 6h8l1.5 2H21v11H3z" /><circle cx="12" cy="13" r="3.2" /></>,
  upload: <><path d="M12 16V5" /><path d="M8 9l4-4 4 4" /><path d="M5 19h14" /></>,
  globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.5 2.5 14 0 17M12 3.5c-2.5 2.5-2.5 14 0 17" /></>,
  spark: <path d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8z" />,
};

window.Ico = Ico;
