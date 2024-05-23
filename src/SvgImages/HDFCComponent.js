import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function HDFCComponent(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={48} height={48} rx={24} fill="#004C8F" />
      <Path d="M12.497 12.496h24v24h-24v-24z" fill="#ED232A" />
      <Path d="M16.7 16.7H32.3v15.598H16.7V16.699z" fill="#fff" />
      <Path d="M23.296 12.496h2.402v24h-2.402v-24z" fill="#fff" />
      <Path d="M12.497 23.299h24v2.397h-24V23.3z" fill="#fff" />
      <Path d="M20.898 20.896h7.203V28.1h-7.203v-7.203z" fill="#004C8F" />
    </Svg>
  )
}

export default HDFCComponent
