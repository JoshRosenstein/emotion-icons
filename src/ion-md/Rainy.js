import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M139 400s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3s23-10.5 23-23.3c0-15.4-23-40.7-23-40.7zm78-32s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7zm78 32s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3 12.6 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7zm78-32s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7zm20.2-206.8C380.5 96.6 323.9 48 256 48c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 136 32 180.4 32 235.5 32 297.6 79.4 352 141.2 352h242.7c51.5 0 96.2-46 96.2-97.8-.1-49.4-38.4-89.6-86.9-93z" key="k0" />
]


const Rainy = ({ title, ...restProps }) => {
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
          ? [<title key="Rainy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Rainy',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Rainy.displayName = 'Rainy'

Rainy.defaultProps = { height: undefined, width: undefined}

export default Rainy
