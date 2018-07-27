import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13.472 3.118a1 1 0 0 0-1.026.05L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414-2.02-2.02A9.569 9.569 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-.528-.882zM12 5.868v4.718L9.169 7.755 12 5.868zM3 17h3.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964A1.006 1.006 0 0 0 7 15H4V9h.879l-1.98-1.979A.988.988 0 0 0 2 8v8a1 1 0 0 0 1 1z" key="k0" />
]


const VolumeMute = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'hidden'
      },
      ({ size,height,width,css }) => ({
        height: size ? size : height,
        width: size ? size : width,
        ...css
      }),
    ),
    {
      children: (
        title
          ? [<title key="VolumeMute-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VolumeMute',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VolumeMute.displayName = 'VolumeMute'

VolumeMute.defaultProps = { height: 24, width: 24}

export default VolumeMute
