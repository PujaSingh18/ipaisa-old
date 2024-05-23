import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackArrowComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 26l6-6m0 0l-6-6m6 6H13"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default BackArrowComponent
