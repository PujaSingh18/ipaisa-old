import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function TravelComponent(props) {
  return (
    <Svg
      width={65}
      height={80}
      viewBox="0 0 65 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={12.667} width={40} height={40} rx={20} fill="#1C439A" />
      <G
        clipPath="url(#clip0_2618_10598)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M28.186 12.51a2.444 2.444 0 012.445-2.445h4.889a2.444 2.444 0 012.444 2.445V29.62h-9.777V12.51z" />
        <Path d="M28.186 12.51a2.444 2.444 0 012.445-2.445h4.889a2.444 2.444 0 012.444 2.445v2.364h-9.777V12.51zM41.63 14.954H24.52a2.444 2.444 0 00-2.445 2.445v9.778a2.444 2.444 0 002.445 2.444h17.11a2.444 2.444 0 002.445-2.444v-9.778a2.444 2.444 0 00-2.444-2.445z" />
      </G>
      <Path
        d="M22.038 51.469V60h-1.114v-8.531h1.114zm2.742 0v.925h-6.592v-.925h6.592zm1.332 3.187V60h-1.084v-6.34h1.055l.029.996zm1.98-1.031l-.005 1.008a1.568 1.568 0 00-.258-.035 2.711 2.711 0 00-.27-.012c-.25 0-.47.039-.662.117a1.371 1.371 0 00-.486.328c-.133.14-.239.309-.317.504a2.425 2.425 0 00-.146.633l-.305.176c0-.383.037-.742.111-1.078.079-.336.198-.633.358-.891.16-.262.363-.465.61-.61a1.713 1.713 0 011.16-.193.801.801 0 01.21.053zm4.098 5.291v-3.264c0-.25-.05-.467-.152-.65a.997.997 0 00-.445-.434c-.2-.101-.446-.152-.739-.152-.273 0-.513.047-.72.14a1.255 1.255 0 00-.48.37.809.809 0 00-.17.492h-1.085c0-.227.059-.451.176-.674.117-.222.285-.424.504-.603a2.52 2.52 0 01.797-.434c.312-.11.66-.164 1.043-.164.46 0 .867.078 1.219.234.355.157.632.393.831.71.204.312.305.704.305 1.177v2.953c0 .211.018.436.053.674.039.238.096.443.17.615V60h-1.131a2.027 2.027 0 01-.129-.498 4.025 4.025 0 01-.047-.586zm.188-2.76l.011.762h-1.095c-.309 0-.584.025-.826.076-.243.047-.446.12-.61.217a1.03 1.03 0 00-.375.37.979.979 0 00-.129.509c0 .2.045.38.135.545a.98.98 0 00.404.392c.184.094.409.141.674.141.332 0 .625-.07.88-.211.253-.14.454-.313.603-.516.152-.203.234-.4.246-.591l.463.521a1.575 1.575 0 01-.223.545 2.607 2.607 0 01-1.201 1.025 2.33 2.33 0 01-.926.176c-.43 0-.807-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.265-.955c0-.34.067-.638.2-.896a1.73 1.73 0 01.574-.65c.25-.176.55-.31.902-.399.352-.09.744-.135 1.178-.135h1.26zm4.027 2.866l1.735-5.362h1.107L36.967 60h-.726l.164-.978zm-1.447-5.362l1.787 5.39.123.95h-.726l-2.297-6.34h1.113zm7.473 6.457c-.441 0-.842-.074-1.201-.222a2.722 2.722 0 01-.92-.64 2.843 2.843 0 01-.586-.972 3.568 3.568 0 01-.205-1.23v-.246c0-.516.076-.975.228-1.377.153-.407.36-.75.621-1.032a2.66 2.66 0 01.891-.638 2.557 2.557 0 011.031-.217c.453 0 .844.078 1.172.234.332.157.604.375.815.657.21.277.367.605.468.984.102.375.153.785.153 1.23v.487h-4.735v-.885h3.65v-.082a2.701 2.701 0 00-.175-.82 1.475 1.475 0 00-.469-.657c-.215-.172-.508-.257-.879-.257a1.475 1.475 0 00-1.213.615 2.302 2.302 0 00-.345.744c-.082.293-.123.63-.123 1.014v.246c0 .3.04.584.123.85.086.261.209.492.369.69.164.2.361.356.592.47.234.113.5.17.797.17.382 0 .706-.079.972-.235.266-.156.498-.365.697-.627l.657.522c-.137.207-.31.404-.522.591-.21.188-.47.34-.78.457a3.017 3.017 0 01-1.083.176zM46.933 51v9h-1.09v-9h1.09zm-36.61 16.469V76H9.191v-8.531h1.13zm2.568 3.545V76h-1.084v-6.34h1.025l.059 1.354zm-.258 1.576l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.301-.694.528-.968a2.35 2.35 0 011.857-.861c.313 0 .594.043.844.129.25.082.463.215.639.398.18.184.316.422.41.715.094.29.14.643.14 1.06V76h-1.09v-4.166c0-.332-.048-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.738.17-.22.113-.409.27-.569.469-.156.199-.28.427-.369.685a2.504 2.504 0 00-.129.809zm9.09 1.728c0-.156-.035-.3-.105-.433-.067-.137-.205-.26-.416-.37-.207-.113-.52-.21-.938-.292a7.449 7.449 0 01-.955-.264 2.894 2.894 0 01-.72-.37 1.548 1.548 0 01-.452-.509 1.421 1.421 0 01-.158-.686c0-.25.055-.486.164-.709a1.9 1.9 0 01.475-.591c.207-.172.455-.307.744-.404.289-.098.611-.147.967-.147.508 0 .941.09 1.3.27.36.18.635.42.827.72.191.297.287.627.287.99h-1.084a.93.93 0 00-.158-.51 1.167 1.167 0 00-.452-.415 1.456 1.456 0 00-.72-.164c-.301 0-.545.047-.733.14a.94.94 0 00-.404.346.87.87 0 00-.064.762c.043.09.117.174.222.252.106.074.254.144.445.21.192.067.436.133.733.2.52.117.947.258 1.283.422.336.164.586.365.75.603.164.238.246.528.246.867a1.69 1.69 0 01-.674 1.36 2.474 2.474 0 01-.773.386c-.297.09-.63.135-1.002.135-.559 0-1.031-.1-1.418-.299-.387-.199-.68-.457-.879-.773a1.85 1.85 0 01-.299-1.002h1.09c.016.297.102.533.258.709.156.172.348.295.574.37.227.07.451.105.674.105.297 0 .545-.04.744-.118.203-.078.358-.185.463-.322a.747.747 0 00.158-.469zm5.979.217V69.66h1.09V76h-1.037l-.053-1.465zm.205-1.336l.451-.011c0 .421-.045.812-.135 1.171a2.517 2.517 0 01-.421.926 1.996 1.996 0 01-.768.615c-.316.145-.701.217-1.154.217-.309 0-.592-.045-.85-.135a1.697 1.697 0 01-.656-.416 1.892 1.892 0 01-.428-.732 3.53 3.53 0 01-.146-1.084v-4.09h1.084v4.102c0 .285.03.521.093.709.067.183.155.33.264.44.113.105.238.179.375.222.14.043.285.064.434.064.46 0 .826-.088 1.095-.263.27-.18.463-.42.58-.721.121-.305.182-.643.182-1.014zm3.213-2.543V76h-1.084v-6.34h1.055l.03.996zm1.98-1.031l-.005 1.008a1.568 1.568 0 00-.258-.035 2.711 2.711 0 00-.27-.012c-.25 0-.47.039-.662.117a1.373 1.373 0 00-.486.328 1.58 1.58 0 00-.317.504 2.42 2.42 0 00-.146.633l-.305.176c0-.383.038-.742.112-1.078.078-.336.197-.633.357-.891.16-.262.363-.465.61-.61a1.713 1.713 0 011.16-.193.801.801 0 01.21.053zm4.098 5.291v-3.264c0-.25-.05-.466-.152-.65a.997.997 0 00-.445-.434c-.2-.101-.445-.152-.739-.152-.273 0-.513.047-.72.14a1.255 1.255 0 00-.48.37.81.81 0 00-.17.492h-1.085c0-.227.059-.451.176-.674.117-.222.285-.424.504-.603a2.52 2.52 0 01.797-.434c.313-.11.66-.164 1.043-.164.46 0 .867.078 1.219.234.355.157.633.393.832.71.203.312.304.704.304 1.177v2.953c0 .211.018.436.053.674.04.238.096.443.17.615V76h-1.13a2.027 2.027 0 01-.13-.498 4.025 4.025 0 01-.047-.586zm.188-2.76l.012.762h-1.096c-.309 0-.584.025-.826.076-.242.047-.445.12-.61.217a.979.979 0 00-.504.879c0 .2.045.38.135.545a.98.98 0 00.405.392c.183.094.408.141.673.141.332 0 .625-.07.88-.211.253-.14.454-.313.603-.516.152-.203.234-.4.246-.591l.463.521a1.573 1.573 0 01-.223.545 2.604 2.604 0 01-1.201 1.025 2.33 2.33 0 01-.926.176c-.43 0-.806-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.066-.638.199-.896a1.73 1.73 0 01.574-.65c.25-.176.55-.31.902-.399.352-.09.745-.135 1.178-.135h1.26zm3.277-1.142V76H39.58v-6.34h1.025l.059 1.354zm-.257 1.576l-.451-.018c.003-.433.068-.834.193-1.2.125-.372.3-.694.527-.968a2.35 2.35 0 011.858-.861c.312 0 .593.043.843.129.25.082.463.215.64.398.179.184.316.422.41.715.093.29.14.643.14 1.06V76h-1.09v-4.166c0-.332-.049-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.692-.14c-.27 0-.515.057-.738.17-.219.113-.408.27-.568.469-.157.199-.28.427-.37.685a2.504 2.504 0 00-.128.809zm7.935 2.637c.258 0 .496-.053.715-.159.219-.105.399-.25.54-.433.14-.188.22-.4.24-.639h1.03c-.019.375-.146.725-.38 1.049a2.6 2.6 0 01-.908.78 2.636 2.636 0 01-1.237.292c-.476 0-.892-.084-1.248-.252a2.472 2.472 0 01-.879-.691 3.088 3.088 0 01-.521-1.008 4.252 4.252 0 01-.17-1.213v-.246c0-.426.057-.828.17-1.207a3.08 3.08 0 01.522-1.014c.234-.293.527-.523.878-.691.356-.168.772-.252 1.248-.252.496 0 .93.101 1.301.305.371.199.662.472.873.82.215.344.332.734.352 1.172h-1.031a1.562 1.562 0 00-.223-.71 1.388 1.388 0 00-.516-.503 1.44 1.44 0 00-.756-.193c-.332 0-.61.066-.837.199-.223.129-.4.305-.534.527a2.46 2.46 0 00-.28.733 4.027 4.027 0 00-.083.814v.246c0 .278.027.55.082.82.055.27.147.514.276.733.132.219.31.394.533.527.226.13.508.194.843.194zm5.967.89c-.441 0-.841-.074-1.2-.223a2.723 2.723 0 01-.92-.638 2.841 2.841 0 01-.587-.973 3.568 3.568 0 01-.205-1.23v-.246c0-.516.076-.975.229-1.377.152-.407.36-.75.62-1.032a2.66 2.66 0 01.892-.638 2.557 2.557 0 011.03-.217c.454 0 .845.078 1.173.234.332.157.603.375.814.657.211.277.367.605.469.984a4.7 4.7 0 01.152 1.23v.487h-4.734v-.885h3.65v-.082a2.704 2.704 0 00-.175-.82 1.475 1.475 0 00-.47-.657c-.214-.172-.507-.257-.878-.257a1.475 1.475 0 00-1.213.615 2.302 2.302 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.491.37.69.163.2.36.356.591.47.234.113.5.17.797.17.383 0 .707-.079.973-.235.265-.156.498-.365.697-.627l.656.522c-.136.207-.31.404-.521.591-.211.188-.471.34-.78.457a3.017 3.017 0 01-1.084.176z"
        fill="#000"
      />
      <Defs>
        <ClipPath id="clip0_2618_10598">
          <Path
            fill="#fff"
            transform="translate(21.075 7.843)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TravelComponent
