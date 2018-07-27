import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14.4 7.355h-3.607a5.91 5.91 0 0 0-2.063.405V-.03H2.94v24.06h5.8v-9.51a1.61 1.61 0 0 1 1.56-1.7h3.39a1.59 1.59 0 0 1 1.59 1.56v9.59h5.78V13.54c0-4.41-2.25-6.162-5.9-6.162" key="k0" />
]

export const hex='#3DBB3D'
const Hulu = ({ title, ...restProps }) => {
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
          ? [<title key="Hulu-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hulu',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hulu.displayName = 'Hulu'

Hulu.defaultProps = { height: 24, width: 24}

export default Hulu
