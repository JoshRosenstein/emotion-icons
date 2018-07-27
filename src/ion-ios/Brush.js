import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M149.6 283.3c-51.9 0-83.9 45.7-83.9 95.1 0 21.3-10.9 37.1-31.4 46.4-2.2 1-3 3.8-1.7 5.8 16.7 24.6 63.3 33.3 95.3 33.3 8.4 0 15.9-.6 21.8-1.7 35.6-6.4 80.1-24.9 90.7-77 12.2-60.5-38.9-101.9-90.8-101.9z" key="k0" />
,
<path d="M467.7 60.4C460 52.7 450.9 48 441.6 48c-6.3 0-12.7 2.2-18.8 7L257.7 200.3c-5.4 4.8-12.4 7.4-19.7 7.4h-.2c-5.6 0-11.1 2.1-15.4 5.8l-53.6 43.8c-2.1 1.8-2.7 4.8-1.4 7.2.9 1.7 2.6 2.9 4.5 3.1 45.6 4.5 87 37 87.3 86.6 0 1.7.7 3.4 2 4.5 2.5 2.1 6 1.7 8-.6l45.1-52.2c3.5-4 5.8-9.1 6-14.5v-1.2c0-7.5 3-14.8 8-20.4l144.8-164.4c11.9-15.1 7.6-32.1-5.4-45z" key="k1" />
]


const Brush = ({ title, ...restProps }) => {
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
          ? [<title key="Brush-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Brush',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Brush.displayName = 'Brush'

Brush.defaultProps = { height: undefined, width: undefined}

export default Brush
