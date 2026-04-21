import { type SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const icon = (children: React.ReactNode) =>
  function Icon({ width = 16, height = 16, ...props }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {children}
      </svg>
    );
  };

export const MobileIcon = icon(
  <>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M11 18h2" />
  </>,
);

export const WebIcon = icon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </>,
);

export const CloudIcon = icon(
  <>
    <path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 6 19h11Z" />
    <path d="M12 13v5M10 15l2 2 2-2" />
  </>,
);

export const CodeIcon = icon(
  <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />,
);

export const ServerIcon = icon(
  <>
    <rect x="3" y="4" width="18" height="7" rx="1.5" />
    <rect x="3" y="13" width="18" height="7" rx="1.5" />
    <circle cx="7" cy="7.5" r="0.6" fill="currentColor" />
    <circle cx="7" cy="16.5" r="0.6" fill="currentColor" />
  </>,
);

export const CompassIcon = icon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-2 6-6 2 2-6 6-2Z" />
  </>,
);

export const ArrowIcon = icon(
  <path d="M5 12h14M13 5l7 7-7 7" />,
);
