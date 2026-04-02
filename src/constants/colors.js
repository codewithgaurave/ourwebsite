/**
 * Optivexa Color System
 * Dark purple/navy based with purple accent colors and subtle gradient overlays.
 */

// ─── Backgrounds ───────────────────────────────────────────────
const bg = {
  primary:    '#0A0510',   // Body background
  secondary:  '#0A0C1F',   // Section backgrounds
  tertiary:   '#0b0612',   // Navbar, dropdowns, overlays
  hero:       '#110c18',   // Hero section
  card:       '#141627',   // Card outer background
  cardInner:  '#1a1c2e',   // Card inner background
  overlay:    '#0a051080', // Semi-transparent overlay
};

// ─── Scrollbar ─────────────────────────────────────────────────
const scrollbar = {
  track:       '#0d0b14',
  thumb:       '#2a1f3d',
  thumbHover:  '#3d2b5e',
};

// ─── Accent Colors ─────────────────────────────────────────────
const accent = {
  purple:       '#9333ea',   // Primary accent, selection
  purpleLight:  '#a855f7',   // Highlights, glows
  purpleDark:   '#6B3A5B',   // Tags, muted buttons
  purpleMuted:  '#4B2A40',   // Muted tag variant
  purpleBtn:    '#6B3054',   // CTA button (dark)
  purpleBtnHov: '#823b66',   // CTA button hover
  blue:         '#2b5ba3',   // Navbar button gradient
  blueMuted:    '#324054',   // Blue tag variant
  violetMuted:  '#403B52',   // Violet tag variant
  purpleCard:   '#9b4dca',   // Dot accent in cards
};

// ─── Text ──────────────────────────────────────────────────────
const text = {
  primary:   '#ffffff',
  muted:     'rgba(255,255,255,0.35)',
  subtle:    'rgba(255,255,255,0.1)',
};

// ─── Borders ───────────────────────────────────────────────────
const border = {
  default:  'rgba(255,255,255,0.1)',
  subtle:   'rgba(255,255,255,0.05)',
  purple:   'rgba(168,85,247,0.2)',
  active:   '#a855f7',
};

// ─── Glow / Shadows ───────────────────────────────────────────
const glow = {
  purpleSm:  'rgba(168,85,247,0.15)',
  purpleMd:  'rgba(168,85,247,0.3)',
  purpleLg:  'rgba(168,85,247,0.5)',
  purpleXl:  'rgba(168,85,247,0.7)',
  blue:      'rgba(43,91,163,0.3)',
};

// ─── Gradient Presets (CSS strings) ───────────────────────────
const gradients = {
  // Page section background
  section:     'linear-gradient(to right, #0A0510, #3C3243, #434456, #283645, #1A2533)',
  // Hero radial overlays
  hero: `
    radial-gradient(circle at 20% 20%, rgba(57,37,53,0.9) 0%, transparent 45%),
    radial-gradient(circle at 50% 50%, rgba(78,87,102,0.5) 0%, transparent 60%),
    radial-gradient(circle at 85% 85%, rgba(31,45,58,0.9) 0%, transparent 45%)
  `,
  // CTA buttons
  cta:         'linear-gradient(133deg, #404D5F 0%, #2D2333 100%)',
  ctaBtn:      'linear-gradient(to right, #261221, #2D1B36, #202D45)',
  // Pricing cards
  pricingCard: 'linear-gradient(to bottom right, #1B2737, #404F62, #373250, #4A6284)',
  pricingBg:   'linear-gradient(to right, #281926, #37313F, #3F4A5A, #25303D)',
  // Footer
  footer:      'linear-gradient(to right, #261221, #2A1625, #342C3B, #0A0C1F, #25303B, #0A0C1F)',
  // Testimonial card active
  testimonial: 'linear-gradient(160deg, #2D1B36 0%, #1a1b30 40%, #202D45 70%, #352342 100%)',
  // Dark gradient for about card
  aboutCard:   'linear-gradient(135deg, #1A1F2E 0%, #0A0510 100%)',
  // CTA section bottom
  ctaSection:  'linear-gradient(to bottom right, #1a0b2e, #0a0510)',
  // Purple-blue button
  purpleBlue:  'linear-gradient(to right, #9333ea, #3b82f6)',
  // Navbar button
  navBtn:      'linear-gradient(to left, rgba(43,91,163,0.6), transparent)',
};

// ─── Service Tag Colors ────────────────────────────────────────
const serviceTags = [
  { bg: '#4B2A40' },   // Purple-ish
  { bg: '#324054' },   // Blue-ish
  { bg: '#403B52' },   // Violet-ish
  { bg: '#2A3B4A' },   // Teal-ish
];

// ─── Language Colors (Hero orbiting logos) ─────────────────────
const languages = {
  JS:  { color: '#F7DF1E', textColor: '#000' },
  TS:  { color: '#3178C6', textColor: '#fff' },
  Py:  { color: '#3776AB', textColor: '#FFD43B' },
  Re:  { color: '#61DAFB', textColor: '#000' },
  No:  { color: '#339933', textColor: '#fff' },
  Ja:  { color: '#ED8B00', textColor: '#fff' },
  Go:  { color: '#00ADD8', textColor: '#fff' },
  Rs:  { color: '#DEA584', textColor: '#fff' },
  Cp:  { color: '#00599C', textColor: '#fff' },
  PH:  { color: '#777BB4', textColor: '#fff' },
  Sw:  { color: '#FA7343', textColor: '#fff' },
  Kt:  { color: '#7F52FF', textColor: '#fff' },
};

// ─── Tailwind Arbitrary Value Helpers ─────────────────────────
// Usage: <div className={`${tw.bg('card')} ${tw.text('primary')}`}>
const tw = {
  bg:     (key) => `bg-[${bg[key]}]`,
  text:   (key) => `text-[${text[key]}]`,
  border: (key) => `border-[${border[key]}]`,
};

// ─── Full Export ───────────────────────────────────────────────
const colors = { bg, accent, text, border, glow, gradients, scrollbar, serviceTags, languages, tw };

export { bg, accent, text, border, glow, gradients, scrollbar, serviceTags, languages, tw };
export default colors;
