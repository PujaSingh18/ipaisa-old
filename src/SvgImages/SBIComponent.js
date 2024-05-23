import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function SBIComponent(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={48} height={48} rx={24} fill="#271E79" />
      <G clipPath="url(#clip0_1971_7671)" fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M19.881 23.466a4.128 4.128 0 10-4.404 4.128v-3.197a.976.976 0 11.534 0v3.198a4.138 4.138 0 003.87-4.129z"
          fill="#00B6F0"
        />
        <Path
          d="M25.73 21.744l.75-1.5c-1.42-1.33-4.12-1.27-5 .632-.234.507-.225 1.069-.002 1.66.108.284.303.64.611.894.158.13.763.43 1.253.653.459.207 1.09.357 1.379.766.33.468.127 1.046-.641 1.151-.43.059-1.07-.12-2.025-.89l-1.01 1.32c3.211 2.8 6.173.35 5.48-1.83-.177-.552-.54-.978-.99-1.302-.695-.503-1.42-.639-1.905-.85-.908-.396-.78-1.51.479-1.442.797.043 1.053.272 1.621.74v-.002zM27.357 19.334h3.112c1.047 0 2.274.909 2.274 1.995 0 .25.017.438 0 .73-.034.575-.566 1.22-.908 1.22.533 0 1.065.764 1.196 1.292.317 1.284-.357 3.112-2.562 3.112h-3.112v-8.349zm1.67 1.524h1.22c.46 0 .835.39.835.866v.124c0 .407-.322.741-.715.741h-.503v1.545h.588c.532 0 .967.452.967 1.003 0 .552-.435 1.003-.967 1.003h-1.426v-5.282zM33.863 19.334h1.76v8.35h-1.76v-8.35z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.0045219}
          strokeMiterlimit={22.93}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1971_7671">
          <Path
            fill="#fff"
            transform="translate(11.625 19.332)"
            d="M0 0H24V8.35467H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SBIComponent