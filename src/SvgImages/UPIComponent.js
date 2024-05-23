import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function UPIComponent(props) {
  return (
    <Svg
      width={65}
      height={80}
      viewBox="0 0 65 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={8.33301} width={48} height={48} rx={24} fill="#1C439A" />
      <Path d="M27.584 36l6.804-24L40.7 23.964 27.584 36z" fill="#028C3C" />
      <Path d="M23.3 36l6.804-24 6.312 11.964L23.3 36z" fill="#FE7A09" />
      <Path
        d="M29.302 62.469h1.125v5.771c0 .64-.143 1.174-.428 1.6a2.67 2.67 0 01-1.137.96c-.469.212-.978.317-1.53.317a3.785 3.785 0 01-1.57-.316 2.57 2.57 0 01-1.107-.961c-.27-.426-.404-.96-.404-1.6V62.47h1.119v5.771c0 .446.082.813.246 1.102.164.289.393.504.686.644.296.141.64.211 1.03.211.395 0 .74-.07 1.032-.21.297-.141.527-.356.691-.645.165-.29.247-.656.247-1.102V62.47zm5.638 5.185h-2.279v-.92h2.28c.44 0 .798-.07 1.072-.21.273-.141.472-.337.597-.587a1.84 1.84 0 00.194-.855c0-.293-.065-.568-.194-.826a1.428 1.428 0 00-.597-.621c-.274-.16-.631-.24-1.073-.24h-2.015V71h-1.131v-8.531h3.146c.645 0 1.19.111 1.635.334.445.222.783.531 1.014.925.23.391.346.838.346 1.342 0 .547-.116 1.014-.346 1.4a2.21 2.21 0 01-1.014.886c-.445.199-.99.298-1.635.298zm5.23-5.185V71h-1.132v-8.531h1.131z"
        fill="#000"
      />
    </Svg>
  )
}

export default UPIComponent
