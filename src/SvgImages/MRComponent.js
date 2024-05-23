import * as React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"

function MRComponent(props) {
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
        d="M32 28h.013m-1.346-16h2.666m-5.066 20h7.466c1.494 0 2.24 0 2.811-.29.502-.256.91-.664 1.165-1.166.291-.57.291-1.317.291-2.81V12.266c0-1.494 0-2.24-.29-2.811a2.666 2.666 0 00-1.166-1.165C37.974 8 37.227 8 35.734 8h-7.467c-1.494 0-2.24 0-2.811.29-.502.256-.91.664-1.165 1.166-.291.57-.291 1.317-.291 2.81v15.467c0 1.494 0 2.24.29 2.811.256.502.664.91 1.166 1.165.57.291 1.317.291 2.81.291z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={31.634} cy={16.1623} r={1.16228} fill="white" />
      <Path
        d="M31.579 19.671L30 18.728l1.645-.833 1.622.833v5.33L31.58 25v-5.329z"
        fill="#fff"
      />
      <Path
        d="M16.443 51.469h1.095l2.795 6.955 2.79-6.955h1.101L20.755 60H19.9l-3.457-8.531zm-.358 0h.967l.158 5.203V60h-1.125v-8.531zm7.524 0h.967V60H23.45v-3.328l.158-5.203zm2.094 5.431v-.134c0-.457.066-.881.199-1.272a3.02 3.02 0 01.574-1.025c.25-.293.553-.52.908-.68a2.819 2.819 0 011.196-.246c.445 0 .845.082 1.2.246.36.16.665.387.915.68.254.289.447.63.58 1.025.133.39.2.815.2 1.272v.134c0 .457-.067.881-.2 1.272-.133.39-.326.732-.58 1.025-.25.29-.553.516-.908.68-.352.16-.75.24-1.196.24-.445 0-.845-.08-1.2-.24a2.719 2.719 0 01-.915-.68 3.098 3.098 0 01-.574-1.025c-.133-.39-.2-.815-.2-1.272zm1.084-.134v.134c0 .317.037.616.111.897.074.277.186.523.334.738.152.215.342.385.568.51.227.121.49.182.791.182.297 0 .557-.061.78-.182.226-.125.414-.295.562-.51.149-.215.26-.46.334-.738.078-.281.117-.58.117-.897v-.134c0-.313-.039-.608-.117-.885a2.277 2.277 0 00-.34-.744 1.615 1.615 0 00-.562-.516 1.577 1.577 0 00-.785-.187c-.297 0-.559.062-.785.187-.223.125-.41.297-.563.516-.148.215-.26.463-.334.744a3.41 3.41 0 00-.111.885zM32.42 51h1.09v7.77L33.416 60h-.996v-9zm5.373 5.777v.123c0 .461-.055.89-.164 1.284-.11.39-.27.73-.48 1.02-.212.288-.47.513-.774.673-.305.16-.654.24-1.049.24a2.57 2.57 0 01-1.06-.205c-.301-.14-.555-.342-.762-.603a3.12 3.12 0 01-.498-.95 5.983 5.983 0 01-.252-1.254v-.539a5.99 5.99 0 01.252-1.26 3.12 3.12 0 01.498-.949c.207-.265.46-.466.761-.603.301-.14.65-.211 1.05-.211.398 0 .751.078 1.06.234.308.153.566.371.773.657.211.285.371.627.48 1.025.11.394.165.834.165 1.318zm-1.09.123v-.123c0-.316-.03-.613-.088-.89a2.308 2.308 0 00-.281-.739 1.4 1.4 0 00-.51-.504c-.21-.124-.47-.187-.78-.187a1.69 1.69 0 00-.714.14c-.2.094-.37.221-.51.381-.14.157-.256.337-.346.54a3.1 3.1 0 00-.193.62v1.413c.063.273.164.537.305.79.144.25.336.456.574.616.242.16.541.24.896.24a1.5 1.5 0 00.75-.175c.211-.122.381-.288.51-.499.133-.21.23-.455.293-.732.063-.277.094-.574.094-.89zm3.23-3.24V60h-1.09v-6.34h1.09zm-1.171-1.681c0-.176.053-.325.158-.446.11-.12.27-.181.48-.181.207 0 .366.06.475.181.113.121.17.27.17.445a.613.613 0 01-.17.434c-.11.117-.268.176-.475.176-.21 0-.37-.059-.48-.176a.638.638 0 01-.158-.434zM42.444 51v9h-1.09v-9h1.09zm3.963 9.117c-.442 0-.842-.074-1.201-.222a2.722 2.722 0 01-.92-.64 2.842 2.842 0 01-.586-.972 3.568 3.568 0 01-.206-1.23v-.246c0-.516.077-.975.23-1.377.151-.407.358-.75.62-1.032a2.66 2.66 0 01.89-.638 2.557 2.557 0 011.032-.217c.453 0 .844.078 1.172.234.332.157.603.375.814.657.211.277.367.605.47.984.1.375.151.785.151 1.23v.487H44.14v-.885h3.65v-.082a2.707 2.707 0 00-.175-.82 1.475 1.475 0 00-.47-.657c-.214-.172-.507-.257-.878-.257a1.475 1.475 0 00-1.213.615 2.304 2.304 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.492.37.69.164.2.36.356.591.47.235.113.5.17.797.17.383 0 .707-.079.973-.235.265-.156.498-.365.697-.627l.656.522c-.136.207-.31.404-.521.591-.211.188-.47.34-.78.457-.304.118-.665.176-1.083.176zM9.305 67.47h2.824c.64 0 1.182.097 1.623.293.445.195.783.484 1.014.867.234.379.351.846.351 1.4 0 .39-.08.748-.24 1.073-.156.32-.383.593-.68.82a3 3 0 01-1.054.498l-.317.123h-2.654l-.012-.92h2.004c.407 0 .745-.07 1.014-.21.27-.145.473-.339.61-.581.136-.242.204-.51.204-.803a1.83 1.83 0 00-.193-.861 1.29 1.29 0 00-.61-.568c-.273-.137-.626-.206-1.06-.206h-1.693V76H9.305v-8.531zM14.29 76l-2.074-3.867 1.178-.006 2.103 3.803V76h-1.207zm4.467.117c-.441 0-.841-.074-1.2-.223a2.722 2.722 0 01-.92-.638 2.843 2.843 0 01-.587-.973 3.568 3.568 0 01-.205-1.23v-.246c0-.516.076-.975.229-1.377.152-.407.36-.75.62-1.032a2.66 2.66 0 01.891-.638 2.557 2.557 0 011.032-.217c.453 0 .843.078 1.172.234.332.157.603.375.814.657.21.277.367.605.469.984.101.375.152.785.152 1.23v.487h-4.734v-.885h3.65v-.082a2.701 2.701 0 00-.176-.82 1.474 1.474 0 00-.468-.657c-.215-.172-.508-.257-.88-.257a1.475 1.475 0 00-1.212.615 2.3 2.3 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.209.491.37.69.163.2.36.356.591.47.234.113.5.17.797.17.383 0 .707-.079.973-.235.265-.156.498-.365.697-.627l.656.522c-.137.207-.31.404-.521.591a2.49 2.49 0 01-.78.457 3.017 3.017 0 01-1.084.176zm5.862-.89c.258 0 .496-.053.715-.159.218-.105.398-.25.539-.433.14-.188.22-.4.24-.639h1.031c-.02.375-.146.725-.38 1.049a2.6 2.6 0 01-.909.78 2.636 2.636 0 01-1.236.292c-.477 0-.893-.084-1.248-.252a2.472 2.472 0 01-.88-.691 3.088 3.088 0 01-.52-1.008 4.252 4.252 0 01-.17-1.213v-.246c0-.426.056-.828.17-1.207a3.08 3.08 0 01.52-1.014c.235-.293.528-.523.88-.691.355-.168.771-.252 1.248-.252.496 0 .93.101 1.3.305.372.199.663.472.874.82.215.344.332.734.351 1.172h-1.031a1.562 1.562 0 00-.223-.71 1.388 1.388 0 00-.515-.503 1.44 1.44 0 00-.756-.193c-.332 0-.611.066-.838.199-.223.129-.4.305-.533.527a2.46 2.46 0 00-.281.733 4.027 4.027 0 00-.083.814v.246c0 .278.028.55.082.82.055.27.147.514.276.733.133.219.31.394.533.527.227.13.508.194.844.194zM29.04 67v9h-1.084v-9h1.084zm-.258 5.59l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.301-.694.528-.968a2.349 2.349 0 011.857-.861c.313 0 .594.043.844.129.25.082.463.215.639.398.18.184.316.422.41.715.093.29.14.643.14 1.06V76h-1.09v-4.166c0-.332-.048-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.738.17-.22.113-.409.27-.569.469-.156.199-.28.427-.369.685a2.507 2.507 0 00-.129.809zm9.114 2.326v-3.264c0-.25-.051-.466-.153-.65a.997.997 0 00-.445-.434 1.614 1.614 0 00-.738-.152c-.274 0-.514.047-.721.14a1.255 1.255 0 00-.48.37.809.809 0 00-.17.492h-1.084c0-.227.058-.451.175-.674.118-.222.285-.424.504-.603.223-.184.489-.329.797-.434.313-.11.66-.164 1.043-.164.461 0 .867.078 1.219.234.355.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.017.436.052.674.04.238.096.443.17.615V76h-1.13a2.022 2.022 0 01-.13-.498 4.011 4.011 0 01-.046-.586zm.187-2.76l.012.762h-1.096c-.309 0-.584.025-.826.076-.242.047-.445.12-.61.217a1.03 1.03 0 00-.374.37.978.978 0 00-.13.509c0 .2.046.38.135.545a.98.98 0 00.405.392c.183.094.408.141.674.141.332 0 .625-.07.878-.211a1.83 1.83 0 00.604-.516c.152-.203.234-.4.246-.591l.463.521a1.575 1.575 0 01-.223.545 2.607 2.607 0 01-1.2 1.025 2.328 2.328 0 01-.927.176c-.43 0-.806-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.066-.638.199-.896.133-.262.324-.479.574-.65.25-.176.551-.31.903-.399.351-.09.744-.135 1.177-.135h1.26zm3.278-1.5V76h-1.084v-6.34h1.054l.03.996zm1.98-1.031l-.006 1.008a1.57 1.57 0 00-.258-.035 2.713 2.713 0 00-.27-.012c-.25 0-.47.039-.661.117a1.372 1.372 0 00-.486.328c-.133.14-.239.309-.317.504a2.42 2.42 0 00-.146.633l-.305.176c0-.383.037-.742.111-1.078.078-.336.197-.633.358-.891a1.75 1.75 0 01.609-.61 1.713 1.713 0 011.16-.193.8.8 0 01.211.053zm4.584.035h.985v6.205c0 .559-.114 1.035-.34 1.43a2.212 2.212 0 01-.95.896c-.402.207-.867.311-1.394.311-.219 0-.477-.035-.773-.105a3.12 3.12 0 01-.867-.346 2.167 2.167 0 01-.71-.65l.569-.645c.266.32.543.543.832.668.293.125.582.187.867.187.344 0 .64-.064.89-.193s.444-.32.58-.574c.141-.25.212-.559.212-.926v-4.863l.1-1.395zM43.56 72.9v-.123c0-.484.057-.924.17-1.318.117-.398.283-.74.498-1.025a2.236 2.236 0 011.834-.891c.399 0 .746.07 1.043.21.3.138.555.339.762.604.21.262.377.579.498.95.12.37.205.79.252 1.26v.539a5.518 5.518 0 01-.252 1.253 2.957 2.957 0 01-.498.95c-.207.261-.461.463-.762.603-.3.137-.652.205-1.055.205-.379 0-.722-.08-1.03-.24a2.35 2.35 0 01-.786-.674 3.192 3.192 0 01-.504-1.02 4.633 4.633 0 01-.17-1.283zm1.084-.123v.123c0 .317.031.614.094.891.066.277.166.522.299.732.136.211.31.377.521.499.211.117.463.175.756.175.36 0 .656-.076.89-.228.235-.153.42-.354.557-.604.14-.25.25-.521.328-.814v-1.412a2.882 2.882 0 00-.199-.621 1.916 1.916 0 00-.34-.54 1.469 1.469 0 00-.51-.38 1.691 1.691 0 00-.714-.141 1.5 1.5 0 00-.768.188c-.21.12-.385.289-.521.503a2.42 2.42 0 00-.3.739 4.045 4.045 0 00-.093.89zm8.135 3.34c-.441 0-.842-.074-1.201-.223a2.723 2.723 0 01-.92-.638 2.841 2.841 0 01-.586-.973 3.568 3.568 0 01-.205-1.23v-.246c0-.516.076-.975.228-1.377.153-.407.36-.75.622-1.032a2.66 2.66 0 01.89-.638 2.557 2.557 0 011.031-.217c.454 0 .844.078 1.172.234.332.157.604.375.815.657.21.277.367.605.468.984a4.7 4.7 0 01.153 1.23v.487H50.51v-.885h3.65v-.082a2.704 2.704 0 00-.175-.82 1.475 1.475 0 00-.469-.657c-.215-.172-.508-.257-.879-.257a1.475 1.475 0 00-1.212.615 2.302 2.302 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.04.584.123.85.086.261.209.491.369.69.164.2.361.356.592.47.234.113.5.17.797.17.382 0 .707-.079.972-.235.266-.156.498-.365.697-.627l.657.522c-.137.207-.31.404-.522.591-.21.188-.47.34-.779.457a3.017 3.017 0 01-1.084.176z"
        fill="#000"
      />
    </Svg>
  )
}

export default MRComponent