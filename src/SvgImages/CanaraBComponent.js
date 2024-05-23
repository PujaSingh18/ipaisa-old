import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function CanaraBComponent(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={47} height={47} rx={23.5} fill="#fff" />
      <Rect x={0.5} y={0.5} width={47} height={47} rx={23.5} stroke="#EEE" />
      <G clipPath="url(#clip0_1971_7681)" fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M27.528 14.57l6.84 12.605c.823 1.36-.032 2.754-1.593 2.508-.493-.077-3.667-.51-7.68-1.053l1.146-1.546 5.433.596c.45.052.659-.078.4-.564 0 0-5.115-10.303-5.164-10.42-.176-.322-.364-.219-.527.068l-5.093 9.242c-.188.351-.112.527.422.586l1.99.222-1.139 1.405-2.578-.408c-.644-.08-.853-.49-.5-1.154.265-.502 6.266-11.45 6.266-11.45.12-.21.22-.368.35-.586.349-.63.997-.797 1.427-.05z"
          fill="#00AEEF"
        />
        <Path
          d="M12.69 24.24l8.977-1.58-.767 1.392-6.196 1.041c-.316.069-.286.211-.088.343 0 0 5.406 3.737 5.929 4.081.423.285.646.4 1-.053 0 0 4.391-5.384 4.621-5.747.334-.45.485-.63-.053-.527l-3.048.509.781-1.405 4.089-.743c.932-.158 1.3.492.844 1.179-.391.56-6.868 9.279-6.868 9.279-.42.613-.734.588-1.23.154l-8.267-6.848c-.502-.436-.342-.96.276-1.075z"
          fill="#FFD400"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1971_7681">
          <Path fill="#fff" transform="translate(12 14.5)" d="M0 0H24V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CanaraBComponent
