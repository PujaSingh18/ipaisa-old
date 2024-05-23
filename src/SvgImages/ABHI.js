import * as React from "react"
import Svg, {
    Defs,
    G,
    Image,
    Mask,
    Path,
    Pattern,
    Rect,
    Use
} from "react-native-svg"

function ABHI(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Rect width={48} height={48} rx={24} fill="#fff" />
      <Path fill="url(#pattern0)" d="M2 19H18V30H2z" />
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={18}
        y={19}
        width={28}
        height={10}
      >
        <Path fill="url(#pattern1)" d="M18 19H46V29H18z" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#000" d="M16 19H47V30H16z" />
      </G>
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_2221_9344"
            transform="matrix(.0142 0 0 .02066 0 .035)"
          />
        </Pattern>
        <Pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_2221_9344"
            transform="matrix(.00812 0 0 .02273 -.607 0)"
          />
        </Pattern>
        <Image
          id="image0_2221_9344"
          width={198}
          height={45}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAAtCAMAAADCxuQuAAAC/VBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+gFAumFAyXFAqaFAqjFQydFAuqFA2SFAnTERacFAuOEgfvcxrqWhjwehnpVBiXHA7pThqVEgnqaBjkURjRGRjYEBVrGAqzFQ6JEwbtZRb83Er22TzsYBjmXRieHA7VIRmkHRDubBiuFA3ZJBz74VDyhinxhByEEgbgEBaBCAWHAwNzCALzklTaMyPlWBnGKxRyFgr+7FbxzzbcKiCLLx7nYhbTBBTFEw94GQz40UjvbyWdEhrpPg7zlmH1n2DrwknzgTztwTfwgCPpbxnXGhWxKiCrJBWnMxPjNg6XCAboVgT1qXr7uW71n1P52EzrzEf1z0H2nTCsFiC2XhKMBwZkDgT8sl/1y1DktS7yjy3MVS3rZBvkSBmpQRfpERS6ExLnSwyNHwueDwd9EgR7BAT1lkezRzKkOiWqbyPgMB/3UxjfHRbNCBTMExFwHgruwVHzxkX/5ETARjLUHy/weCTtZSPIZB/zXhvvVRv5ahrZRRSeDBS3LA67UQq2CAndxgbtawL+8ILx1Ur9kTbhPSa3dx+mYh+kSRi2IRGvHhH701bfYUP46j7fTTTtxSTqVyH0jR/SKR7gsht7LhnaBRS1PhPOPhLSsBDpVg+XKAzrYgH9x2jwgVnntEP3fyzVPSvXFR76YBv2lxbDNxCqHQ2mDAX1pGz532DYdE3wZEnAXEb7okX8tEL2TTjUhCvibSrw1ie7Oif171Tplk3eijzGFSnyKyC+Vx/UGx6bMB37dhuoDhjLmw///13sc1DXmybJSCHikw7MfQxVEAP/9kDtdDXTZi+bPCfZJiTjyxftPyje3Qvpdxke6EfqAAAAMXRSTlMA0w8spbQzmR+GxPqV7712S+QH9kQ8FNxmGIom6s2sXAwvnmLxP7mPfHpWN1MbgG5RSmTm4AAAEHJJREFUaN7NmgdYU1cUx0PAqEQ2srcTR+1L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"
        />
      </Defs>
    </Svg>
  )
}

export default ABHI
