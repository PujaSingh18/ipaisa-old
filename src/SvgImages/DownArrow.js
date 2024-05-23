import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArrow(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.5 3.335a.833.833 0 00-.834.833v9.308L5.6 9.41a.834.834 0 00-1.18 1.179l5.373 5.372a1 1 0 001.414 0l5.372-5.372a.831.831 0 00-1.175-1.176l-4.071 4.063V4.168a.833.833 0 00-.833-.833z"
        fill="#0F62FE"
      />
    </Svg>
  )
}

export default DownArrow
