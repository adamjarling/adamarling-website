/**
 * Band pages — one entry per band, rendered at /bands/<slug> and /de/bands/<slug>.
 *
 * HOW TO EDIT
 *  - note ....... your personal thoughts on playing with the band. Leave `en` as an
 *                empty string and the page shows a dashed placeholder instead.
 *                Add `de` only if you want a German version; otherwise the English
 *                text is shown on the German page too.
 *  - photos ..... drop files in `public/images/` and reference them as `/images/<file>`.
 *                Any entry with no `src` renders as a dashed photo placeholder.
 *  - links ...... any entry with no `href` renders as a greyed-out "to add" chip,
 *                so unfinished links are visible but never broken.
 *  - metaKey /
 *    blurbKey ... dotted paths into src/i18n/ui.ts, reused so band copy lives in
 *                one place and picks up the existing German translations.
 */

export interface BandLink {
  label: string;
  /** Omit to render a placeholder chip you can fill in later. */
  href?: string;
}

export interface BandPhoto {
  /** Omit to render a dashed placeholder tile. */
  src?: string;
  alt: string;
  caption?: string;
  /** `wide` spans two grid columns. */
  span?: 'wide';
}

export interface Band {
  slug: string;
  name: string;
  /** Dotted key into ui.ts for the short meta line (era / genre). */
  metaKey: string;
  /** Dotted key into ui.ts for the factual description. */
  blurbKey: string;
  /** Your own words. Empty string renders a placeholder. */
  note: { en: string; de?: string };
  links: BandLink[];
  photos: BandPhoto[];
}

