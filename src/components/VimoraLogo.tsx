import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  showSubtitle?: boolean;
}

export const VimoraLogo: React.FC<LogoProps> = ({
  className = 'h-10',
  variant = 'dark',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';
  const isGold = variant === 'gold';

  const primaryColor = isLight ? '#FAF8F5' : isGold ? '#C5A059' : '#0F2E1E';
  const accentColor = isLight ? '#DFBE7A' : '#C5A059';
  const subtitleColor = isLight ? '#D5CDC0' : '#697B70';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Handcrafted Botanical & Makhana Lotus Seed Crest */}
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer Circular Ring with subtle notches */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke={accentColor}
          strokeWidth="2"
          strokeOpacity="0.85"
        />
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeDasharray="2 3"
          strokeOpacity="0.6"
        />

        {/* Central Crown / Popped Makhana Kernel Silhouette */}
        <path
          d="M50 20C46 29 38 34 38 42C38 52 48 56 50 64C52 56 62 52 62 42C62 34 54 29 50 20Z"
          fill={accentColor}
          fillOpacity="0.25"
        />
        
        {/* Symmetrical Euryale Lotus Petals (Origin Flower) */}
        <path
          d="M50 24C44 33 32 40 32 52C32 63 41 71 50 78C59 71 68 63 68 52C68 40 56 33 50 24Z"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left Botanical Leaf */}
        <path
          d="M32 52C22 51 18 61 24 68C30 75 39 72 45 68"
          stroke={accentColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Right Botanical Leaf */}
        <path
          d="M68 52C78 51 82 61 76 68C70 75 61 72 55 68"
          stroke={accentColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Golden Kernel Pearl Center (Phool Makhana Heart) */}
        <circle cx="50" cy="50" r="6.5" fill={accentColor} />
        <circle cx="48" cy="48" r="2" fill="#FAF8F5" fillOpacity="0.8" />
        
        {/* Base Diamond Anchor */}
        <polygon points="50,82 54,86 50,90 46,86" fill={accentColor} />
      </svg>

      {/* Corporate Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-[0.08em] whitespace-nowrap"
          style={{ color: primaryColor }}
        >
          VIMORA
        </span>
        {showSubtitle && (
          <span
            className="text-[8px] sm:text-[9px] font-sans font-semibold tracking-[0.24em] sm:tracking-[0.32em] uppercase whitespace-nowrap mt-0.5"
            style={{ color: subtitleColor }}
          >
            FOODS PVT. LTD.
          </span>
        )}
      </div>
    </div>
  );
};
