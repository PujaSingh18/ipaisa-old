import * as React from "react"
import Svg, { G, Path, Rect } from "react-native-svg"

function WalletToBank(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={40} height={40} rx={6.66667} fill="#000" />
      <G stroke="#fff" strokeWidth={1.25}>
        <Rect x={11} y={26} width={18} height={4} rx={0.3125} />
        <Path d="M11 13.69c0-.128.08-.244.2-.29l8.687-3.357a.312.312 0 01.226 0L28.8 13.4c.12.047.2.163.2.292v2.296c0 .173-.14.313-.313.313H11.313a.312.312 0 01-.312-.313v-2.296zM12.9 16.875v9.375m7.35-9.375v9.375m7.15-9.375v9.375" />
      </G>
    </Svg>
  )
}

export default WalletToBank
