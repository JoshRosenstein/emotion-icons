import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M168.2 64h-.3c-8.7 0-15.8 7.1-15.8 15.8v30.3c0 8.7 7.1 15.8 15.8 15.8h.3c8.7 0 15.8-7.1 15.8-15.8V79.8c0-8.7-7.1-15.8-15.8-15.8zM79 216.2v-.3c0-8.7-7.1-15.8-15.8-15.8H31.8c-8.7 0-15.8 7.1-15.8 15.8v.3c0 8.7 7.1 15.8 15.8 15.8h31.3c8.8 0 15.9-7.1 15.9-15.8zm.7-67.2c3 3 7 4.7 11.2 4.7 4.2 0 8.2-1.7 11.2-4.7 6.1-6.2 6.1-16.2 0-22.3l-20.3-20.5c-3-3-7-4.7-11.2-4.7-4.2 0-8.2 1.7-11.2 4.7-6.1 6.2-6.1 16.2 0 22.3L79.7 149zM271 105.2c-3-3-7-4.7-11.2-4.7-4.2 0-8.2 1.7-11.2 4.7l-20.3 20.4c-6.1 6.2-6.1 16.2 0 22.3l.3.3h.1c2.9 2.8 6.8 4.3 10.8 4.3 4.2 0 8.2-1.7 11.2-4.7l20.3-20.4c6.1-6 6.1-16 0-22.2zM92.9 273.3c-4.2 0-8.2 1.7-11.2 4.7l-20.3 20.5c-6.1 6.2-6.1 16.2 0 22.3 3 3 7 4.7 11.2 4.7 4.2 0 8.2-1.7 11.2-4.7l20.3-20.5c6.1-6.2 6.1-16.2 0-22.3-3-3-7-4.7-11.2-4.7zm310.4-14.1h-2.4c-3.1 0-6.1 0-9 .4-11.3-50.3-56.1-88.2-109.7-88.2-14.6 0-28.6 2.8-41.4 7.9-5.1 2-10 4.4-14.7 7.1-32 18.5-54.1 52.4-56.2 91.6-.1 2.1-.2 4.1-.2 6.2 0 3.4.2 6.8.5 10.1 0 .4.1.8.1 1.1-37.9 3.4-67.6 37.1-67.6 76 0 41.1 33.3 76.7 74.3 76.7h226.4c51.2 0 92.7-43.4 92.7-94.8-.1-51.4-41.6-94.1-92.8-94.1z" key="k0" />
,
<path d="M150.7 283.6v-.3c-.3-3.4-.5-6.8-.5-10.2 0-2.1.1-4.2.2-6.3 2.2-39.9 24.6-74.3 57.2-93.1 4.8-2.8 9.8-5.2 14.9-7.2h.1c-13.4-17-34.2-28-57.6-28-40.5 0-73.3 32.8-73.3 73.3 0 35.5 25.3 65.1 59 71.8z" key="k1" />
]


const PartlySunny = ({ title, ...restProps }) => {
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
          ? [<title key="PartlySunny-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PartlySunny',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PartlySunny.displayName = 'PartlySunny'

PartlySunny.defaultProps = { height: undefined, width: undefined}

export default PartlySunny
