const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ArrowRight = ({ className = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth="2">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const Palette = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} {...base} strokeWidth="1.6">
    <path d="M24 5C13 5 5 13 5 23s8 19 18 19c3 0 4-2 4-4 0-1.2-.6-2-1.2-2.8-.6-.8-1-1.6-1-2.6 0-2.2 1.8-3.6 4-3.6h4.4C38.5 29 43 24.6 43 19 43 11 34.5 5 24 5Z" />
    <circle cx="14" cy="22" r="3" />
    <circle cx="19" cy="13" r="3" />
    <circle cx="29" cy="12" r="3" />
    <circle cx="16" cy="32" r="3" />
    <path d="m46 4-14 15M30 21l-2 4 4-2" />
  </svg>
)

export const Diamond = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} {...base} strokeWidth="1.6">
    <path d="M13 8h22l9 11-20 22L4 19z" />
    <path d="M4 19h40M18 8l-5 11 11 22 11-22-5-11M13 19l5-11M24 8l-6 11h12z" />
  </svg>
)

export const Handshake = ({ className }) => (
  <svg viewBox="0 0 56 48" className={className} {...base} strokeWidth="1.6">
    <path d="M3 14l8-5 7 4M53 14l-8-5-8 4" />
    <path d="M3 14l3 18 5 2M53 14l-3 18-5 2" />
    <path d="M37 13H27l-8 7c-1.5 1.4-1 3.6 1 4 2 .5 4-.6 6-2l4-3 12 11c1.5 1.5 1 3.6-.6 4.2" />
    <path d="M41.4 34.2c-1 1.5-3 1.7-4.4.5l-3-2.7M37 34.7c-.8 1.6-2.8 2-4.2.8l-3-2.6M32.8 35.5c-.8 1.4-2.6 1.8-3.8.8l-2.4-2M18 13l-3 3M11 34l3 2.5c1.3 1 3 .8 4-.4l.3-.4c1-1.3.8-3-.4-4l-2.4-2c-1.2-1-3-.8-4 .4l-.3.4c-1 1.3-.8 3 .4 4Z" />
    <path d="m17 30 2-2.4c1-1.2 2.8-1.4 4-.4l2 1.7c1.2 1 1.4 2.8.4 4l-2 2.4c-1 1.2-2.8 1.4-4 .4" />
  </svg>
)

export const Phone = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
  </svg>
)

export const Mail = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth="1.6">
    <rect x="2.5" y="5" width="19" height="14" rx="1" />
    <path d="m3 6 9 7 9-7M3 18l7-6M21 18l-7-6" />
  </svg>
)

export const MapPin = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  </svg>
)

export const Instagram = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
  </svg>
)
