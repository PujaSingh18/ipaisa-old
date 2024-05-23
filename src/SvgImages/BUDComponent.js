import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function BUDComponent(props) {
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
        d="M22.741 24.077c0-.158.128-.287.286-.287h16.217c.157 0 .285.129.285.287v5.532a.286.286 0 01-.286.286H23.027a.286.286 0 01-.286-.286v-5.532z"
        fill="white"
      />
      <Path
        d="M35.714 23.79H23.027a.286.286 0 00-.286.287v5.532c0 .158.128.286.286.286h16.216a.286.286 0 00.286-.286v-5.532a.286.286 0 00-.286-.287h-3.53zm0 0v-7.249"
        stroke="white"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
      <Path
        d="M25.796 26.843h.008M28.849 26.843h.008"
        stroke="#1C439A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M31.284 11.357a8.132 8.132 0 019.303 0M33.123 13.267c1.748-1.001 3.883-1.001 5.625 0"
        stroke="white"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity={0.6}
        d="M8.542 56.01H6.38l-.012-.908h1.963c.324 0 .608-.055.85-.164.242-.11.43-.266.562-.47a1.31 1.31 0 00.205-.738c0-.312-.06-.566-.181-.761a1.004 1.004 0 00-.545-.434c-.242-.094-.55-.14-.926-.14H6.632V60h-1.13v-8.531h2.794c.438 0 .828.045 1.172.134.344.087.635.223.873.41.242.184.426.419.55.704.126.285.188.627.188 1.025 0 .352-.09.67-.27.955-.179.281-.429.512-.75.692-.316.18-.687.295-1.113.345l-.404.276zM8.49 60H5.935l.638-.92H8.49c.36 0 .664-.062.914-.187.254-.125.448-.301.58-.528.133-.23.2-.502.2-.814 0-.317-.057-.59-.17-.82a1.175 1.175 0 00-.533-.534c-.243-.125-.555-.187-.938-.187H6.931l.012-.908h2.203l.24.328c.41.035.758.152 1.043.351.285.196.502.446.65.75.153.305.229.64.229 1.008 0 .531-.117.98-.352 1.348-.23.363-.556.64-.978.832-.422.187-.918.281-1.489.281zm5-5.344V60h-1.083v-6.34h1.054l.03.996zm1.981-1.031l-.006 1.008a1.566 1.566 0 00-.258-.035 2.71 2.71 0 00-.27-.012c-.25 0-.47.039-.661.117a1.372 1.372 0 00-.486.328c-.133.14-.239.309-.317.504a2.42 2.42 0 00-.146.633l-.305.176c0-.383.037-.742.111-1.078.078-.336.197-.633.358-.891.16-.262.363-.465.609-.61a1.713 1.713 0 011.16-.193.802.802 0 01.211.053zm.19 3.275v-.134c0-.457.066-.881.199-1.272a3.02 3.02 0 01.574-1.025c.25-.293.553-.52.908-.68a2.819 2.819 0 011.196-.246c.445 0 .845.082 1.2.246.36.16.665.387.915.68.254.289.447.63.58 1.025.133.39.2.815.2 1.272v.134c0 .457-.067.881-.2 1.272-.133.39-.326.732-.58 1.025-.25.29-.553.516-.908.68-.352.16-.75.24-1.196.24-.445 0-.845-.08-1.2-.24a2.72 2.72 0 01-.915-.68 3.098 3.098 0 01-.574-1.025c-.133-.39-.2-.815-.2-1.272zm1.084-.134v.134c0 .317.037.616.111.897.074.277.186.523.334.738.152.215.342.385.568.51.227.121.49.182.791.182.297 0 .557-.061.78-.182.226-.125.414-.295.562-.51a2.36 2.36 0 00.334-.738c.078-.281.117-.58.117-.897v-.134c0-.313-.039-.608-.117-.885a2.28 2.28 0 00-.34-.744 1.617 1.617 0 00-.562-.516 1.578 1.578 0 00-.785-.187c-.297 0-.559.062-.785.187-.223.125-.41.297-.563.516-.148.215-.26.463-.334.744a3.406 3.406 0 00-.111.885zm9.377 2.15v-3.264c0-.25-.05-.467-.152-.65a.996.996 0 00-.446-.434 1.613 1.613 0 00-.738-.152c-.273 0-.514.047-.72.14a1.255 1.255 0 00-.481.37.809.809 0 00-.17.492H22.33c0-.227.059-.451.176-.674a1.97 1.97 0 01.504-.603c.222-.184.488-.328.796-.434.313-.11.66-.164 1.043-.164.461 0 .868.078 1.22.234.355.157.632.393.831.71.203.312.305.704.305 1.177v2.953c0 .211.018.436.053.674.039.238.095.443.17.615V60h-1.131a2.022 2.022 0 01-.13-.498 4.011 4.011 0 01-.046-.586zm.187-2.76l.012.762h-1.096c-.308 0-.584.025-.826.076a1.89 1.89 0 00-.61.217 1.03 1.03 0 00-.374.37.978.978 0 00-.129.509c0 .2.045.38.135.545a.98.98 0 00.404.392c.184.094.408.141.674.141.332 0 .625-.07.879-.211a1.83 1.83 0 00.603-.516c.153-.203.235-.4.246-.591l.463.521a1.575 1.575 0 01-.222.545 2.607 2.607 0 01-1.202 1.025 2.328 2.328 0 01-.925.176c-.43 0-.807-.084-1.131-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.067-.638.2-.896a1.73 1.73 0 01.573-.65c.25-.176.551-.31.903-.399.352-.09.744-.135 1.178-.135h1.26zm6.19 2.614V51h1.09v9h-.996l-.094-1.23zm-4.266-1.87v-.123c0-.484.059-.924.176-1.318a3.19 3.19 0 01.51-1.025c.223-.286.486-.504.791-.657a2.25 2.25 0 011.031-.234c.399 0 .746.07 1.043.21.301.138.555.339.762.604.21.262.377.578.498.95.121.37.205.79.252 1.26v.538a5.518 5.518 0 01-.252 1.254 2.957 2.957 0 01-.498.95c-.207.261-.461.463-.762.603-.3.137-.652.205-1.055.205-.37 0-.71-.08-1.019-.24a2.406 2.406 0 01-.791-.674 3.282 3.282 0 01-.51-1.02 4.489 4.489 0 01-.176-1.283zm1.09-.123v.123c0 .317.032.614.094.891.066.277.168.522.305.732.136.211.31.377.521.498.211.118.463.176.756.176.36 0 .654-.076.885-.228.234-.153.422-.354.562-.604.14-.25.25-.521.328-.814v-1.412a3.125 3.125 0 00-.205-.621 1.916 1.916 0 00-.34-.54 1.469 1.469 0 00-.51-.38c-.198-.094-.435-.141-.708-.141a1.5 1.5 0 00-.768.188c-.21.12-.385.289-.521.503a2.332 2.332 0 00-.305.739 4.045 4.045 0 00-.094.89zM34.862 51h1.09v7.77L35.857 60h-.996v-9zm5.373 5.777v.123c0 .461-.055.89-.164 1.284-.11.39-.27.73-.481 1.02-.21.288-.469.513-.773.673-.305.16-.655.24-1.05.24a2.57 2.57 0 01-1.06-.205c-.3-.14-.554-.342-.761-.603a3.12 3.12 0 01-.498-.95 5.983 5.983 0 01-.252-1.254v-.539a5.99 5.99 0 01.252-1.26 3.12 3.12 0 01.498-.949c.207-.265.46-.466.761-.603.301-.14.65-.211 1.05-.211.398 0 .751.078 1.06.234.308.153.566.371.773.657.211.285.371.627.48 1.025.11.394.165.834.165 1.318zm-1.09.123v-.123c0-.316-.03-.613-.088-.89a2.308 2.308 0 00-.281-.739 1.4 1.4 0 00-.51-.504c-.211-.124-.47-.187-.78-.187a1.69 1.69 0 00-.714.14c-.2.094-.37.221-.51.381-.14.157-.256.337-.346.54-.086.199-.15.406-.193.62v1.413c.062.273.164.537.305.79.144.25.336.456.574.616.242.16.54.24.896.24a1.5 1.5 0 00.75-.175c.211-.122.381-.288.51-.499.133-.21.23-.455.293-.732.063-.277.094-.574.094-.89zm5.791 2.016v-3.264c0-.25-.05-.467-.152-.65a.996.996 0 00-.446-.434c-.199-.101-.445-.152-.738-.152-.273 0-.514.047-.72.14a1.255 1.255 0 00-.481.37.81.81 0 00-.17.492h-1.084c0-.227.058-.451.176-.674.117-.222.285-.424.504-.603a2.52 2.52 0 01.796-.434c.313-.11.66-.164 1.043-.164.461 0 .868.078 1.22.234.355.157.632.393.831.71.203.312.305.704.305 1.177v2.953c0 .211.017.436.053.674.039.238.095.443.17.615V60h-1.131a2.027 2.027 0 01-.13-.498 4.024 4.024 0 01-.046-.586zm.188-2.76l.011.762H44.04c-.308 0-.584.025-.826.076-.242.047-.445.12-.61.217a.979.979 0 00-.504.879c.001.2.046.38.136.545a.98.98 0 00.404.392c.184.094.408.141.674.141.332 0 .625-.07.879-.211.254-.14.455-.313.603-.516.153-.203.235-.4.246-.591l.463.521a1.572 1.572 0 01-.222.545 2.625 2.625 0 01-1.201 1.025 2.329 2.329 0 01-.926.176c-.43 0-.807-.084-1.131-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.067-.638.2-.896a1.73 1.73 0 01.574-.65c.25-.176.55-.31.902-.399.352-.09.744-.135 1.178-.135h1.26zm3.277-1.142V60h-1.084v-6.34h1.025l.059 1.354zm-.258 1.576l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.301-.694.528-.968a2.35 2.35 0 011.857-.861c.313 0 .594.043.844.129.25.082.463.215.639.398.18.184.316.422.41.715.094.29.14.643.14 1.06V60h-1.09v-4.166c0-.332-.048-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.738.17-.22.113-.409.27-.569.469-.156.199-.28.427-.369.685a2.507 2.507 0 00-.129.809zm9.395 2.18V51h1.09v9h-.996l-.094-1.23zm-4.266-1.87v-.123c0-.484.059-.924.176-1.318.121-.399.291-.74.51-1.025.223-.286.486-.504.79-.657a2.25 2.25 0 011.032-.234c.398 0 .746.07 1.043.21.3.138.555.339.762.604.21.262.377.578.498.95.12.37.205.79.252 1.26v.538a5.523 5.523 0 01-.252 1.254 2.956 2.956 0 01-.498.95c-.207.261-.461.463-.762.603-.3.137-.652.205-1.055.205-.37 0-.71-.08-1.02-.24a2.407 2.407 0 01-.79-.674 3.284 3.284 0 01-.51-1.02 4.489 4.489 0 01-.176-1.283zm1.09-.123v.123c0 .317.031.614.094.891.066.277.168.522.305.732.136.211.31.377.521.498.211.118.463.176.756.176.36 0 .654-.076.885-.228.234-.153.422-.354.562-.604.14-.25.25-.521.328-.814v-1.412a3.125 3.125 0 00-.205-.621 1.913 1.913 0 00-.34-.54 1.468 1.468 0 00-.51-.38 1.65 1.65 0 00-.708-.141 1.5 1.5 0 00-.768.188c-.21.12-.385.289-.521.503a2.332 2.332 0 00-.305.739 4.045 4.045 0 00-.094.89z"
        fill="#000"
      />
    </Svg>
  )
}

export default BUDComponent
