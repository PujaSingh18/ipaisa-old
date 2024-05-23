import * as React from "react"
import Svg, { Path } from "react-native-svg"

function QRColor(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.375 5.938V1.875h4.063v1.563h-2.5v2.5H2.375zm0 12.187v-4.063h1.563v2.5h2.5v1.563H2.375zm12.188 0v-1.563h2.5v-2.5h1.562v4.063h-4.063zm2.5-12.188v-2.5h-2.5V1.875h4.062v4.063h-1.563zm-2.105 8.521h1.188v1.188h-1.188v-1.188zm0-2.375h1.188v1.188h-1.188v-1.188zm-1.187 1.188h1.187v1.187h-1.187v-1.187zm-1.188 1.187h1.188v1.188h-1.188v-1.188zm-1.187-1.187h1.187v1.187h-1.187v-1.187zm2.375-2.375h1.187v1.187h-1.187v-1.187zm-1.188 1.187h1.188v1.188h-1.188v-1.188zm-1.187-1.187h1.187v1.187h-1.187v-1.187zm4.75-6.542v4.75h-4.75v-4.75h4.75zm-6.542 6.542v4.75h-4.75v-4.75h4.75zm0-6.542v4.75h-4.75v-4.75h4.75zM8.438 14.458v-2.396H6.042v2.396h2.396zm0-6.52V5.542H6.042v2.396h2.396zm6.52 0V5.542h-2.396v2.396h2.396z"
        fill="#0065D9"
      />
    </Svg>
  )
}

export default QRColor