export const bands: Band[] = [
  {
    slug: 'the-drags',
    name: 'THE DRAGS',
    metaKey: 'drags.genre',
    blurbKey: 'drags.description',
    note: { en: '' },
    links: [
      { label: 'Website', href: 'https://thedragsband.com' },
      { label: 'Bandcamp', href: 'https://thedragsband.bandcamp.com' },
      { label: 'Spotify' },
      { label: 'Instagram' },
    ],
    photos: [
      { src: '/images/drags-live-singer.jpg', alt: 'The Drags vocalist on stage' },
      { src: '/images/drags-live-guitarist.jpg', alt: 'The Drags guitarist on stage' },
      { src: '/images/drags-live-carina.jpg', alt: 'The Drags performing live at Café Carina, Vienna', span: 'wide' },
      { src: '/images/drags-backstage-setlist.jpg', alt: 'The Drags backstage with the night’s setlist' },
      { src: '/images/drags-carina-flyer-art.jpg', alt: 'Hand-painted gig poster art for The Drags at Café Carina, Vienna', caption: 'Poster art in progress' },
      { src: '/images/drags-carina-promo-graphic.jpg', alt: 'Instagram promo graphic for The Drags at Café Carina, Vienna', caption: 'Show promo graphic' },
    ],
  },
  {
    slug: 'deloreans',
    name: 'DELOREANS',
    metaKey: 'deloreans.genre',
    blurbKey: 'deloreans.description',
    note: { en: '' },
    links: [
      { label: 'Website', href: 'https://deloreans.at' },
      { label: 'Spotify' },
      { label: 'Instagram' },
    ],
    photos: [
      { src: '/images/deloreans-graffiti.jpg', alt: 'DeLoreans', span: 'wide' },
      { src: '/images/deloreans-live-stage.jpg', alt: 'DeLoreans performing live', span: 'wide' },
      { src: '/images/deloreans-lake-portrait.jpg', alt: 'DeLoreans members by the lake at sunset' },
      { src: '/images/deloreans-acoustic-solo.jpg', alt: 'DeLoreans acoustic performance' },
      { src: '/images/deloreans-carina-acoustic.jpg', alt: 'DeLoreans acoustic set at Café Carina, Vienna' },
      { src: '/images/deloreans-zoltan-adam-bar.jpg', alt: 'Zoltan and Adam at the bar, Café Carina' },
    ],
  },
  {
    slug: 'the-midnight-calls',
    name: 'THE MIDNIGHT CALLS',
    metaKey: 'midnight.genre',
    blurbKey: 'midnight.description',
    note: { en: '' },
    links: [
      { label: 'Website' },
      { label: 'Spotify' },
      { label: 'Bandcamp' },
    ],
    photos: [
      { src: '/images/midnight-calls-banner.jpg', alt: 'The Midnight Calls performing live', span: 'wide' },
      { src: '/images/midnight-calls-live-vocals.jpg', alt: 'Adam Arling on vocals with The Midnight Calls' },
      { src: '/images/midnight-calls-crowd-view.jpg', alt: 'The Midnight Calls playing to the crowd in Madrid' },
      { src: '/images/midnight-calls-crowd.jpg', alt: 'The Midnight Calls with fans at Café Central, Madrid' },
      { src: '/images/midnight-calls-live-leanback.jpg', alt: 'The Midnight Calls guitarist on stage in Spain' },
      { src: '/images/midnight-calls-band-2026.jpg', alt: 'The Midnight Calls band portrait, 2026', span: 'wide' },
      { src: '/images/midnight-calls-crowd-selfie.jpg', alt: 'The Midnight Calls with the crowd after a show', span: 'wide' },
      { src: '/images/midnight-calls-poster-art.jpg', alt: 'AI-generated poster art for The Midnight Calls', caption: 'AI-generated poster art' },
    ],
  },
  {
    slug: 'warrior-soul',
    name: 'WARRIOR SOUL',
    metaKey: 'warriorSoul.genre',
    blurbKey: 'warriorSoul.description',
    note: { en: '' },
    links: [
      { label: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/Warrior_Soul' },
      { label: 'Website' },
      { label: 'Spotify' },
    ],
    photos: [
      { src: '/images/warrior-soul-singer-guitar.jpg', alt: 'Warrior Soul performing live', span: 'wide' },
      { src: '/images/warrior-soul-telecaster.jpg', alt: 'Adam Arling on guitar with Warrior Soul' },
      { src: '/images/warrior-soul-blue.jpg', alt: 'Adam Arling live with Warrior Soul' },
      { src: '/images/warrior-soul-headbang.jpg', alt: 'Adam Arling on stage with Warrior Soul' },
      { src: '/images/warrior-soul-live.jpg', alt: 'Warrior Soul live' },
      { src: '/images/warrior-soul-festival.jpg', alt: 'Warrior Soul with the festival crowd', span: 'wide' },
      { src: '/images/warrior-soul-marshall.jpg', alt: 'Adam Arling on guitar with Warrior Soul in front of a Marshall stack' },
      { src: '/images/warrior-soul-red.jpg', alt: 'Warrior Soul live under red stage lights' },
      { src: '/images/warrior-soul-live-collision.jpg', alt: 'Warrior Soul vocalist and guitarist on stage together', span: 'wide' },
      { src: '/images/warrior-soul-spain-2025.jpg', alt: 'Warrior Soul backstage in Spain, 2025' },
    ],
  },
  {
    slug: 'the-last-vegas',
    name: 'THE LAST VEGAS',
    metaKey: 'legacy.lastVegas.era',
    blurbKey: 'legacy.lastVegas.description',
    note: { en: '' },
    links: [
      { label: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/The_Last_Vegas' },
      { label: 'Spotify', href: 'https://open.spotify.com/artist/7fXDfYeQzpPak5bAizQApC' },
      { label: 'Website' },
    ],
    photos: [
      { src: '/images/last-vegas.jpg', alt: 'The Last Vegas', span: 'wide' },
      { src: '/images/last-vegas-arena.jpg', alt: 'The Last Vegas backstage at the arena' },
      { src: '/images/backstage-uk.jpg', alt: 'The Last Vegas backstage in the UK' },
      { src: '/images/last-vegas-live-banner.jpg', alt: 'The Last Vegas performing live', span: 'wide' },
      { src: '/images/last-vegas-live-bw.jpg', alt: 'The Last Vegas on stage' },
      { src: '/images/last-vegas-acdc-sign.jpg', alt: 'Dressing room sign: AC/DC and The Last Vegas' },
      { src: '/images/last-vegas-promo-hills-2016.jpg', alt: 'The Last Vegas promotional photo in the Hollywood Hills, 2016', span: 'wide' },
      { src: '/images/last-vegas-backstage-toast.jpg', alt: 'The Last Vegas backstage with drinks raised' },
      { src: '/images/last-vegas-live-early.jpg', alt: 'The Last Vegas performing live' },
    ],
  },
  {
    slug: 'urge-overkill',
    name: 'URGE OVERKILL',
    metaKey: 'legacy.urgeOverkill.era',
    blurbKey: 'legacy.urgeOverkill.description',
    note: { en: '' },
    links: [
      { label: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/Urge_Overkill' },
      { label: 'Website', href: 'https://urgeoverkill.com' },
      { label: 'Spotify' },
    ],
    photos: [
      { src: '/images/urge-overkill.jpg', alt: 'Urge Overkill', span: 'wide' },
      { src: '/images/urge-overkill-bigscreen.jpg', alt: 'Adam Arling performing with Urge Overkill, shown on the venue jumbotron' },
      { alt: 'Urge Overkill backstage' },
    ],
  },
  {
    slug: 'the-cynics',
    name: 'THE CYNICS',
    metaKey: 'legacy.cynics.era',
    blurbKey: 'legacy.cynics.description',
    note: { en: '' },
    links: [
      { label: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/The_Cynics' },
      { label: 'Website' },
      { label: 'Spotify' },
      { label: 'Bandcamp' },
    ],
    photos: [
      { src: '/images/cynics-live-crowd.jpg', alt: 'The Cynics performing live, with fans reaching toward the stage', span: 'wide' },
      { src: '/images/cynics-poster-spain-tour.jpg', alt: 'Gig poster for The Cynics 2006 Spain tour dates', caption: '2006 Spain tour poster' },
      { src: '/images/cynics-poster-madrid.jpg', alt: 'Gig poster for The Cynics in Madrid', caption: 'Madrid show poster' },
    ],
  },
];

export function getBand(slug: string): Band | undefined {
  return bands.find((b) => b.slug === slug);
}

/** Path to a band page in the given locale. */
export function bandHref(slug: string, lang: 'en' | 'de'): string {
  return lang === 'de' ? `/de/bands/${slug}` : `/bands/${slug}`;
}
