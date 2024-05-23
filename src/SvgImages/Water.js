import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function Water(props) {
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
        d="M13.368 21.577C13.368 15.347 20 10.5 20 10.5s6.632 4.846 6.632 11.077a7.081 7.081 0 01-1.943 4.896C23.446 27.77 21.76 28.5 20 28.5s-3.446-.73-4.69-2.027a7.08 7.08 0 01-1.942-4.896z"
        fill="#0F62FE"
        stroke="#0F62FE"
        strokeWidth={1.8948}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.21 21.285c0 1.16.45 2.272 1.249 3.092.454.466 1 .816 1.593 1.03"
        stroke="#fff"
        strokeWidth={1.8948}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Water
