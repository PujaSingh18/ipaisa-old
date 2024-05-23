import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Home(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.858 14.587v-2.3c0-.583.474-1.057 1.06-1.06h2.156c.59 0 1.068.474 1.068 1.06v2.293c0 .505.411.916.92.92h1.47a2.595 2.595 0 001.833-.75c.487-.481.76-1.135.76-1.817V6.4c0-.55-.246-1.073-.671-1.426L9.457 1.006a2.336 2.336 0 00-2.968.053L1.6 4.973a1.856 1.856 0 00-.725 1.426v6.528A2.583 2.583 0 003.467 15.5h1.437a.923.923 0 00.655-.265.91.91 0 00.272-.648h.027z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Home
