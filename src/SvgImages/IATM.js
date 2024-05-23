import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IATM(props) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.995 0H.862A.832.832 0 00.02.841v5.044c0 .124-.021.248-.021.371 0 .124.02.248.02.372v9.126c0 .472.37.84.842.84h22.133c.472 0 .84-.368.84-.84V.84a.845.845 0 00-.84-.841zm-.841 13.333a1.6 1.6 0 01-1.6 1.6H3.303a1.6 1.6 0 01-1.6-1.6V8.697a1.6 1.6 0 011.6-1.6h17.25a1.6 1.6 0 011.6 1.6v4.636zm0-9.497a1.6 1.6 0 01-1.6 1.6H3.303a1.6 1.6 0 01-1.6-1.6v-.554a1.6 1.6 0 011.6-1.6h17.25a1.6 1.6 0 011.6 1.6v.554z"
        fill="#fff"
      />
    </Svg>
  )
}

export default IATM
