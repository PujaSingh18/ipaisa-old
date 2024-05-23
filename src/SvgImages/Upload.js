import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Upload(props) {
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
        d="M3 15.83h15v1.667H3v-1.666zm8.333-10.976v9.31H9.667v-9.31l-5.06 5.06L3.43 8.736 10.5 1.664l7.07 7.07-1.178 1.18-5.059-5.058v-.002z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Upload
