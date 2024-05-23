import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function ElecComponent(props) {
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
        d="M26.664 16.552a6.996 6.996 0 00-7.116-6.996 7.096 7.096 0 00-6.876 6.736 6.996 6.996 0 003.088 6.057 2 2 0 01.91 1.669v1.529h5.996v-1.53a1.997 1.997 0 01.9-1.668 6.997 6.997 0 003.098-5.797zM22.665 28.555a4.997 4.997 0 01-5.996 0"
        fill="#0F62FE"
      />
      <Path
        d="M16.67 25.547v-1.53a2 2 0 00-.91-1.668 6.996 6.996 0 01-3.088-6.057 7.096 7.096 0 016.876-6.736 6.996 6.996 0 017.116 6.996 6.995 6.995 0 01-3.099 5.797 1.998 1.998 0 00-.899 1.669v1.529m-5.997 0h5.997m-5.997 0v3.008a4.997 4.997 0 005.996 0l.001-3.008"
        stroke="#0F62FE"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.189 16.903l3.346 3.961-.817-3.055h1.58a.381.381 0 00.383-.52l-1.234-3.055a.401.401 0 00-.382-.245h-1.677a.381.381 0 00-.382.52l.734 1.772h-1.242a.382.382 0 00-.309.622z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ElecComponent
