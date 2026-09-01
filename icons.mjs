// Minimal çizgi ikon seti — 24x24, stroke=currentColor, harici bağımlılık yok.
// Lucide'dan ilham alınmış ama elle yazılmış, basitleştirilmiş yollar.

const wrap = (inner) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const icons = {
  search: wrap('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>'),
  layers: wrap('<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 5 9-5"/>'),
  clock: wrap('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  chart: wrap('<path d="M4 20V10"/><path d="M11 20V4"/><path d="M18 20v-7"/>'),
  alert: wrap('<path d="M12 4l9 16H3z"/><path d="M12 10v4"/><path d="M12 17.5v.1"/>'),
  chainbroken: wrap('<path d="M9 15l6-6"/><path d="M7 9.5L5.5 8A3.5 3.5 0 019.9 3l1.6 1.6"/><path d="M17 14.5l1.5 1.5a3.5 3.5 0 01-4.4 5l-1.6-1.6"/>'),
  filetext: wrap('<path d="M6 2.5h8l4 4V21a1 1 0 01-1 1H6a1 1 0 01-1-1V3.5a1 1 0 011-1z"/><path d="M14 2.5V7h4.5"/><path d="M8 13h8"/><path d="M8 17h8"/>'),
  alertcircle: wrap('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V13"/><path d="M12 16.5v.1"/>'),
  bot: wrap('<rect x="4" y="9" width="16" height="10" rx="2.5"/><path d="M12 5.5V9"/><circle cx="12" cy="4" r="1.4"/><path d="M8.5 14v1.2"/><path d="M15.5 14v1.2"/><path d="M2.5 12.5v3"/><path d="M21.5 12.5v3"/>'),
  lock: wrap('<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 018 0v3"/>'),
  scale: wrap('<path d="M12 3v18"/><path d="M7 4.5h10"/><path d="M4 8l3-3.5L10 8"/><path d="M14 8l3-3.5L20 8"/><path d="M4 8a3 3 0 006 0"/><path d="M14 8a3 3 0 006 0"/><path d="M8.5 21h7"/>'),
  checkcircle: wrap('<circle cx="12" cy="12" r="8.5"/><path d="M8.2 12.3l2.5 2.5 5-5.5"/>'),
  building: wrap('<rect x="5" y="3.5" width="14" height="17" rx="1"/><path d="M9 7.5h.01"/><path d="M15 7.5h.01"/><path d="M9 11.5h.01"/><path d="M15 11.5h.01"/><path d="M9 15.5h.01"/><path d="M15 15.5h.01"/><path d="M10 20.5v-4h4v4"/>'),
  briefcase: wrap('<rect x="3" y="7.5" width="18" height="12" rx="1.8"/><path d="M8.5 7.5V5.8a1.8 1.8 0 011.8-1.8h3.4a1.8 1.8 0 011.8 1.8V7.5"/><path d="M3 12.5h18"/>'),
  users: wrap('<circle cx="9" cy="8" r="3.2"/><path d="M2.8 19.5a6.2 6.2 0 0112.4 0"/><path d="M16 5.2a3.2 3.2 0 010 6"/><path d="M16.5 13.5a6.2 6.2 0 015 6"/>'),
  truck: wrap('<rect x="2.5" y="7" width="12" height="9.5" rx="1"/><path d="M14.5 10h3.6l3.4 3.4v3.1h-7z"/><circle cx="7" cy="19" r="1.8"/><circle cx="17.5" cy="19" r="1.8"/>'),
  gavel: wrap('<path d="M13.5 6.5l4 4"/><path d="M9 11l4.5-4.5 4 4L13 15z"/><path d="M6 14l3.5-3.5"/><path d="M3 21l5-5"/><path d="M14.5 20.5h6"/>'),
  arrow: wrap('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>'),
  menu: wrap('<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>'),
  close: wrap('<path d="M6 6l12 12"/><path d="M18 6L6 18"/>'),
  mail: wrap('<rect x="3" y="5.5" width="18" height="13" rx="1.8"/><path d="M3.5 6.5L12 13l8.5-6.5"/>'),
  chevronDown: wrap('<path d="M6 9l6 6 6-6"/>'),
};

export const iconSprite = () =>
  Object.entries(icons)
    .map(([name, svg]) => `<template id="icon-${name}">${svg}</template>`)
    .join('');
