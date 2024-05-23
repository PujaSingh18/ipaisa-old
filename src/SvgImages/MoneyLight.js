import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MoneyLight(props) {
  return (
    <Svg
      width={64}
      height={80}
      viewBox="0 0 64 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M26.47 12.89l.055.236h12.95l.055-.237-6.475-3.208L33 9.653l-.056.028-6.475 3.208zm-5.012 17.486v-2.083h23.083v2.083H21.458zm0-15.166v-2.131L33 7.308l11.541 5.77v2.132H21.458z"
        fill="#008"
        stroke="#000"
        strokeWidth={0.25}
      />
      <Path
        d="M24.833 17.668v8.167h2.333v-8.167h-2.333zM31.833 17.668v8.167h2.333v-8.167h-2.333zM38.833 17.668v8.167h2.333v-8.167h-2.333z"
        fill="#0F62FE"
      />
      <Path
        d="M23.284 59.01h-2.162l-.012-.908h1.963c.324 0 .607-.055.85-.164.242-.11.43-.266.562-.47.137-.206.205-.452.205-.738 0-.312-.06-.566-.181-.761a1.004 1.004 0 00-.545-.434c-.243-.094-.551-.14-.926-.14h-1.664V63h-1.131v-8.531h2.795c.437 0 .828.045 1.172.134.343.087.634.223.873.41.242.184.426.419.55.704.126.285.188.627.188 1.025 0 .352-.09.67-.27.955-.18.281-.43.512-.75.692-.316.18-.687.295-1.113.345l-.404.276zM23.23 63h-2.555l.64-.92h1.915c.36 0 .664-.062.914-.187.254-.125.448-.301.58-.528.133-.23.2-.502.2-.814 0-.317-.057-.59-.17-.82a1.174 1.174 0 00-.534-.534c-.242-.125-.554-.187-.937-.187h-1.611l.011-.908h2.203l.24.328c.41.035.758.152 1.044.351.285.196.502.446.65.75.152.305.228.64.228 1.008 0 .531-.117.98-.351 1.348-.23.363-.557.64-.979.832-.422.187-.918.281-1.488.281zm7.655-1.084v-3.264c0-.25-.051-.467-.153-.65a.997.997 0 00-.445-.434c-.2-.101-.445-.152-.738-.152-.274 0-.514.047-.721.14a1.255 1.255 0 00-.48.37.809.809 0 00-.17.492h-1.084c0-.227.058-.451.175-.674.118-.222.286-.424.504-.603a2.52 2.52 0 01.797-.434c.313-.11.66-.164 1.043-.164.461 0 .867.078 1.219.234.355.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.017.436.052.674.04.238.096.443.17.615V63h-1.13a2.027 2.027 0 01-.13-.498 4.025 4.025 0 01-.046-.586zm.187-2.76l.012.762h-1.096c-.308 0-.584.025-.826.076-.242.047-.445.12-.61.217a1.03 1.03 0 00-.374.37.979.979 0 00-.13.509c0 .2.046.38.136.545a.98.98 0 00.404.392c.183.094.408.141.674.141.332 0 .625-.07.878-.211.254-.14.456-.313.604-.516.152-.203.234-.4.246-.591l.463.521a1.573 1.573 0 01-.223.545 2.607 2.607 0 01-1.2 1.025 2.33 2.33 0 01-.927.176c-.43 0-.806-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.066-.638.2-.896a1.73 1.73 0 01.573-.65c.25-.176.551-.31.903-.399.351-.09.744-.135 1.177-.135h1.26zm3.278-1.142V63h-1.084v-6.34h1.025l.059 1.354zm-.258 1.576l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.3-.694.527-.968a2.35 2.35 0 011.858-.861c.312 0 .594.043.844.129.25.082.462.215.638.398.18.184.317.422.41.715.094.29.141.643.141 1.06V63h-1.09v-4.166c0-.332-.049-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.739.17-.218.113-.408.27-.568.469-.156.199-.28.427-.37.685a2.504 2.504 0 00-.128.809zM40.58 54v9h-1.09v-9h1.09zm3.873 2.66l-2.765 2.96-1.547 1.605-.088-1.155 1.107-1.324 1.97-2.086h1.323zm-.99 6.34l-2.261-3.023.562-.967L44.742 63h-1.278z"
        fill="#000"
      />
    </Svg>
  )
}

export default MoneyLight
