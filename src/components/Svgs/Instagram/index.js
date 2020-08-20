import * as React from "react"

const InstagramIcon = (props) => {
  return (
    <svg width={30} height={30} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11.37a4 4 0 11-7.914 1.173A4 4 0 0116 11.37zM17.5 6.5h.01"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default InstagramIcon;
