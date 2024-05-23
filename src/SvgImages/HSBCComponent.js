import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function HSBCComponent(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={47} height={47} rx={23.5} stroke="#EEE" />
      <G
        clipPath="url(#clip0_1971_7689)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#DA000A"
      >
        <Path d="M16.456 16v16.163l-8.123-8.08L16.456 16z" />
        <Path d="M16.457 16H32.583l-8.093 8.12-8.063-8.09.03-.03z" />
        <Path d="M32.56 32.163V16l8.123 8.083-8.123 8.08z" />
        <Path d="M32.56 32.161H16.432l8.093-8.12 8.063 8.09-.03.03z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1971_7689">
          <Path
            fill="#fff"
            transform="translate(8.333 16)"
            d="M0 0H32.3333V16H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HSBCComponent
