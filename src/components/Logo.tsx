import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 26, ...props }) => {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} {...props}>
      <defs>
        <clipPath id="circleClipBrand">
          <circle cx="20" cy="20" r="18" />
        </clipPath>
        <radialGradient id="smokeBlueBrand" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#3b82ff" stopOpacity="1" />
          <stop offset="60%" stopColor="#3b82ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="smokeCyanBrand" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="smokeVioletBrand" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
          <stop offset="60%" stopColor="#a855f7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g clipPath="url(#circleClipBrand)">
        <rect width="40" height="40" fill="#0A0A0F" />
        <circle cx="14" cy="16" r="10" fill="url(#smokeBlueBrand)">
          <animate attributeName="cx" values="14;26;18;14" dur="7s" repeatCount="indefinite" />
          <animate attributeName="cy" values="16;24;14;16" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle cx="26" cy="24" r="9" fill="url(#smokeVioletBrand)">
          <animate attributeName="cx" values="26;14;22;26" dur="9s" repeatCount="indefinite" />
          <animate attributeName="cy" values="24;18;26;24" dur="9s" repeatCount="indefinite" />
        </circle>
        <circle cx="20" cy="20" r="8" fill="url(#smokeCyanBrand)">
          <animate attributeName="cx" values="20;14;26;20" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="20;26;16;20" dur="8s" repeatCount="indefinite" />
        </circle>
      </g>
      <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(238,242,247,0.25)" strokeWidth="1" />
    </svg>
  );
};
