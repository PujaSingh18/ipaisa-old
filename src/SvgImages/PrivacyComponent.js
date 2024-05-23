import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PrivacyComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.001 21.996c-2.317-.583-4.23-1.912-5.738-3.987s-2.262-4.38-2.262-6.913v-6.1l8-3 8 3v6.1c0 1.417-.242 2.78-.725 4.088a10.626 10.626 0 01-2.075 3.462l-3.2-3.2c-.3.183-.62.32-.962.413a3.986 3.986 0 01-1.038.137c-1.1 0-2.042-.392-2.825-1.175-.783-.783-1.175-1.725-1.175-2.825s.392-2.042 1.175-2.825c.783-.783 1.725-1.175 2.825-1.175s2.042.392 2.825 1.175c.783.783 1.175 1.725 1.175 2.825 0 .367-.046.72-.138 1.063-.091.341-.229.67-.412.987l1.5 1.5c.333-.683.592-1.4.775-2.15.183-.75.275-1.517.275-2.3V6.371l-6-2.25-6 2.25v4.725c0 2.017.567 3.85 1.7 5.5s2.567 2.75 4.3 3.3a7.034 7.034 0 001.238-.512c.391-.209.779-.455 1.162-.738l1.4 1.4c-.55.45-1.146.842-1.787 1.175a9.663 9.663 0 01-2.013.775zm0-8c.55 0 1.02-.196 1.413-.587.391-.392.587-.863.587-1.413s-.196-1.02-.587-1.412A1.926 1.926 0 0012 9.996c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0010 11.996c0 .55.196 1.02.588 1.413.391.391.862.587 1.412.587z"
        fill="#000"
      />
    </Svg>
  )
}

export default PrivacyComponent
