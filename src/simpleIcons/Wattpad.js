import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22.957 18.26c0 1.775-1.357 3.131-3.13 3.131H9.39c-5.321 0-8.348-2.817-8.348-7.826V5.74c0-1.774 1.357-3.13 3.131-3.13h3.13c.522 0 1.148.104 1.566.417.417-.313 1.043-.417 1.565-.417h3.13c.522 0 1.148.104 1.565.417.418-.313 1.044-.417 1.566-.417h3.13c1.774 0 3.13 1.356 3.13 3.13v12.522zm-3.13-16.695h-3.131c-.522 0-1.044.105-1.566.313a4.186 4.186 0 0 0-1.565-.313h-3.13c-.522 0-1.044.105-1.565.313a4.185 4.185 0 0 0-1.566-.313h-3.13A4.186 4.186 0 0 0 0 5.74v7.826c0 5.53 3.548 8.87 9.391 8.87h10.435A4.186 4.186 0 0 0 24 18.26V5.739a4.186 4.186 0 0 0-4.174-4.174" key="k0" />
,
<path d="M9.391 18.26h10.435V5.74h-3.13v10.434h-3.13V5.739h-3.131v10.435H9.39c-1.043 0-2.087-.835-2.087-2.609V5.74h-3.13v7.826c0 3.13 1.46 4.696 5.217 4.696" key="k1" />
]

export const hex='#F68D12'
const Wattpad = ({ title, ...restProps }) => {
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
          ? [<title key="Wattpad-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Wattpad',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Wattpad.displayName = 'Wattpad'

Wattpad.defaultProps = { height: 24, width: 24}

export default Wattpad
