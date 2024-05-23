import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function MTDComponent(props) {
  return (
    <Svg
      width={64}
      height={80}
      viewBox="0 0 64 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={12} width={40} height={40} rx={20} fill="#1C439A" />
      <Path
        d="M43 13.583C43 11.54 40.242 10 36.584 10c-3.659 0-6.417 1.54-6.417 3.583 0 .018.004.035.005.053h-.005v2.727H32v-.225c1.148.642 2.753 1.028 4.584 1.028 1.689 0 3.181-.332 4.303-.886.175.178.28.356.28.511 0 .703-1.828 1.765-4.583 1.765H34.75v1.818h1.833c1.689 0 3.182-.331 4.304-.886.175.178.279.355.279.512 0 .703-1.828 1.765-4.584 1.765l-.649.003c-.398.003-.785.007-1.161-.003l-.045 1.817c.202.005.406.007.614.007l.606-.003.635-.003c1.69 0 3.184-.332 4.307-.887.175.18.276.358.276.512 0 .703-1.827 1.765-4.583 1.765H34.75v1.819h1.833c1.69 0 3.184-.332 4.306-.888.175.18.277.358.277.513 0 .703-1.827 1.765-4.583 1.765H34.75V30h1.833C40.241 30 43 28.46 43 26.417l-.003-.053H43V13.636h-.005c.001-.018.005-.035.005-.053zm-11 0c0-.703 1.828-1.765 4.584-1.765 2.755 0 4.583 1.062 4.583 1.765 0 .702-1.828 1.764-4.583 1.764-2.756 0-4.584-1.062-4.584-1.764z"
        fill="white"
      />
      <Path
        d="M27.417 16.363c-3.659 0-6.417 1.54-6.417 3.583 0 .018.004.036.005.054H21v6.363c0 2.043 2.758 3.583 6.417 3.583 3.658 0 6.416-1.54 6.416-3.583V20h-.004c0-.018.004-.035.004-.053 0-2.043-2.758-3.584-6.416-3.584zm-4.584 6.792c0-.157.104-.334.278-.513 1.123.556 2.616.887 4.306.887 1.689 0 3.181-.331 4.303-.886.175.179.28.356.28.512 0 .702-1.828 1.764-4.583 1.764-2.756 0-4.584-1.062-4.584-1.764zm4.584-4.973c2.755 0 4.583 1.062 4.583 1.765 0 .702-1.828 1.764-4.583 1.764-2.756 0-4.584-1.062-4.584-1.764 0-.703 1.828-1.765 4.584-1.765zm0 9.947c-2.756 0-4.584-1.063-4.584-1.766 0-.156.105-.333.279-.512 1.122.555 2.615.887 4.305.887 1.689 0 3.182-.331 4.304-.886.174.178.279.355.279.512 0 .702-1.828 1.764-4.583 1.764z"
        fill="white"
      />
      <Path
        opacity={0.6}
        d="M9.168 51.469h1.096l2.795 6.955 2.789-6.955h1.101L13.48 60h-.855l-3.457-8.531zm-.357 0h.966l.159 5.203V60H8.81v-8.531zm7.523 0h.967V60h-1.125v-3.328l.158-5.203zm6.26 7.066V53.66h1.09V60h-1.037l-.053-1.465zm.205-1.336l.451-.011c0 .421-.045.812-.134 1.171a2.518 2.518 0 01-.422.926 1.995 1.995 0 01-.768.615c-.316.145-.701.217-1.154.217-.309 0-.592-.045-.85-.135a1.697 1.697 0 01-.656-.416 1.892 1.892 0 01-.428-.732 3.53 3.53 0 01-.146-1.084v-4.09h1.084v4.102c0 .285.03.521.093.709.067.183.155.33.264.44.113.105.238.179.375.222.14.043.285.064.434.064.46 0 .826-.088 1.095-.263.27-.18.463-.42.58-.721.121-.305.182-.643.182-1.014zm3.213-2.185V60h-1.084v-6.34h1.026l.058 1.354zm-.258 1.576l-.45-.018c.003-.433.068-.834.193-1.2.125-.372.3-.694.527-.968a2.35 2.35 0 011.857-.861c.313 0 .594.043.844.129.25.082.463.215.639.398.18.184.316.422.41.715.094.29.14.643.14 1.06V60h-1.09v-4.166c0-.332-.048-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.69-.14c-.27 0-.517.057-.74.17-.218.113-.407.27-.568.469-.156.199-.279.427-.369.685a2.504 2.504 0 00-.129.809zm6.577-2.93V60h-1.09v-6.34h1.09zm-1.172-1.681c0-.176.053-.325.158-.446.11-.12.27-.181.48-.181.208 0 .366.06.475.181.113.121.17.27.17.445a.613.613 0 01-.17.434c-.11.117-.267.176-.474.176-.211 0-.371-.059-.48-.176a.638.638 0 01-.16-.434zm5.041 7.248c.258 0 .496-.053.715-.159.219-.105.398-.25.539-.433.14-.188.22-.4.24-.639h1.031c-.019.375-.146.725-.38 1.049a2.6 2.6 0 01-.909.78 2.636 2.636 0 01-1.236.292c-.477 0-.893-.084-1.248-.252a2.473 2.473 0 01-.879-.691 3.088 3.088 0 01-.521-1.008 4.252 4.252 0 01-.17-1.213v-.246c0-.426.056-.828.17-1.207a3.08 3.08 0 01.521-1.014c.234-.293.527-.523.879-.691.355-.168.772-.252 1.248-.252.496 0 .93.102 1.3.305.372.199.663.472.874.82.215.344.332.734.351 1.172h-1.03a1.56 1.56 0 00-.223-.71 1.388 1.388 0 00-.516-.503 1.44 1.44 0 00-.756-.193c-.332 0-.611.066-.838.199-.223.129-.4.304-.533.527a2.458 2.458 0 00-.281.733 4.027 4.027 0 00-.082.814v.246c0 .277.027.55.082.82.054.27.146.514.275.733.133.219.31.394.533.527.227.13.508.194.844.194zm4.514-5.567V60h-1.09v-6.34h1.09zm-1.172-1.681c0-.176.053-.325.158-.446.11-.12.27-.181.48-.181.208 0 .366.06.475.181.114.121.17.27.17.445a.613.613 0 01-.17.434c-.109.117-.267.176-.474.176-.211 0-.371-.059-.48-.176a.638.638 0 01-.159-.434zm3.588 2.9v7.559h-1.09V53.66h.996l.094 1.219zm4.272 1.898v.123c0 .461-.055.89-.164 1.284-.11.39-.27.73-.48 1.02-.208.288-.464.513-.768.673-.305.16-.655.24-1.05.24-.402 0-.757-.066-1.066-.199a2.103 2.103 0 01-.785-.58 2.964 2.964 0 01-.515-.914 5.29 5.29 0 01-.258-1.201v-.657c.047-.468.134-.888.263-1.26.13-.37.3-.687.51-.949.215-.265.475-.466.78-.603.304-.14.656-.211 1.054-.211.399 0 .752.078 1.06.234.31.153.57.371.78.657.21.285.37.627.475 1.025.109.394.164.834.164 1.318zm-1.09.123v-.123c0-.316-.033-.613-.1-.89a2.252 2.252 0 00-.31-.739 1.48 1.48 0 00-.528-.504 1.5 1.5 0 00-.767-.187 1.69 1.69 0 00-.715.14c-.2.094-.37.221-.51.381-.14.157-.256.337-.346.54-.086.199-.15.406-.193.62v1.518c.078.274.188.532.328.774a1.7 1.7 0 00.563.58c.234.144.529.217.884.217.293 0 .545-.061.756-.182a1.53 1.53 0 00.528-.51c.14-.215.244-.46.31-.738.067-.281.1-.58.1-.897zm5.803 2.016v-3.264c0-.25-.051-.467-.153-.65a.996.996 0 00-.445-.434c-.2-.101-.445-.152-.738-.152-.274 0-.514.047-.72.14a1.254 1.254 0 00-.481.37.809.809 0 00-.17.492h-1.084c0-.227.058-.451.175-.674.118-.222.286-.424.504-.603a2.52 2.52 0 01.797-.434c.313-.11.66-.164 1.043-.164.461 0 .867.078 1.219.234.355.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.017.436.053.674.039.238.095.443.17.615V60H52.29a2.026 2.026 0 01-.13-.498 4.024 4.024 0 01-.046-.586zm.187-2.76l.012.762h-1.096c-.308 0-.584.025-.826.076-.242.047-.445.12-.61.217a.979.979 0 00-.504.879c0 .2.046.38.136.545a.98.98 0 00.404.392c.184.094.408.141.674.141.332 0 .625-.07.879-.211.253-.14.455-.313.603-.516.153-.203.235-.4.246-.591l.463.521a1.572 1.572 0 01-.222.545 2.625 2.625 0 01-1.201 1.025 2.328 2.328 0 01-.926.176c-.43 0-.807-.084-1.131-.252a1.931 1.931 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.066-.638.2-.896a1.73 1.73 0 01.573-.65c.25-.176.551-.31.903-.399.351-.09.744-.135 1.177-.135h1.26zM55.674 51v9h-1.09v-9h1.09zM21.25 67.469V76h-1.114v-8.531h1.114zm2.742 0v.925H17.4v-.925h6.592zm3.764 7.447v-3.264c0-.25-.051-.466-.153-.65a.996.996 0 00-.445-.434c-.2-.101-.445-.152-.738-.152-.274 0-.514.047-.721.14a1.255 1.255 0 00-.48.37.81.81 0 00-.17.492h-1.084c0-.227.058-.451.175-.674.118-.222.286-.424.504-.603a2.52 2.52 0 01.797-.434c.313-.11.66-.164 1.043-.164.461 0 .867.078 1.219.234.355.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.017.436.052.674.04.238.096.443.17.615V76h-1.13a2.031 2.031 0 01-.13-.498 4.024 4.024 0 01-.046-.586zm.187-2.76l.012.762h-1.096c-.308 0-.584.025-.826.076-.242.047-.445.12-.61.217a.979.979 0 00-.504.879c0 .2.046.38.136.545a.98.98 0 00.404.392c.183.094.408.141.674.141.332 0 .625-.07.879-.211.253-.14.455-.313.603-.516.152-.203.234-.4.246-.591l.463.521a1.572 1.572 0 01-.223.545 2.625 2.625 0 01-1.201 1.025 2.328 2.328 0 01-.926.176c-.43 0-.806-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.066-.638.2-.896a1.73 1.73 0 01.573-.65c.25-.176.551-.31.903-.399.351-.09.744-.135 1.177-.135h1.26zm2.926-2.496l1.389 2.309 1.406-2.309h1.271l-2.074 3.13L35 76h-1.254l-1.465-2.379L30.816 76h-1.26l2.133-3.21-2.068-3.13h1.248zm7.327 6.457c-.442 0-.842-.074-1.202-.223a2.723 2.723 0 01-.92-.638 2.841 2.841 0 01-.585-.973 3.568 3.568 0 01-.206-1.23v-.246c0-.516.077-.975.229-1.377.152-.407.36-.75.621-1.032a2.66 2.66 0 01.89-.638 2.557 2.557 0 011.032-.217c.453 0 .844.078 1.172.234.332.157.603.375.814.657.211.277.367.605.469.984a4.7 4.7 0 01.152 1.23v.487h-4.734v-.885h3.65v-.082a2.701 2.701 0 00-.175-.82 1.474 1.474 0 00-.47-.657c-.214-.172-.507-.257-.878-.257a1.475 1.475 0 00-1.213.615 2.302 2.302 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.491.37.69.163.2.36.356.591.47.235.113.5.17.797.17.383 0 .707-.079.973-.235.265-.156.498-.365.697-.627l.656.522c-.136.207-.31.404-.521.591-.211.188-.47.34-.78.457a3.017 3.017 0 01-1.084.176zm7.015-1.799c0-.156-.035-.3-.105-.433-.067-.137-.205-.26-.416-.37-.207-.113-.52-.21-.938-.292a7.446 7.446 0 01-.955-.264 2.894 2.894 0 01-.72-.37 1.549 1.549 0 01-.452-.509 1.421 1.421 0 01-.158-.686c0-.25.055-.486.164-.709.114-.222.272-.42.475-.591.207-.172.455-.307.744-.404.29-.098.611-.147.967-.147.508 0 .941.09 1.3.27.36.18.635.42.827.72.191.297.287.627.287.99h-1.084a.93.93 0 00-.158-.51 1.167 1.167 0 00-.451-.415 1.456 1.456 0 00-.721-.164c-.301 0-.545.047-.733.14a.94.94 0 00-.404.346.87.87 0 00-.064.762c.043.09.117.174.222.252.106.074.254.144.446.21.191.067.435.133.732.2.52.117.947.258 1.283.422.336.164.586.365.75.603.164.238.246.528.246.867a1.689 1.689 0 01-.674 1.36 2.474 2.474 0 01-.773.386c-.297.09-.63.135-1.002.135-.558 0-1.031-.1-1.418-.299-.387-.199-.68-.457-.879-.773a1.85 1.85 0 01-.299-1.002h1.09c.016.297.102.533.258.709.156.172.348.295.574.37.227.07.452.105.674.105.297 0 .545-.04.744-.118.203-.078.358-.185.463-.322a.747.747 0 00.158-.469z"
        fill="#000"
      />
    </Svg>
  )
}

export default MTDComponent
