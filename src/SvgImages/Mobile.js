import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function Mobile(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={40} height={40} rx={6} fill="#9AE5FD" fillOpacity={0.3} />
      <Path
        d="M16.889 30h6.222c1.244 0 1.867 0 2.342-.242.418-.213.758-.553.971-.971.242-.476.242-1.098.242-2.343V13.556c0-1.245 0-1.867-.242-2.343a2.222 2.222 0 00-.971-.97C24.978 10 24.355 10 23.111 10h-6.222c-1.245 0-1.867 0-2.343.242a2.222 2.222 0 00-.97.971c-.243.476-.243 1.098-.243 2.343v12.888c0 1.245 0 1.867.242 2.343.213.418.553.758.971.97.476.243 1.098.243 2.343.243z"
        fill="#0F62FE"
        stroke="#0F62FE"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 28h.013"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Mobile
