import * as React from "react"
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function DComponent(props) {
  return (
    <Svg
      width={65}
      height={80}
      viewBox="0 0 65 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={12.667} width={40} height={40} rx={20} fill="#1C439A" />
      <G clipPath="url(#clip0_2618_10443)">
        <Path
          d="M30.566 12.531h.236l-.133-.195-1.834-2.693s0 0 0 0a.957.957 0 01-.14-.728.976.976 0 01.423-.615 1.02 1.02 0 01.747-.147c.259.05.487.196.635.408 0 0 0 0 0 0l2.064 3.031.103.152.103-.152 2.064-3.031h0l.001-.001a.987.987 0 01.637-.425 1.024 1.024 0 01.758.144.988.988 0 01.426.627.954.954 0 01-.156.735v.001l-1.835 2.694-.133.195h6.76c.863 0 1.69.336 2.299.932.61.597.951 1.405.951 2.248v12.974c0 .843-.342 1.651-.951 2.248a3.287 3.287 0 01-2.299.932h-17.25c-.863 0-1.69-.336-2.299-.932a3.145 3.145 0 01-.951-2.248V15.711c0-.843.342-1.651.951-2.248a3.287 3.287 0 012.299-.932h6.523zm2.086 1.953v0H24.042c-.33 0-.648.129-.883.359-.235.23-.367.542-.367.868v12.974c0 .326.132.638.367.868.235.23.552.359.883.359h17.25c.33 0 .648-.129.883-.359.235-.23.367-.542.367-.868V15.711c0-.326-.132-.639-.367-.868a1.262 1.262 0 00-.883-.359h-8.64z"
          fill="#fff"
          stroke="#fff"
          strokeWidth={0.25}
        />
        <Circle cx={32.634} cy={18.1623} r={1.16228} fill="white" />
        <Path
          d="M32.579 21.671L31 20.728l1.645-.833 1.622.833v5.33L32.58 27v-5.329z"
          fill="#fff"
        />
      </G>
      <Path
        d="M24.655 63h-1.781l.012-.92h1.77c.608 0 1.116-.127 1.523-.38a2.38 2.38 0 00.914-1.079c.207-.465.31-1.008.31-1.629v-.521c0-.489-.058-.922-.176-1.301a2.632 2.632 0 00-.515-.967 2.179 2.179 0 00-.832-.603 2.86 2.86 0 00-1.12-.206H22.84v-.925h1.922c.558 0 1.068.093 1.529.281.46.184.857.451 1.19.803.335.347.593.77.773 1.265.18.492.27 1.047.27 1.664v.51c0 .617-.09 1.174-.27 1.67a3.402 3.402 0 01-1.998 2.063 4.39 4.39 0 01-1.6.275zm-1.178-8.531V63h-1.13v-8.531h1.13zm9.325 0V63h-1.113v-8.531h1.113zm2.742 0v.925h-6.592v-.925h6.592zm6.43 3.668v.92h-4.617v-.92h4.617zm-4.442-3.668V63h-1.13v-8.531h1.13zm5.426 0V63h-1.125v-8.531h1.125z"
        fill="#000"
      />
      <Defs>
        <ClipPath id="clip0_2618_10443">
          <Path fill="#fff" transform="translate(20.667 8)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DComponent