import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function GBUDComponent(props) {
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
        d="M35.584 17.464v11a2 2 0 01-2 2h-4a2 2 0 01-2-2v-11c0-1.86 1.27-3.43 3-3.87v-1.13h-1a1 1 0 110-2h4a1 1 0 110 2h-1v1.13c1.73.44 3 2.01 3 3.87z"
        fill="white"
      />
      <Path
        opacity={0.6}
        d="M18.88 56.01h-2.162l-.012-.908h1.963c.325 0 .608-.055.85-.164.242-.11.43-.266.562-.47a1.31 1.31 0 00.206-.738c0-.312-.061-.566-.182-.761a1.004 1.004 0 00-.545-.434c-.242-.094-.55-.14-.926-.14H16.97V60h-1.13v-8.531h2.794c.438 0 .828.045 1.172.134.344.087.635.223.873.41.242.184.426.419.55.704.126.285.188.627.188 1.025 0 .352-.09.67-.27.955-.179.281-.429.512-.75.692-.316.18-.687.295-1.112.345l-.405.276zM18.828 60h-2.555l.639-.92h1.916c.359 0 .664-.062.914-.187.253-.125.447-.301.58-.528.133-.23.199-.502.199-.814 0-.317-.057-.59-.17-.82a1.175 1.175 0 00-.533-.534c-.242-.125-.555-.187-.938-.187H17.27l.012-.908h2.203l.24.328c.41.035.758.152 1.043.351.285.196.502.446.65.75.153.305.229.64.229 1.008 0 .531-.117.98-.352 1.348-.23.363-.556.64-.978.832-.422.187-.918.281-1.488.281zm3.629-3.1v-.134c0-.457.066-.881.199-1.272.133-.394.324-.736.574-1.025.25-.293.553-.52.908-.68a2.819 2.819 0 011.196-.246c.445 0 .845.082 1.2.246.36.16.665.387.915.68.254.289.447.63.58 1.025.133.39.2.815.2 1.272v.134c0 .457-.067.881-.2 1.272-.133.39-.326.732-.58 1.025-.25.29-.553.516-.908.68-.352.16-.75.24-1.196.24-.445 0-.845-.08-1.2-.24a2.72 2.72 0 01-.915-.68 3.1 3.1 0 01-.574-1.025c-.133-.39-.2-.815-.2-1.272zm1.084-.134v.134c0 .317.037.616.11.897.075.277.186.523.335.738.152.215.342.385.568.51.227.121.49.182.791.182.297 0 .557-.061.78-.182.226-.125.414-.295.562-.51.148-.215.26-.46.334-.738.078-.281.117-.58.117-.897v-.134c0-.313-.039-.608-.117-.885a2.277 2.277 0 00-.34-.744 1.615 1.615 0 00-.562-.516 1.577 1.577 0 00-.785-.187c-.297 0-.559.062-.786.187-.222.125-.41.297-.562.516-.149.215-.26.463-.334.744a3.41 3.41 0 00-.111.885zm5.351.134v-.134c0-.457.067-.881.2-1.272a3.02 3.02 0 01.574-1.025c.25-.293.552-.52.908-.68a2.819 2.819 0 011.195-.246c.446 0 .846.082 1.202.246.359.16.664.387.914.68.254.289.447.63.58 1.025.132.39.199.815.199 1.272v.134c0 .457-.067.881-.2 1.272-.132.39-.325.732-.58 1.025a2.66 2.66 0 01-.908.68c-.351.16-.75.24-1.195.24-.445 0-.846-.08-1.201-.24a2.72 2.72 0 01-.914-.68 3.098 3.098 0 01-.574-1.025c-.133-.39-.2-.815-.2-1.272zm1.084-.134v.134c0 .317.038.616.112.897.074.277.185.523.334.738.152.215.341.385.568.51.227.121.49.182.791.182.297 0 .557-.061.78-.182.226-.125.413-.295.562-.51a2.36 2.36 0 00.334-.738c.078-.281.117-.58.117-.897v-.134c0-.313-.039-.608-.117-.885a2.28 2.28 0 00-.34-.744 1.617 1.617 0 00-.563-.516 1.578 1.578 0 00-.785-.187c-.296 0-.558.062-.785.187-.223.125-.41.297-.562.516-.149.215-.26.463-.334.744a3.41 3.41 0 00-.112.885zM36.706 51v9h-1.09v-9h1.09zm3.872 2.66l-2.766 2.96-1.546 1.605-.088-1.155 1.107-1.324 1.969-2.086h1.324zm-.99 6.34l-2.262-3.023.563-.967L40.865 60h-1.277zm8.008-1.084v-3.264c0-.25-.05-.467-.152-.65a.997.997 0 00-.446-.434 1.614 1.614 0 00-.738-.152c-.273 0-.514.047-.72.14a1.255 1.255 0 00-.481.37.809.809 0 00-.17.492h-1.084c0-.227.059-.451.176-.674.117-.222.285-.424.504-.603.222-.184.488-.328.797-.434.312-.11.66-.164 1.043-.164.46 0 .867.078 1.218.234.356.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.018.436.053.674.039.238.096.443.17.615V60h-1.131a2.022 2.022 0 01-.129-.498 4.011 4.011 0 01-.047-.586zm.188-2.76l.011.762H46.7c-.309 0-.584.025-.827.076-.242.047-.445.12-.609.217a1.03 1.03 0 00-.375.37.978.978 0 00-.129.509c0 .2.045.38.135.545a.98.98 0 00.404.392c.184.094.408.141.674.141.332 0 .625-.07.879-.211a1.83 1.83 0 00.604-.516c.152-.203.234-.4.246-.591l.462.521a1.575 1.575 0 01-.222.545 2.607 2.607 0 01-1.201 1.025 2.328 2.328 0 01-.926.176c-.43 0-.807-.084-1.131-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.067-.638.2-.896.132-.262.324-.479.574-.65.25-.176.55-.31.902-.399.352-.09.744-.135 1.178-.135h1.26zm-31.811 19.07c.258 0 .496-.052.715-.158.219-.105.398-.25.539-.433.14-.188.22-.4.24-.639h1.031c-.02.375-.146.725-.38 1.049a2.6 2.6 0 01-.909.78 2.636 2.636 0 01-1.236.292c-.477 0-.893-.084-1.248-.252a2.472 2.472 0 01-.879-.691 3.088 3.088 0 01-.521-1.008 4.252 4.252 0 01-.17-1.213v-.246c0-.426.056-.828.17-1.207a3.08 3.08 0 01.521-1.014c.234-.293.527-.523.879-.691.355-.168.771-.252 1.248-.252.496 0 .93.101 1.3.305.372.199.663.472.874.82.215.344.332.734.351 1.172h-1.03a1.562 1.562 0 00-.224-.71 1.388 1.388 0 00-.515-.503 1.44 1.44 0 00-.756-.193c-.332 0-.611.066-.838.199-.223.129-.4.305-.533.527a2.46 2.46 0 00-.281.733 4.027 4.027 0 00-.082.814v.246c0 .278.027.55.082.82.054.27.146.514.275.733.133.219.31.394.533.527.227.13.508.194.844.194zm5.117.118l1.764-5.684h1.16l-2.543 7.319a4.019 4.019 0 01-.234.503 2.413 2.413 0 01-.363.522 1.728 1.728 0 01-.54.398 1.622 1.622 0 01-.744.159c-.086 0-.195-.012-.328-.036a3.183 3.183 0 01-.281-.058l-.006-.88c.031.005.08.009.147.013a1.745 1.745 0 00.773-.088.949.949 0 00.434-.323 1.92 1.92 0 00.31-.615l.451-1.23zm-1.295-5.684l1.647 4.922.281 1.143-.78.398-2.331-6.463h1.183zM25.762 67v9h-1.09v-9h1.09zm2.51 2.66V76h-1.09v-6.34h1.09zm-1.171-1.681c0-.176.052-.325.158-.446.11-.12.27-.181.48-.181.207 0 .365.06.475.181.113.121.17.27.17.445a.613.613 0 01-.17.434c-.11.117-.268.176-.475.176-.21 0-.37-.059-.48-.176a.638.638 0 01-.159-.434zm3.588 3.035V76h-1.084v-6.34h1.025l.059 1.354zm-.258 1.576l-.451-.018c.003-.433.068-.834.193-1.2.125-.372.3-.694.527-.968a2.35 2.35 0 011.858-.861c.312 0 .593.043.843.129.25.082.463.215.64.398.179.184.316.422.41.715.093.29.14.643.14 1.06V76H33.5v-4.166c0-.332-.049-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.739.17-.219.113-.408.27-.568.469-.156.199-.28.427-.37.685a2.504 2.504 0 00-.128.809zm9.394 2.18V67h1.09v9h-.996l-.093-1.23zM35.56 72.9v-.123c0-.484.058-.924.176-1.318.12-.398.29-.74.51-1.025.222-.286.486-.504.79-.657a2.25 2.25 0 011.032-.234c.398 0 .746.07 1.043.21.3.138.554.339.761.604.211.262.377.579.498.95.122.37.206.79.252 1.26v.539a5.523 5.523 0 01-.252 1.253 2.958 2.958 0 01-.498.95 2.086 2.086 0 01-.761.603c-.301.137-.653.205-1.055.205a2.18 2.18 0 01-1.02-.24 2.408 2.408 0 01-.79-.674 3.284 3.284 0 01-.51-1.02 4.489 4.489 0 01-.176-1.283zm1.09-.123v.123c0 .317.031.614.093.891.067.277.168.522.305.732.137.211.31.377.522.499.21.117.462.175.755.175.36 0 .655-.076.885-.228.235-.153.422-.354.563-.604.14-.25.25-.521.328-.814v-1.412a3.125 3.125 0 00-.205-.621 1.913 1.913 0 00-.34-.54 1.47 1.47 0 00-.51-.38 1.65 1.65 0 00-.709-.141 1.5 1.5 0 00-.767.188c-.211.12-.385.289-.522.503a2.33 2.33 0 00-.305.739 4.045 4.045 0 00-.093.89zm8.176 3.34c-.442 0-.842-.074-1.202-.223a2.723 2.723 0 01-.92-.638 2.841 2.841 0 01-.585-.973 3.568 3.568 0 01-.205-1.23v-.246c0-.516.076-.975.228-1.377.152-.407.36-.75.621-1.032a2.66 2.66 0 01.89-.638 2.557 2.557 0 011.032-.217c.453 0 .844.078 1.172.234.332.157.604.375.814.657.211.277.368.605.47.984a4.7 4.7 0 01.151 1.23v.487h-4.734v-.885h3.65v-.082a2.701 2.701 0 00-.175-.82 1.474 1.474 0 00-.469-.657c-.215-.172-.508-.257-.879-.257a1.475 1.475 0 00-1.213.615 2.3 2.3 0 00-.346.744c-.081.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.491.37.69.164.2.361.356.591.47.235.113.5.17.797.17.383 0 .707-.079.973-.235.266-.156.498-.365.697-.627l.657.522c-.137.207-.311.404-.522.591a2.49 2.49 0 01-.78.457 3.017 3.017 0 01-1.083.176zm4.408-5.46V76H48.15v-6.34h1.055l.03.996zm1.98-1.032l-.005 1.008a1.568 1.568 0 00-.258-.035 2.711 2.711 0 00-.27-.012c-.25 0-.47.039-.662.117a1.372 1.372 0 00-.486.328 1.58 1.58 0 00-.316.504 2.425 2.425 0 00-.147.633l-.305.176c0-.383.038-.742.112-1.078.078-.336.197-.633.357-.891.16-.262.363-.465.61-.61a1.713 1.713 0 011.16-.193.801.801 0 01.21.053z"
        fill="#000"
      />
    </Svg>
  )
}

export default GBUDComponent
