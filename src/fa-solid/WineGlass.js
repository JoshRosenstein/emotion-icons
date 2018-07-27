import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M287.4 192.7l-16-178.1C270.7 6.3 263.9 0 255.7 0H32.3c-8.2 0-15 6.3-15.7 14.6L.6 192.7c-7.2 80 50.7 148.9 127.4 157.6V480H74.1c-24.5 0-33.2 32-20 32h179.8c13.1 0 4.5-32-20-32H160V350.3c76.7-8.8 134.6-77.6 127.4-157.6zM226.2 48l7.2 80H54.6l7.2-80h164.4z" key="k0" />
]


const WineGlass = ({ title, ...restProps }) => {
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
          ? [<title key="WineGlass-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 288 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-WineGlass',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

WineGlass.displayName = 'WineGlass'

WineGlass.defaultProps = { height: undefined, width: undefined}

export default WineGlass
