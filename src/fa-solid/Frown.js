import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm192.7 220.3c-3 2.5-6.6 3.7-10.2 3.7-4.6 0-9.1-2-12.3-5.8-22.4-26.8-55.3-42.2-90.2-42.2s-67.8 15.4-90.2 42.2c-5.6 6.8-15.7 7.7-22.5 2-6.8-5.7-7.7-15.7-2-22.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c5.7 6.7 4.8 16.8-2 22.5z" key="k0" />
]


const Frown = ({ title, ...restProps }) => {
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
          ? [<title key="Frown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 496 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Frown',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Frown.displayName = 'Frown'

Frown.defaultProps = { height: undefined, width: undefined}

export default Frown
