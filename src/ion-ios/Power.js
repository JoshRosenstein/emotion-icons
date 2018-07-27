import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M380.4 111.7c-3.3-2.8-7.5-4.3-11.8-4.3-5.3 0-10.4 2.3-13.8 6.4-3.2 3.7-4.7 8.4-4.3 13.3.4 4.8 2.7 9.3 6.4 12.4 34.8 29.5 54.8 72.3 54.8 117.4 0 85.4-69.8 154.8-155.6 154.8s-155.6-69.5-155.6-154.8c0-45.2 20-88 54.8-117.4 3.7-3.1 6-7.5 6.4-12.4.4-4.8-1.1-9.6-4.3-13.3-3.5-4-8.5-6.4-13.8-6.4-4.3 0-8.5 1.5-11.8 4.3C88.7 148.1 64 201 64 256.8 64 362.2 150.1 448 256 448s192-85.8 192-191.2c0-55.8-24.7-108.7-67.6-145.1z" key="k0" />
,
<path d="M256.9 274.5c10.2 0 18.5-8.3 18.5-18.5V82.5c0-10.2-8.3-18.5-18.5-18.5s-18.5 8.3-18.5 18.5V256c0 10.2 8.3 18.5 18.5 18.5z" key="k1" />
]


const Power = ({ title, ...restProps }) => {
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
          ? [<title key="Power-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Power',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Power.displayName = 'Power'

Power.defaultProps = { height: undefined, width: undefined}

export default Power
