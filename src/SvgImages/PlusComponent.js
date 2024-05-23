import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function PlusComponent(props) {
  return (
    <Svg
      width={41}
      height={40}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} width={40} height={40} rx={20} fill="#fff" />
      <Path
        d="M20.5 12v16m8-8h-16"
        stroke="#020892"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default PlusComponent
