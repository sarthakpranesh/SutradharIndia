import * as React from "react";

const FacebookIcon = ({stroke = "black", width = 24, height = 24}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" >
      <path
        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export default FacebookIcon;
