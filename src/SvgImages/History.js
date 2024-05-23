import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function History(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={16} height={16} rx={8} fill="#fff" />
      <Path
        d="M8 5v3l1.875 1.875"
        stroke="#1F4482"
        strokeWidth={1.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default History
