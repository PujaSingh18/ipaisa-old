import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function HealthInsuranceComponent(props) {
  return (
    <Svg
      width={65}
      height={80}
      viewBox="0 0 65 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={12.334} width={40} height={40} rx={20} fill="#1C439A" />
      <G
        clipPath="url(#clip0_2618_10589)"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M29.05 30.575h6.597c5.498 0 7.697-2.2 7.697-7.7v-6.6c0-5.5-2.2-7.7-7.697-7.7h-6.596c-5.498 0-7.696 2.2-7.696 7.7v6.6c0 5.5 2.198 7.7 7.696 7.7z" />
        <Path d="M21.355 20.345l6.596-.022c.825 0 1.748.627 2.056 1.397l1.253 3.168c.286.715.737.715 1.023 0l2.518-6.391c.242-.616.692-.638 1-.055l1.144 2.167c.34.649 1.22 1.177 1.946 1.177h4.464" />
      </G>
      <Path
        d="M22.665 55.137v.92h-4.617v-.92h4.617zm-4.441-3.668V60h-1.13v-8.531h1.13zm5.426 0V60h-1.125v-8.531h1.125zm4.068 8.648c-.441 0-.841-.074-1.2-.222a2.724 2.724 0 01-.92-.64 2.841 2.841 0 01-.587-.972 3.568 3.568 0 01-.205-1.23v-.246c0-.516.076-.975.229-1.377.152-.407.36-.75.62-1.032.263-.28.56-.494.892-.638a2.557 2.557 0 011.03-.217c.454 0 .845.078 1.173.234.332.157.603.375.814.657.211.277.367.605.469.984.101.375.152.785.152 1.23v.487h-4.734v-.885h3.65v-.082a2.707 2.707 0 00-.176-.82 1.475 1.475 0 00-.468-.657c-.215-.172-.508-.257-.88-.257a1.475 1.475 0 00-1.212.615 2.304 2.304 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.492.37.69.163.2.36.356.591.47.234.113.5.17.797.17.383 0 .707-.079.973-.235a2.41 2.41 0 00.697-.627l.656.522c-.137.207-.31.404-.521.591-.211.188-.471.34-.78.457a3.017 3.017 0 01-1.084.176zm7.063-1.201v-3.264c0-.25-.05-.467-.152-.65a.997.997 0 00-.446-.434c-.199-.101-.445-.152-.738-.152-.273 0-.514.047-.72.14a1.255 1.255 0 00-.481.37.81.81 0 00-.17.492H30.99c0-.227.059-.451.176-.674.117-.222.285-.424.504-.603a2.52 2.52 0 01.797-.434c.312-.11.66-.164 1.043-.164.46 0 .867.078 1.218.234.356.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.018.436.053.674.039.238.096.443.17.615V60h-1.131a2.027 2.027 0 01-.13-.498 4.025 4.025 0 01-.046-.586zm.188-2.76l.011.762h-1.095c-.309 0-.584.025-.827.076-.242.047-.445.12-.609.217a.979.979 0 00-.504.879c0 .2.045.38.135.545a.98.98 0 00.404.392c.184.094.408.141.674.141.332 0 .625-.07.879-.211.254-.14.455-.313.603-.516.153-.203.235-.4.246-.591l.463.521a1.573 1.573 0 01-.222.545 2.604 2.604 0 01-1.201 1.025 2.33 2.33 0 01-.926.176c-.43 0-.807-.084-1.131-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.067-.638.2-.896a1.73 1.73 0 01.574-.65c.25-.176.55-.31.902-.399.352-.09.744-.135 1.178-.135h1.26zM38.338 51v9H37.25v-9h1.09zm3.987 2.66v.832H38.9v-.832h3.427zm-2.267-1.54h1.084v6.31c0 .215.033.377.1.486.066.11.152.182.257.217.106.035.219.052.34.052.09 0 .184-.007.281-.023.102-.02.178-.035.229-.047l.006.885a2.55 2.55 0 01-.34.076 2.587 2.587 0 01-.498.041c-.266 0-.51-.052-.733-.158a1.178 1.178 0 01-.533-.527c-.129-.25-.193-.586-.193-1.008v-6.305zM44.274 51v9H43.19v-9h1.084zm-.258 5.59l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.301-.694.528-.968a2.349 2.349 0 011.857-.861c.313 0 .594.043.844.129.25.082.463.215.638.398.18.184.317.422.41.715.094.29.141.643.141 1.06V60h-1.09v-4.166c0-.332-.048-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.739.17-.218.113-.408.27-.568.469-.156.199-.28.427-.37.685a2.507 2.507 0 00-.128.809zM9.989 67.469V76H8.86v-8.531h1.13zm2.569 3.545V76h-1.084v-6.34h1.025l.059 1.354zM12.3 72.59l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.301-.694.528-.968a2.35 2.35 0 011.857-.861c.313 0 .594.043.844.129.25.082.463.215.638.398.18.184.317.422.41.715.095.29.141.643.141 1.06V76h-1.09v-4.166c0-.332-.048-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.738.17-.22.113-.409.27-.569.469-.156.199-.28.427-.369.685a2.504 2.504 0 00-.129.809zm9.09 1.728c0-.156-.035-.3-.105-.433-.067-.137-.205-.26-.416-.37-.207-.113-.52-.21-.938-.292a7.449 7.449 0 01-.955-.264 2.894 2.894 0 01-.72-.37 1.546 1.546 0 01-.452-.509 1.421 1.421 0 01-.158-.686c0-.25.055-.486.164-.709.113-.222.272-.42.475-.591.207-.172.455-.307.744-.404.289-.098.611-.147.967-.147.508 0 .941.09 1.3.27.36.18.635.42.827.72.191.297.287.627.287.99h-1.084a.93.93 0 00-.158-.51 1.167 1.167 0 00-.452-.415 1.456 1.456 0 00-.72-.164c-.301 0-.545.047-.733.14a.94.94 0 00-.404.346.87.87 0 00-.065.762c.043.09.118.174.223.252.106.074.254.144.445.21.192.067.436.133.733.2.52.117.947.258 1.283.422.336.164.586.365.75.603.164.238.246.528.246.867a1.69 1.69 0 01-.674 1.36 2.474 2.474 0 01-.773.386c-.297.09-.63.135-1.002.135-.559 0-1.031-.1-1.418-.299-.387-.199-.68-.457-.879-.773a1.85 1.85 0 01-.299-1.002h1.09c.016.297.102.533.258.709.156.172.348.295.574.37.227.07.451.105.674.105.297 0 .545-.04.744-.118.203-.078.358-.185.463-.322a.747.747 0 00.158-.469zm5.979.217V69.66h1.09V76h-1.037l-.053-1.465zm.205-1.336l.451-.011c0 .421-.045.812-.135 1.171a2.516 2.516 0 01-.422.926 1.995 1.995 0 01-.767.615c-.316.145-.701.217-1.154.217-.309 0-.592-.045-.85-.135a1.697 1.697 0 01-.656-.416 1.892 1.892 0 01-.428-.732 3.53 3.53 0 01-.146-1.084v-4.09h1.084v4.102c0 .285.03.521.093.709.067.183.155.33.264.44.113.105.238.179.375.222.14.043.285.064.434.064.46 0 .826-.088 1.095-.263.27-.18.463-.42.58-.721.122-.305.182-.643.182-1.014zm3.213-2.543V76h-1.084v-6.34h1.055l.03.996zm1.98-1.031l-.005 1.008a1.568 1.568 0 00-.258-.035 2.711 2.711 0 00-.27-.012c-.25 0-.47.039-.662.117a1.373 1.373 0 00-.486.328 1.58 1.58 0 00-.316.504 2.425 2.425 0 00-.147.633l-.305.176c0-.383.037-.742.112-1.078.078-.336.197-.633.357-.891.16-.262.363-.465.61-.61a1.713 1.713 0 011.16-.193.801.801 0 01.21.053zm4.098 5.291v-3.264c0-.25-.05-.466-.152-.65a.997.997 0 00-.445-.434c-.2-.101-.446-.152-.739-.152-.273 0-.513.047-.72.14a1.255 1.255 0 00-.48.37.809.809 0 00-.17.492h-1.085c0-.227.059-.451.176-.674.117-.222.285-.424.504-.603a2.52 2.52 0 01.797-.434c.313-.11.66-.164 1.043-.164.46 0 .867.078 1.219.234.355.157.633.393.832.71.203.312.304.704.304 1.177v2.953c0 .211.018.436.053.674.04.238.096.443.17.615V76h-1.13a2.027 2.027 0 01-.13-.498 4.025 4.025 0 01-.047-.586zm.188-2.76l.012.762h-1.096c-.309 0-.584.025-.826.076-.242.047-.446.12-.61.217a1.03 1.03 0 00-.375.37.979.979 0 00-.129.509c0 .2.045.38.135.545a.98.98 0 00.405.392c.183.094.408.141.673.141.332 0 .625-.07.88-.211.253-.14.454-.313.603-.516.152-.203.234-.4.246-.591l.463.521a1.573 1.573 0 01-.223.545 2.607 2.607 0 01-1.201 1.025 2.33 2.33 0 01-.926.176c-.43 0-.806-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.066-.638.199-.896a1.73 1.73 0 01.574-.65c.25-.176.55-.31.902-.399.352-.09.745-.135 1.178-.135h1.26zm3.278-1.142V76h-1.085v-6.34h1.026l.059 1.354zm-.258 1.576l-.452-.018c.004-.433.069-.834.194-1.2.125-.372.3-.694.527-.968a2.35 2.35 0 011.858-.861c.312 0 .593.043.843.129.25.082.463.215.639.398.18.184.316.422.41.715.094.29.14.643.14 1.06V76h-1.089v-4.166c0-.332-.049-.598-.147-.797a.9.9 0 00-.427-.44 1.535 1.535 0 00-.692-.14c-.27 0-.515.057-.738.17-.219.113-.408.27-.568.469-.157.199-.28.427-.37.685a2.504 2.504 0 00-.128.809zm7.935 2.637c.258 0 .496-.053.715-.159.219-.105.399-.25.54-.433.14-.188.22-.4.24-.639h1.03c-.019.375-.146.725-.38 1.049a2.6 2.6 0 01-.908.78 2.636 2.636 0 01-1.237.292c-.476 0-.892-.084-1.248-.252a2.472 2.472 0 01-.878-.691 3.088 3.088 0 01-.522-1.008 4.252 4.252 0 01-.17-1.213v-.246c0-.426.057-.828.17-1.207a3.08 3.08 0 01.522-1.014c.234-.293.527-.523.878-.691.356-.168.772-.252 1.248-.252.496 0 .93.101 1.301.305.371.199.662.472.873.82.215.344.332.734.352 1.172h-1.031a1.562 1.562 0 00-.223-.71 1.388 1.388 0 00-.516-.503 1.44 1.44 0 00-.756-.193c-.332 0-.61.066-.838.199-.222.129-.4.305-.533.527a2.46 2.46 0 00-.28.733 4.027 4.027 0 00-.083.814v.246c0 .278.027.55.082.82.055.27.147.514.276.733.132.219.31.394.533.527.226.13.508.194.843.194zm5.967.89c-.441 0-.841-.074-1.2-.223a2.723 2.723 0 01-.92-.638 2.841 2.841 0 01-.587-.973 3.568 3.568 0 01-.205-1.23v-.246c0-.516.076-.975.229-1.377.152-.407.36-.75.62-1.032a2.66 2.66 0 01.892-.638 2.557 2.557 0 011.03-.217c.454 0 .844.078 1.173.234.332.157.603.375.814.657.211.277.367.605.469.984a4.7 4.7 0 01.152 1.23v.487h-4.734v-.885h3.65v-.082a2.704 2.704 0 00-.175-.82 1.475 1.475 0 00-.47-.657c-.214-.172-.507-.257-.878-.257a1.475 1.475 0 00-1.213.615 2.302 2.302 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.491.37.69.163.2.36.356.591.47.234.113.5.17.797.17.383 0 .707-.079.973-.235.265-.156.498-.365.697-.627l.656.522c-.136.207-.31.404-.521.591-.211.188-.471.34-.78.457a3.017 3.017 0 01-1.084.176z"
        fill="#000"
      />
      <Defs>
        <ClipPath id="clip0_2618_10589">
          <Path
            fill="#fff"
            transform="translate(20.385 7.575)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HealthInsuranceComponent
