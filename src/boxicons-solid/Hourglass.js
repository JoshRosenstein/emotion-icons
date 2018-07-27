import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 4h1V2H4v2h1.022c0 3.3 1.651 5.083 3.978 7.414v1.172C6.58 15.011 5 16.716 5 20H4v2h16v-2h-1c0-3.284-1.58-4.989-4-7.414v-1.172c2.42-2.425 4-4.13 4-7.414zm-5.707 9.707c.473.473.887.892 1.269 1.293H9.438c.382-.401.796-.82 1.269-1.293A.997.997 0 0 0 11 13v-2a.997.997 0 0 0-.293-.707C8.163 7.749 7.032 6.513 7.022 4H17c0 2.586-1.239 3.825-3.707 6.293A.997.997 0 0 0 13 11v2c0 .265.105.52.293.707z" key="k0" />
]


const Hourglass = ({ title, ...restProps }) => {
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
          ? [<title key="Hourglass-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hourglass',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hourglass.displayName = 'Hourglass'

Hourglass.defaultProps = { height: 24, width: 24}

export default Hourglass