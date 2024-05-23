import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function ETDComponent(props) {
  return (
    <Svg
      width={65}
      height={80}
      viewBox="0 0 65 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <Rect x={12} width={40} height={40} rx={20} fill="#1C439A" />
      <G clipPath="url(#clip0_993_6387)">
        <Path
          d="M43.345 19.917v-3.635a.631.631 0 00-.631-.631H31.897a.631.631 0 000 1.262h7.75l-7.75 3.332-9.22-3.963 9.22-3.964 10.318 4.492a.631.631 0 10.499-1.16l-10.568-4.599a.631.631 0 00-.499 0l-10.817 4.65a.631.631 0 000 1.16l10.817 4.651a.632.632 0 00.499 0l5.954-2.56v6.357c-3.474 3.214-8.932 3.214-12.406 0v-7.25a.631.631 0 00-1.263 0v7.52c0 .17.069.332.19.45A10.337 10.337 0 0031.897 29c2.738 0 5.322-1.055 7.276-2.97a.631.631 0 00.19-.451v-7.17l2.72-1.169v2.677c-.514.238-.872.76-.872 1.363 0 .62.462 2.248 1.503 2.248 1.04 0 1.503-1.629 1.503-2.248 0-.603-.358-1.124-.872-1.363zm-.631 2.178c-.123-.24-.24-.613-.24-.815a.241.241 0 01.48 0c0 .202-.117.575-.24.815z"
          fill="white"
        />
      </G>
      <Path
        opacity={0.6}
        d="M13.966 59.08V60H9.448v-.92h4.518zm-4.29-7.611V60h-1.13v-8.531h1.13zm3.692 3.668v.92h-3.92v-.92h3.92zm.54-3.668v.925h-4.46v-.925h4.46zm4.765 7.3V51h1.09v9h-.996l-.094-1.23zM14.408 56.9v-.123c0-.484.058-.924.175-1.318.121-.399.291-.74.51-1.025.223-.286.486-.504.791-.657a2.25 2.25 0 011.031-.234c.399 0 .746.07 1.043.21.301.138.555.339.762.604.21.262.377.578.498.95.121.37.205.79.252 1.26v.538a5.523 5.523 0 01-.252 1.254 2.958 2.958 0 01-.498.95c-.207.261-.46.463-.762.603-.3.137-.652.205-1.054.205a2.18 2.18 0 01-1.02-.24 2.407 2.407 0 01-.791-.674 3.284 3.284 0 01-.51-1.02 4.489 4.489 0 01-.175-1.283zm1.09-.123v.123c0 .317.03.614.093.891.067.277.168.522.305.732.136.211.31.377.521.498.211.118.463.176.756.176.36 0 .654-.076.885-.228.234-.153.422-.354.562-.604.141-.25.25-.521.328-.814v-1.412a3.125 3.125 0 00-.205-.621 1.913 1.913 0 00-.34-.54 1.47 1.47 0 00-.51-.38 1.65 1.65 0 00-.708-.141 1.5 1.5 0 00-.768.188c-.21.12-.385.289-.521.503a2.332 2.332 0 00-.305.739 4.045 4.045 0 00-.094.89zm9.423 1.758V53.66h1.09V60h-1.037l-.053-1.465zm.205-1.336l.452-.011c0 .421-.045.812-.135 1.171a2.52 2.52 0 01-.422.926 1.995 1.995 0 01-.768.615c-.316.145-.7.217-1.154.217-.308 0-.592-.045-.85-.135a1.697 1.697 0 01-.656-.416 1.894 1.894 0 01-.427-.732 3.534 3.534 0 01-.147-1.084v-4.09h1.084v4.102c0 .285.031.521.094.709.066.183.154.33.263.44.114.105.239.179.375.222.141.043.286.064.434.064.461 0 .826-.088 1.096-.263.27-.18.463-.42.58-.721.12-.305.181-.643.181-1.014zm4.667 2.028c.258 0 .496-.053.715-.159.218-.105.398-.25.539-.433.14-.188.22-.4.24-.639h1.031c-.02.375-.146.725-.38 1.049a2.6 2.6 0 01-.909.78 2.636 2.636 0 01-1.236.292c-.477 0-.893-.084-1.248-.252a2.473 2.473 0 01-.88-.691 3.088 3.088 0 01-.52-1.008 4.252 4.252 0 01-.17-1.213v-.246c0-.426.056-.828.17-1.207a3.08 3.08 0 01.52-1.014c.235-.293.528-.523.88-.691.355-.168.771-.252 1.248-.252.496 0 .93.102 1.3.305.372.199.663.472.873.82.215.344.332.734.352 1.172h-1.031a1.56 1.56 0 00-.223-.71 1.387 1.387 0 00-.515-.503 1.44 1.44 0 00-.756-.193c-.332 0-.612.066-.838.199-.223.129-.4.304-.533.527a2.46 2.46 0 00-.282.733 4.027 4.027 0 00-.082.814v.246c0 .277.028.55.082.82.055.27.147.514.276.733.133.219.31.394.533.527.226.13.508.194.844.194zm7.074-.311v-3.264c0-.25-.05-.467-.152-.65a.996.996 0 00-.446-.434c-.199-.101-.445-.152-.738-.152-.273 0-.514.047-.72.14a1.255 1.255 0 00-.481.37.809.809 0 00-.17.492h-1.084c0-.227.059-.451.176-.674a1.97 1.97 0 01.504-.603c.222-.184.488-.328.797-.434.312-.11.66-.164 1.043-.164.46 0 .867.078 1.218.234.356.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.018.436.053.674.039.238.096.443.17.615V60h-1.131a2.022 2.022 0 01-.129-.498 4.011 4.011 0 01-.047-.586zm.188-2.76l.011.762h-1.095c-.309 0-.584.025-.827.076a1.89 1.89 0 00-.609.217 1.03 1.03 0 00-.375.37.978.978 0 00-.129.509c0 .2.045.38.135.545a.98.98 0 00.404.392c.184.094.408.141.674.141.332 0 .625-.07.879-.211a1.83 1.83 0 00.604-.516c.152-.203.234-.4.246-.591l.462.521a1.572 1.572 0 01-.222.545 2.607 2.607 0 01-1.201 1.025 2.328 2.328 0 01-.926.176c-.43 0-.807-.084-1.131-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.067-.638.2-.896a1.73 1.73 0 01.574-.65c.25-.176.55-.31.902-.399.352-.09.744-.135 1.178-.135h1.26zm4.847-2.496v.832h-3.427v-.832h3.427zm-2.267-1.54h1.084v6.31c0 .215.033.377.1.486.066.11.152.182.257.217.106.035.219.052.34.052.09 0 .184-.007.281-.023.102-.02.178-.035.229-.047l.006.885c-.086.027-.2.053-.34.076a2.588 2.588 0 01-.498.041c-.266 0-.51-.052-.733-.158a1.179 1.179 0 01-.533-.527c-.129-.25-.193-.586-.193-1.008v-6.305zm4.309 1.54V60h-1.09v-6.34h1.09zm-1.172-1.681c0-.176.053-.325.158-.446.11-.12.27-.181.48-.181.208 0 .366.06.475.181.113.121.17.27.17.445a.613.613 0 01-.17.434c-.11.117-.267.176-.474.176-.212 0-.372-.059-.481-.176a.638.638 0 01-.158-.434zm2.217 4.921v-.134c0-.457.066-.881.199-1.272a3.02 3.02 0 01.574-1.025c.25-.293.553-.52.908-.68a2.819 2.819 0 011.196-.246c.445 0 .845.082 1.2.246.36.16.665.387.915.68.254.289.447.63.58 1.025.133.39.2.815.2 1.272v.134c0 .457-.067.881-.2 1.272-.133.39-.326.732-.58 1.025a2.66 2.66 0 01-.908.68c-.352.16-.75.24-1.196.24-.445 0-.845-.08-1.2-.24a2.72 2.72 0 01-.915-.68 3.098 3.098 0 01-.574-1.025c-.133-.39-.2-.815-.2-1.272zm1.084-.134v.134c0 .317.037.616.111.897.074.277.186.523.334.738.152.215.342.385.568.51.227.121.49.182.791.182.297 0 .557-.061.78-.182.226-.125.414-.295.562-.51.149-.215.26-.46.334-.738.078-.281.117-.58.117-.897v-.134c0-.313-.039-.608-.117-.885a2.28 2.28 0 00-.34-.744 1.615 1.615 0 00-.562-.516 1.578 1.578 0 00-.785-.187c-.297 0-.559.062-.785.187-.223.125-.41.297-.563.516-.148.215-.26.463-.334.744a3.41 3.41 0 00-.111.885zm6.723-1.752V60h-1.084v-6.34h1.025l.059 1.354zm-.258 1.576l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.3-.694.527-.968a2.348 2.348 0 011.858-.861c.312 0 .593.043.843.129.25.082.463.215.64.398.179.184.316.422.41.715.093.29.14.643.14 1.06V60h-1.09v-4.166c0-.332-.049-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.739.17-.218.113-.408.27-.568.469-.156.199-.28.427-.37.685a2.507 2.507 0 00-.128.809zM22.35 67.469V76h-1.13v-8.531h1.13zm3.575 3.838v.925h-3.82v-.925h3.82zm.58-3.838v.925h-4.4v-.925h4.4zm3.277 8.648c-.441 0-.842-.074-1.201-.223a2.723 2.723 0 01-.92-.638 2.841 2.841 0 01-.586-.973 3.568 3.568 0 01-.205-1.23v-.246c0-.516.076-.975.229-1.377.152-.407.359-.75.62-1.032a2.66 2.66 0 01.891-.638 2.557 2.557 0 011.031-.217c.454 0 .844.078 1.172.234.332.157.604.375.815.657.21.277.367.605.469.984a4.7 4.7 0 01.152 1.23v.487h-4.735v-.885h3.65v-.082a2.701 2.701 0 00-.175-.82 1.474 1.474 0 00-.469-.657c-.215-.172-.507-.257-.879-.257a1.475 1.475 0 00-1.212.615 2.3 2.3 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.04.584.123.85.086.261.209.491.369.69.164.2.361.356.592.47.234.113.5.17.797.17.383 0 .707-.079.972-.235.266-.156.498-.365.698-.627l.656.522c-.137.207-.31.404-.522.591a2.49 2.49 0 01-.779.457 3.017 3.017 0 01-1.084.176zm5.955 0c-.441 0-.841-.074-1.2-.223a2.722 2.722 0 01-.92-.638 2.841 2.841 0 01-.587-.973 3.566 3.566 0 01-.205-1.23v-.246c0-.516.076-.975.229-1.377.152-.407.36-.75.62-1.032a2.66 2.66 0 01.892-.638 2.557 2.557 0 011.03-.217c.454 0 .844.078 1.173.234.332.157.603.375.814.657.211.277.367.605.469.984.101.375.152.785.152 1.23v.487h-4.734v-.885h3.65v-.082a2.701 2.701 0 00-.176-.82 1.474 1.474 0 00-.468-.657c-.215-.172-.508-.257-.88-.257a1.475 1.475 0 00-1.212.615 2.3 2.3 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.491.37.69.163.2.36.356.591.47.234.113.5.17.797.17.383 0 .707-.079.973-.235.265-.156.498-.365.697-.627l.656.522c-.137.207-.31.404-.521.591a2.49 2.49 0 01-.78.457 3.017 3.017 0 01-1.084.176zm7.016-1.799c0-.156-.035-.3-.105-.433-.067-.137-.205-.26-.416-.37-.207-.113-.52-.21-.938-.292a7.455 7.455 0 01-.955-.264 2.898 2.898 0 01-.72-.37 1.547 1.547 0 01-.452-.509 1.421 1.421 0 01-.158-.686c0-.25.055-.486.164-.709.113-.222.272-.42.475-.591.207-.172.455-.307.744-.404.289-.098.611-.147.967-.147.508 0 .941.09 1.3.27.36.18.635.42.827.72.191.297.287.627.287.99H42.69a.93.93 0 00-.158-.51 1.167 1.167 0 00-.452-.415 1.456 1.456 0 00-.72-.164c-.301 0-.545.047-.733.14a.94.94 0 00-.404.346.87.87 0 00-.065.762c.044.09.118.174.223.252.106.074.254.144.446.21.19.067.435.133.732.2.52.117.947.258 1.283.422.336.164.586.365.75.603.164.238.246.528.246.867a1.69 1.69 0 01-.674 1.36 2.474 2.474 0 01-.773.386c-.297.09-.63.135-1.002.135-.559 0-1.031-.1-1.418-.299-.387-.199-.68-.457-.879-.773a1.85 1.85 0 01-.299-1.002h1.09c.016.297.102.533.258.709.156.172.348.295.574.37.227.07.451.105.674.105.297 0 .545-.04.744-.118.203-.078.357-.185.463-.322a.747.747 0 00.158-.469z"
        fill="#000"
      />
      <Defs>
        <ClipPath id="clip0_993_6387">
          <Path fill="#fff" transform="translate(20.333 8)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ETDComponent