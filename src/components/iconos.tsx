// Iconos del sitio. Todos usan currentColor, así toman el color del texto.

type Props = { className?: string };

const trazo = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function Flecha({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12m-5-5 5 5-5 5" {...trazo} />
    </svg>
  );
}

export function FlechaIzquierda({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M16 10H4m5-5-5 5 5 5" {...trazo} />
    </svg>
  );
}

export function Trofeo({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8M9 17h6v3H9z" {...trazo} />
    </svg>
  );
}

export function CorazonMano({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" {...trazo} />
      <path d="M8.5 12.5 11 15l4.5-4.5" {...trazo} />
    </svg>
  );
}

export function Birrete({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m2 9 10-5 10 5-10 5L2 9Z M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5 M22 9v5" {...trazo} />
    </svg>
  );
}

export function ManosApoyo({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 15h4l5 3 6-3.5a1.6 1.6 0 0 0-1.6-2.7L13 13.5H9.5 M7 15v-3l3-2h3.5a1.5 1.5 0 0 1 0 3H11" {...trazo} />
      <path d="M15 8.5s-2.5-1.5-2.5-3.3A1.7 1.7 0 0 1 15 4a1.7 1.7 0 0 1 2.5 1.2c0 1.8-2.5 3.3-2.5 3.3Z" {...trazo} />
    </svg>
  );
}

export function Instagram({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function Facebook({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z" fill="currentColor" />
    </svg>
  );
}

export function YouTube({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" fill="currentColor" />
    </svg>
  );
}

export function X({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
