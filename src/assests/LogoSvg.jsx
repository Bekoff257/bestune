import React from 'react'

function LogoSvg(props) {
  return (
    <div>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={202}
        height={62}
        fill="none"
        {...props}
        >
    <path fill="url(#a)" d="M.974.857h200.925v60.222H.974z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00028 .00093)" />
      </pattern>
      <image
        id="b"
        width={3590}
        height={1076}
      />
    </defs>
  </svg>
    </div>
  )
}

export default LogoSvg