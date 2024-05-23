import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function PNBComponent(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={48} height={48} rx={24} fill="#A20E37" />
      <Path
        d="M28.848 14.648h4.578v18h-4.578v-4.426c-4.057 1.512-7.848 1.65-11.355-1.833-1.446-1.522-2.252-3.602-1.904-7.24a12.144 12.144 0 00-.87-4.226h4.111c1.914 3.089-.595 6.71 2.354 9.23 4.001 2.63 7.499-.505 7.664-3.355v-6.15zm-4.579 1.934a3.963 3.963 0 013.657 2.456 3.972 3.972 0 01-2.896 5.405 3.961 3.961 0 01-4.067-1.689 3.971 3.971 0 01-.668-2.203 3.98 3.98 0 013.974-3.969z"
        fill="#FBBC09"
      />
    </Svg>
  )
}

export default PNBComponent
