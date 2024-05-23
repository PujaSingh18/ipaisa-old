import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function CardComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={40} height={40} rx={8} fill="#9AE5FD" fillOpacity={0.3} />
      <Path
        d="M12.6 29.335h15.466c1.494 0 2.24 0 2.811-.291.502-.256.91-.664 1.165-1.165.291-.57.291-1.318.291-2.811V14.935c0-1.494 0-2.24-.29-2.811a2.667 2.667 0 00-1.166-1.165c-.57-.291-1.317-.291-2.81-.291H12.6c-1.494 0-2.24 0-2.811.29-.502.256-.91.664-1.165 1.166-.291.57-.291 1.317-.291 2.81v10.134c0 1.493 0 2.24.29 2.81.256.502.664.91 1.166 1.166.57.29 1.317.29 2.81.29z"
        fill="#0F62FE"
        stroke="#0F62FE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.333 16h24"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <Path
        d="M13.666 24h2.667"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CardComponent
