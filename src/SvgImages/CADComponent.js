import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function CADComponent(props) {
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
    <Path
        d="M37.033 23.269H21.667a1 1 0 01-1-1V9a1 1 0 011-1h22a1 1 0 011 1v13.269a1 1 0 01-1 1h-2.269"
        stroke="white"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M34.288 19.266l-.365-.341-.88-.819-1.061-.986-.92-.856c-.15-.139-.296-.28-.448-.416l-.006-.007.147.357v-.288l-.503.503h.586c.201 0 .404.007.605-.002a2.645 2.645 0 002.235-1.402c.216-.414.332-.884.308-1.352a2.648 2.648 0 00-2.65-2.53h-1.339a.523.523 0 00-.356.147.508.508 0 000 .712c.099.09.22.147.356.147h1.271c.12 0 .238.003.355.018l-.133-.018c.189.025.373.075.549.149-.04-.018-.08-.035-.12-.05.172.073.333.167.48.28l-.1-.078c.142.112.27.24.382.383l-.079-.102c.114.148.208.309.282.48-.017-.04-.035-.08-.05-.12.073.177.123.361.148.55l-.018-.134c.024.185.024.373 0 .558l.018-.133a2.169 2.169 0 01-.149.549c.017-.04.035-.08.05-.12a2.215 2.215 0 01-.281.48l.079-.1c-.112.142-.24.27-.383.381l.102-.078a2.212 2.212 0 01-.48.281l.119-.05a2.17 2.17 0 01-.55.15l.134-.019c-.178.023-.358.018-.539.018H30.252a.51.51 0 00-.503.503v.28a.53.53 0 00.167.382l.193.179.842.782 1.116 1.039 1.006.935c.166.155.33.31.498.464l.007.006c.096.09.222.147.355.147.124 0 .271-.055.356-.147a.506.506 0 000-.712z"
        fill="white"
      />
      <Path
        d="M29.998 12.132h4.679c.216 0 .432.003.647 0h.01a.524.524 0 00.355-.147.508.508 0 000-.712.522.522 0 00-.356-.147h-4.678c-.216 0-.432-.003-.648 0h-.009a.524.524 0 00-.356.147.508.508 0 000 .712c.099.09.22.147.356.147zM29.998 14.273h4.679c.216 0 .432.003.647 0h.01a.524.524 0 00.355-.147.508.508 0 000-.712.522.522 0 00-.356-.147h-4.678c-.216 0-.432-.003-.648 0h-.009a.524.524 0 00-.356.147.508.508 0 000 .712c.099.09.22.147.356.147z"
        fill="white"
      />
      <Path
        d="M39.215 32a7.451 7.451 0 002.183-5.268V22.16A2.183 2.183 0 0039.215 20a2.17 2.17 0 00-2.183 2.183v3.268l-.228.115a3.543 3.543 0 00-1.954 3.166"
        stroke="white"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M28.302 26.697h-.75.75zm1.652 5.8a.75.75 0 001.06-1.062l-1.06 1.061zm-2.402-9.228v3.428h1.5V23.27h-1.5zm0 3.428c0 2.175.864 4.261 2.402 5.8l1.06-1.062a6.7 6.7 0 01-1.962-4.738h-1.5z"
        fill="white"
      />
      <Path
        opacity={0.6}
        d="M19.868 57.287h1.125a3.588 3.588 0 01-.462 1.447c-.25.426-.604.764-1.061 1.014-.457.246-1.027.37-1.71.37-.5 0-.956-.095-1.366-.282a3.035 3.035 0 01-1.049-.797 3.73 3.73 0 01-.68-1.248 5.328 5.328 0 01-.234-1.629v-.85c0-.597.078-1.138.234-1.622.16-.489.389-.907.686-1.255.3-.347.662-.615 1.084-.802a3.47 3.47 0 011.424-.281c.644 0 1.19.12 1.634.363.446.242.791.578 1.038 1.008.25.425.404.92.462 1.482h-1.125a3.134 3.134 0 00-.304-1.025 1.583 1.583 0 00-.633-.668c-.274-.157-.63-.235-1.072-.235-.38 0-.713.073-1.002.217a2.02 2.02 0 00-.721.615 2.864 2.864 0 00-.434.956 4.859 4.859 0 00-.146 1.236v.861c0 .418.043.81.129 1.178.09.367.224.69.404.967a2 2 0 00.686.656c.277.156.605.234.984.234.48 0 .863-.076 1.148-.228.286-.153.5-.371.645-.657.149-.285.254-.627.316-1.025zM23.14 51v9h-1.09v-9h1.09zm5.211 7.535V53.66h1.09V60h-1.037l-.053-1.465zm.205-1.336l.451-.011c0 .421-.044.812-.134 1.171a2.517 2.517 0 01-.422.926 1.995 1.995 0 01-.768.615c-.316.145-.7.217-1.154.217-.309 0-.592-.045-.85-.135a1.697 1.697 0 01-.656-.416 1.894 1.894 0 01-.428-.732 3.53 3.53 0 01-.146-1.084v-4.09h1.084v4.102c0 .285.031.521.094.709.066.183.154.33.263.44.114.105.239.179.375.222.14.043.285.064.434.064.46 0 .826-.088 1.096-.263.27-.18.462-.42.58-.721.12-.305.181-.643.181-1.014zM30.68 51h1.09v7.77L31.675 60h-.996v-9zm5.373 5.777v.123c0 .461-.055.89-.164 1.284-.11.39-.27.73-.48 1.02-.212.288-.47.513-.774.673-.305.16-.655.24-1.05.24-.401 0-.755-.068-1.06-.205-.3-.14-.554-.342-.761-.603a3.119 3.119 0 01-.498-.95 5.977 5.977 0 01-.252-1.254v-.539c.046-.468.13-.888.252-1.26.125-.37.29-.687.498-.949.207-.265.46-.466.761-.603.301-.14.65-.211 1.05-.211.398 0 .751.078 1.06.234.308.153.566.371.773.657.211.285.371.627.48 1.025.11.394.165.834.165 1.318zm-1.09.123v-.123c0-.316-.03-.613-.088-.89a2.306 2.306 0 00-.281-.739 1.401 1.401 0 00-.51-.504c-.211-.124-.47-.187-.78-.187a1.69 1.69 0 00-.714.14c-.2.094-.37.221-.51.381-.14.157-.256.337-.346.54-.086.199-.15.406-.193.62v1.413c.062.273.164.537.305.79.144.25.335.456.574.616.242.16.54.24.896.24a1.5 1.5 0 00.75-.175c.211-.122.381-.288.51-.499.133-.21.23-.455.293-.732.063-.277.094-.574.094-.89zm5.744 1.418c0-.156-.035-.3-.105-.433-.067-.137-.205-.26-.416-.37-.207-.113-.52-.21-.938-.292a7.449 7.449 0 01-.955-.264 2.894 2.894 0 01-.72-.37 1.549 1.549 0 01-.452-.509 1.421 1.421 0 01-.158-.685c0-.25.055-.487.164-.71.113-.222.271-.42.475-.591.207-.172.455-.307.744-.404.289-.098.611-.147.967-.147.507 0 .941.09 1.3.27.36.18.635.42.827.72.191.297.287.627.287.99h-1.084a.93.93 0 00-.159-.51 1.167 1.167 0 00-.45-.415 1.456 1.456 0 00-.721-.164c-.301 0-.545.047-.733.14a.94.94 0 00-.404.346.87.87 0 00-.065.762c.043.09.118.173.223.252.106.074.254.144.445.21.192.067.436.133.733.2.52.117.947.258 1.283.422.336.164.586.365.75.603.164.238.246.528.246.867a1.689 1.689 0 01-.674 1.36 2.474 2.474 0 01-.773.386c-.297.09-.631.135-1.002.135-.559 0-1.031-.1-1.418-.299-.387-.199-.68-.457-.879-.773a1.85 1.85 0 01-.299-1.002h1.09c.016.297.102.533.258.709.156.172.347.295.574.37.227.07.451.105.674.105.297 0 .545-.04.744-.118.203-.078.358-.185.463-.322a.747.747 0 00.158-.469zm6.245-3.052l1.277-.909c.246-.167.436-.335.568-.504.137-.171.206-.406.206-.703 0-.23-.09-.44-.27-.627-.18-.191-.434-.287-.762-.287-.226 0-.418.053-.574.159a.977.977 0 00-.352.421 1.358 1.358 0 00-.117.569c0 .175.043.357.13.545.085.187.204.383.357.586.152.203.326.418.521.644L51.973 60h-1.3l-3.311-3.96a47.443 47.443 0 01-.785-.944 4.676 4.676 0 01-.545-.838 1.92 1.92 0 01-.194-.838c0-.445.088-.82.264-1.125.18-.309.43-.543.75-.703.32-.16.695-.24 1.125-.24.418 0 .777.084 1.078.252.305.164.54.382.703.656.164.27.246.566.246.89 0 .274-.048.52-.146.739a2.066 2.066 0 01-.41.591c-.172.18-.373.356-.604.528l-1.693 1.26c-.281.207-.486.404-.615.591a1.703 1.703 0 00-.252.498c-.035.145-.053.26-.053.346 0 .277.06.531.182.762.12.23.304.416.55.556.25.137.563.206.938.206.328 0 .646-.075.955-.223.313-.152.592-.367.838-.645.246-.28.441-.615.586-1.002a3.62 3.62 0 00.222-1.294h.973c0 .386-.037.752-.111 1.095-.074.344-.19.664-.346.961-.152.293-.348.56-.586.803a.377.377 0 00-.082.123.378.378 0 01-.082.123 2.77 2.77 0 01-1.084.715 3.7 3.7 0 01-1.283.234c-.567 0-1.057-.103-1.47-.31a2.296 2.296 0 01-.95-.856 2.34 2.34 0 01-.334-1.248c0-.36.076-.676.229-.95.156-.273.369-.528.638-.767.274-.238.586-.478.938-.72zM7.297 68.225L4.473 76H3.318l3.252-8.531h.744l-.017.756zM9.664 76l-2.83-7.775-.018-.756h.745L10.824 76h-1.16zm-.146-3.158v.926H4.725v-.926h4.793zm5.568 1.476c0-.156-.035-.3-.105-.433-.067-.137-.205-.26-.416-.37-.207-.113-.52-.21-.938-.292a7.455 7.455 0 01-.955-.264 2.898 2.898 0 01-.72-.37 1.547 1.547 0 01-.452-.509 1.421 1.421 0 01-.158-.686c0-.25.055-.486.164-.709.113-.222.271-.42.475-.591.207-.172.455-.307.744-.404.289-.098.611-.147.967-.147.507 0 .941.09 1.3.27.36.18.635.42.826.72.192.297.288.627.288.99h-1.084a.93.93 0 00-.159-.51 1.166 1.166 0 00-.45-.415 1.456 1.456 0 00-.721-.164c-.301 0-.545.047-.733.14a.94.94 0 00-.404.346.87.87 0 00-.065.762c.043.09.118.174.223.252.106.074.254.144.445.21.192.067.436.133.733.2.52.117.947.258 1.283.422.336.164.586.365.75.603.164.238.246.528.246.867a1.69 1.69 0 01-.674 1.36 2.474 2.474 0 01-.773.386c-.297.09-.631.135-1.002.135-.559 0-1.031-.1-1.418-.299-.387-.199-.68-.457-.879-.773a1.85 1.85 0 01-.299-1.002h1.09c.016.297.102.533.258.709.156.172.347.295.574.37.227.07.451.105.674.105.297 0 .545-.04.744-.118.203-.078.357-.185.463-.322a.747.747 0 00.158-.469zm5.791 0c0-.156-.035-.3-.105-.433-.067-.137-.205-.26-.416-.37-.207-.113-.52-.21-.938-.292a7.449 7.449 0 01-.955-.264 2.894 2.894 0 01-.72-.37 1.548 1.548 0 01-.452-.509 1.421 1.421 0 01-.158-.686c0-.25.055-.486.164-.709a1.9 1.9 0 01.475-.591c.207-.172.455-.307.744-.404.29-.098.611-.147.967-.147.508 0 .941.09 1.3.27.36.18.635.42.827.72.191.297.287.627.287.99h-1.084a.93.93 0 00-.158-.51 1.167 1.167 0 00-.452-.415 1.456 1.456 0 00-.72-.164c-.301 0-.545.047-.733.14a.94.94 0 00-.404.346.87.87 0 00-.064.762c.043.09.117.174.222.252.106.074.254.144.446.21.191.067.435.133.732.2.52.117.947.258 1.283.422.336.164.586.365.75.603.164.238.246.528.246.867a1.69 1.69 0 01-.674 1.36 2.474 2.474 0 01-.773.386c-.297.09-.63.135-1.002.135-.559 0-1.031-.1-1.418-.299-.387-.199-.68-.457-.879-.773a1.85 1.85 0 01-.299-1.002h1.09c.016.297.102.533.258.709.156.172.348.295.574.37.227.07.451.105.674.105.297 0 .545-.04.744-.118.203-.078.358-.185.463-.322a.747.747 0 00.158-.469zM22.69 72.9v-.134c0-.457.066-.881.2-1.272.132-.394.323-.736.573-1.025.25-.293.553-.52.909-.68a2.819 2.819 0 011.195-.246c.445 0 .846.082 1.201.246.36.16.664.387.914.68.254.289.448.63.58 1.025.133.39.2.815.2 1.272v.134c0 .457-.067.881-.2 1.272-.133.39-.326.732-.58 1.025-.25.29-.552.516-.908.68-.352.16-.75.24-1.195.24-.446 0-.846-.08-1.201-.24a2.72 2.72 0 01-.915-.68 3.1 3.1 0 01-.574-1.025c-.133-.39-.199-.815-.199-1.272zm1.084-.134v.134c0 .317.037.616.111.897.075.277.186.523.334.738.153.215.342.385.569.51.226.121.49.182.79.182.298 0 .557-.061.78-.182.227-.125.414-.295.563-.51.148-.215.26-.46.334-.738.078-.281.117-.58.117-.897v-.134c0-.313-.04-.608-.117-.885a2.277 2.277 0 00-.34-.744 1.615 1.615 0 00-.563-.516 1.577 1.577 0 00-.785-.187c-.297 0-.559.062-.785.187-.223.125-.41.297-.563.516-.148.215-.26.463-.334.744a3.41 3.41 0 00-.111.885zm8.176 2.46c.258 0 .496-.052.715-.158.219-.105.398-.25.539-.433.14-.188.22-.4.24-.639h1.031c-.02.375-.146.725-.38 1.049a2.6 2.6 0 01-.909.78 2.636 2.636 0 01-1.236.292c-.477 0-.893-.084-1.248-.252a2.473 2.473 0 01-.879-.691 3.088 3.088 0 01-.521-1.008 4.252 4.252 0 01-.17-1.213v-.246c0-.426.056-.828.17-1.207a3.08 3.08 0 01.521-1.014c.234-.293.527-.523.879-.691.355-.168.771-.252 1.248-.252.496 0 .93.101 1.3.305.372.199.663.472.874.82.215.344.332.734.351 1.172h-1.03a1.56 1.56 0 00-.224-.71 1.388 1.388 0 00-.515-.503 1.44 1.44 0 00-.756-.193c-.332 0-.611.066-.838.199-.223.129-.4.305-.533.527a2.46 2.46 0 00-.281.733 4.034 4.034 0 00-.082.814v.246c0 .278.027.55.082.82.054.27.146.514.275.733.133.219.31.394.533.527.227.13.508.194.844.194zm4.514-5.566V76h-1.09v-6.34h1.09zm-1.172-1.681c0-.176.053-.325.158-.446.11-.12.27-.181.48-.181.208 0 .366.06.475.181.114.121.17.27.17.445a.613.613 0 01-.17.434c-.11.117-.267.176-.474.176-.211 0-.371-.059-.48-.176a.638.638 0 01-.159-.434zm6.242 6.937v-3.264c0-.25-.05-.466-.152-.65a.996.996 0 00-.445-.434c-.2-.101-.446-.152-.739-.152-.273 0-.513.047-.72.14a1.255 1.255 0 00-.48.37.809.809 0 00-.17.492h-1.085c0-.227.059-.451.176-.674a1.97 1.97 0 01.504-.603c.223-.184.488-.329.797-.434.312-.11.66-.164 1.043-.164.46 0 .867.078 1.219.234.355.157.633.393.832.71.203.312.304.704.304 1.177v2.953c0 .211.018.436.053.674.04.238.096.443.17.615V76h-1.13a2.022 2.022 0 01-.13-.498 4.011 4.011 0 01-.047-.586zm.188-2.76l.012.762h-1.096c-.309 0-.584.025-.826.076a1.89 1.89 0 00-.61.217 1.03 1.03 0 00-.375.37.978.978 0 00-.129.509c0 .2.045.38.135.545a.98.98 0 00.404.392c.184.094.409.141.674.141.332 0 .625-.07.88-.211a1.83 1.83 0 00.603-.516c.152-.203.234-.4.246-.591l.463.521a1.572 1.572 0 01-.223.545 2.607 2.607 0 01-1.201 1.025 2.328 2.328 0 01-.926.176c-.43 0-.806-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.066-.638.199-.896a1.73 1.73 0 01.574-.65c.25-.176.55-.31.902-.399.352-.09.745-.135 1.178-.135h1.26zm4.848-2.496v.832h-3.428v-.832h3.428zm-2.268-1.54h1.084v6.31c0 .214.033.377.1.486.066.11.152.182.258.217.105.035.218.053.34.053.09 0 .183-.008.28-.024.102-.02.178-.035.23-.047l.005.885c-.086.027-.2.053-.34.076a2.587 2.587 0 01-.498.041c-.266 0-.51-.053-.732-.158a1.179 1.179 0 01-.534-.527c-.128-.25-.193-.586-.193-1.008v-6.305zm4.309 1.54V76h-1.09v-6.34h1.09zm-1.172-1.681c0-.176.053-.325.158-.446.11-.12.27-.181.48-.181.208 0 .366.06.475.181.114.121.17.27.17.445a.613.613 0 01-.17.434c-.109.117-.267.176-.474.176-.211 0-.371-.059-.48-.176a.638.638 0 01-.159-.434zm2.217 4.921v-.134c0-.457.066-.881.2-1.272a3.02 3.02 0 01.573-1.025c.25-.293.553-.52.909-.68a2.819 2.819 0 011.195-.246c.445 0 .846.082 1.201.246.36.16.664.387.914.68.254.289.447.63.58 1.025.133.39.2.815.2 1.272v.134c0 .457-.067.881-.2 1.272-.133.39-.326.732-.58 1.025a2.66 2.66 0 01-.908.68c-.352.16-.75.24-1.195.24-.446 0-.846-.08-1.201-.24a2.72 2.72 0 01-.915-.68 3.098 3.098 0 01-.574-1.025c-.133-.39-.199-.815-.199-1.272zm1.084-.134v.134c0 .317.037.616.111.897.075.277.186.523.334.738.153.215.342.385.569.51.226.121.49.182.79.182.298 0 .557-.061.78-.182.227-.125.414-.295.563-.51.148-.215.26-.46.334-.738.078-.281.117-.58.117-.897v-.134c0-.313-.04-.608-.117-.885a2.28 2.28 0 00-.34-.744 1.615 1.615 0 00-.563-.516 1.578 1.578 0 00-.785-.187c-.297 0-.559.062-.785.187-.223.125-.41.297-.563.516-.148.215-.26.463-.334.744a3.41 3.41 0 00-.11.885zm6.723-1.752V76h-1.084v-6.34h1.025l.059 1.354zm-.258 1.576l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.301-.694.528-.968a2.35 2.35 0 011.857-.861c.313 0 .594.043.844.129.25.082.463.215.639.398.18.184.316.422.41.715.093.29.14.643.14 1.06V76h-1.09v-4.166c0-.332-.048-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.738.17-.22.113-.409.27-.569.469-.156.199-.28.427-.369.685a2.507 2.507 0 00-.129.809z"
        fill="#000"
      />
    </Svg>
  )
}

export default CADComponent
