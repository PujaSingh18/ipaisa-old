import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExchangeLine(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.146 12.584A6.667 6.667 0 006.692 4.21l-.827-1.447a8.33 8.33 0 018.301.02 8.334 8.334 0 013.431 10.642l1.119.645-3.471 1.845-.138-3.929 1.039.6zM3.854 7.413a6.668 6.668 0 009.454 8.375l.827 1.447a8.33 8.33 0 01-8.302-.02 8.334 8.334 0 01-3.43-10.641l-1.12-.645 3.471-1.845.138 3.929-1.039-.6h.001zm7.325 4.942L8.819 10l-2.356 2.356-1.178-1.178L8.82 7.642l2.357 2.357 2.358-2.357 1.178 1.178-3.536 3.535h.001z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ExchangeLine
