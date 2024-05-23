import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Question(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.999 2.746a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zm-10.75 9.25c0-5.937 4.813-10.75 10.75-10.75s10.75 4.813 10.75 10.75-4.813 10.75-10.75 10.75-10.75-4.813-10.75-10.75zm10.75-4.25c-.621 0-1.125.504-1.125 1.125a.75.75 0 01-1.5 0 2.625 2.625 0 113.96 2.26 1.86 1.86 0 00-.465.369c-.102.12-.12.2-.12.246v1.25a.75.75 0 01-1.5 0v-1.25c0-.506.221-.916.477-1.217.252-.297.566-.524.844-.689A1.124 1.124 0 0012 7.746zm0 9.25a1 1 0 100-2 1 1 0 000 2z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Question
