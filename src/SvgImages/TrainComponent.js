import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function TrainComponent(props) {
  return (
    <Svg
      width={64}
      height={80}
      viewBox="0 0 64 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={8} width={48} height={48} rx={24} fill="#1C439A" />
      <Path
        d="M23.25 22.75h17.5m-12.5 8.75l-3.75 3.75m11.25-3.75l3.75 3.75m-7.5-7.5h.013M27.25 31.5h9.5c1.4 0 2.1 0 2.635-.273.47-.24.853-.622 1.093-1.092.272-.535.272-1.235.272-2.635V16.75c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 00-1.092-1.092c-.535-.273-1.235-.273-2.635-.273h-9.5c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 00-1.092 1.092c-.273.535-.273 1.235-.273 2.635V27.5c0 1.4 0 2.1.273 2.635a2.5 2.5 0 001.092 1.092c.535.273 1.235.273 2.635.273z"
        stroke="#fff"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.75 62.469V71h-1.113v-8.531h1.113zm2.743 0v.925H16.9v-.925h6.592zm1.332 3.187V71H23.74v-6.34h1.055l.029.996zm1.98-1.031l-.006 1.008a1.568 1.568 0 00-.257-.035 2.711 2.711 0 00-.27-.012c-.25 0-.47.039-.662.117a1.372 1.372 0 00-.486.328c-.133.14-.239.309-.317.504a2.425 2.425 0 00-.146.633l-.305.176c0-.383.037-.742.111-1.078.079-.336.198-.633.358-.891a1.75 1.75 0 01.61-.61 1.713 1.713 0 011.16-.193.801.801 0 01.21.053zm4.098 5.291v-3.264c0-.25-.05-.466-.152-.65a.997.997 0 00-.445-.434 1.614 1.614 0 00-.739-.152c-.273 0-.513.047-.72.14a1.255 1.255 0 00-.48.37.809.809 0 00-.17.492h-1.085c0-.227.059-.451.176-.674.117-.222.285-.424.504-.603.223-.184.488-.329.797-.434.312-.11.66-.164 1.043-.164.46 0 .867.078 1.218.234.356.157.633.393.832.71.204.312.305.704.305 1.177v2.953c0 .211.018.436.053.674.039.238.096.443.17.615V71h-1.131a2.022 2.022 0 01-.129-.498 4.011 4.011 0 01-.047-.586zm.188-2.76l.011.762h-1.095c-.309 0-.584.025-.826.076-.243.047-.446.12-.61.217a1.03 1.03 0 00-.375.37.979.979 0 00-.129.509c0 .2.045.38.135.545.09.164.225.295.404.392.184.094.409.141.674.141.332 0 .625-.07.88-.211.253-.14.454-.313.603-.516.152-.203.234-.4.246-.591l.463.521a1.575 1.575 0 01-.223.545 2.607 2.607 0 01-1.201 1.025 2.33 2.33 0 01-.926.176c-.43 0-.807-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.265-.955c0-.34.067-.638.2-.896a1.73 1.73 0 01.574-.65c.25-.176.55-.31.902-.399.352-.09.744-.135 1.178-.135h1.26zm3.371-2.496V71h-1.09v-6.34h1.09zM33.29 62.98c0-.176.053-.325.158-.446.11-.12.27-.181.48-.181.208 0 .366.06.475.181.114.121.17.27.17.445a.613.613 0 01-.17.434c-.109.117-.267.176-.474.176-.211 0-.371-.059-.48-.176a.638.638 0 01-.159-.434zm3.588 3.035V71h-1.084v-6.34h1.026l.058 1.354zm-.258 1.576l-.45-.018c.003-.433.068-.834.193-1.2.125-.372.3-.694.527-.968a2.348 2.348 0 011.857-.861c.313 0 .594.043.844.129.25.082.463.215.639.398.18.184.316.422.41.715.094.29.14.643.14 1.06V71h-1.09v-4.166c0-.332-.048-.598-.146-.797a.9.9 0 00-.427-.44 1.535 1.535 0 00-.692-.14c-.27 0-.515.057-.738.17-.219.113-.408.27-.569.469-.156.199-.279.427-.369.685a2.507 2.507 0 00-.129.809zm9.09 1.728c0-.156-.035-.3-.105-.433-.066-.137-.205-.26-.416-.37-.207-.113-.52-.21-.938-.292a7.45 7.45 0 01-.955-.264 2.896 2.896 0 01-.72-.37 1.549 1.549 0 01-.452-.509 1.422 1.422 0 01-.158-.686c0-.25.055-.486.164-.709.114-.222.272-.42.475-.591.207-.172.455-.307.744-.404.29-.098.612-.147.967-.147.508 0 .941.09 1.3.27.36.18.636.42.827.72.191.297.287.627.287.99h-1.084a.93.93 0 00-.158-.51 1.167 1.167 0 00-.451-.415 1.456 1.456 0 00-.721-.164c-.3 0-.545.047-.733.14a.941.941 0 00-.404.346.87.87 0 00-.064.762c.043.09.117.174.222.252.106.074.254.144.446.21.191.067.435.133.732.2.52.117.947.258 1.283.422.336.164.586.365.75.603.164.238.246.528.246.867a1.689 1.689 0 01-.674 1.36 2.472 2.472 0 01-.773.386c-.297.09-.63.135-1.002.135-.558 0-1.031-.1-1.418-.299-.386-.199-.68-.457-.879-.773a1.85 1.85 0 01-.299-1.002h1.09c.016.297.102.533.258.709.156.172.348.295.574.37.227.07.452.105.674.105.297 0 .545-.04.744-.118.203-.078.358-.185.463-.322a.747.747 0 00.159-.469z"
        fill="#000"
      />
    </Svg>
  )
}

export default TrainComponent