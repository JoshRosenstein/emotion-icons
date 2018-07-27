import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6.51 2c-1.93 0-3.5 1.57-3.5 3.5 0 1.58 1.06 2.903 2.5 3.337v7.16c-.001.179.027 1.781 1.174 2.931.601.604 1.385.939 2.316 1.031V22l4-3-4-3v1.945C7.656 17.688 7.515 16.418 7.51 16V8.837c1.44-.434 2.5-1.757 2.5-3.337 0-1.93-1.571-3.5-3.5-3.5zm0 5c-.827 0-1.5-.673-1.5-1.5S5.683 4 6.51 4s1.5.673 1.5 1.5S7.337 7 6.51 7zM11 5l4 3V6.055c1.352.258 1.502 1.531 1.51 1.945v7.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V7.997c-.005-1.508-.971-3.68-3.51-3.945V2l-4 3zm8.01 13.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5z" key="k0" />
]


const GitCompare = ({ title, ...restProps }) => {
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
          ? [<title key="GitCompare-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GitCompare',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GitCompare.displayName = 'GitCompare'

GitCompare.defaultProps = { height: 24, width: 24}

export default GitCompare
