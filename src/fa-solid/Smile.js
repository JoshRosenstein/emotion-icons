import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-5.7-6.8-4.7-16.9 2-22.5 6.8-5.7 16.9-4.7 22.5 2 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c5.7-6.8 15.7-7.7 22.5-2 6.9 5.7 7.8 15.8 2.2 22.5z" key="k0" />
]


const Smile = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Smile-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 496 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Smile',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Smile.displayName = 'Smile'

Smile.defaultProps = { height: undefined, width: undefined}

export default Smile
