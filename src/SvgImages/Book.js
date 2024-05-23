import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Book(props) {
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
        d="M8.875 18c-.516 0-.957-.184-1.324-.55A1.806 1.806 0 017 16.124v-12c0-.516.184-.957.55-1.324.368-.367.81-.551 1.325-.551h9c.516 0 .957.184 1.324.55.367.368.551.81.551 1.325v12c0 .516-.184.957-.55 1.324-.368.367-.81.551-1.325.551h-9zm0-1.875h9v-12h-9v12zm-3.75 5.625c-.516 0-.957-.184-1.324-.55a1.806 1.806 0 01-.551-1.325V6h1.875v13.875H16v1.875H5.125z"
        fill="#717171"
      />
    </Svg>
  )
}

export default Book
