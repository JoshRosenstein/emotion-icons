import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M369.7 404H110.1c-7.6 0-14.1 5.8-14.4 13.4-.4 8 6 14.6 14 14.6h259.6c7.6 0 14.1-5.8 14.4-13.4.3-8-6.1-14.6-14-14.6zm29.5-285.5c.1-10.8-4.2-20.9-12.2-28.4-7.2-6.6-16.7-10.1-26.5-10.1H86.8c-9.9 0-19.7 3.6-26.9 10.4-8.1 7.7-12.4 18.2-11.9 29.3C50.4 172 58.3 218 71.8 256.3c11 31.6 25.8 58.1 43.9 78.9 31.8 36.6 68.8 48.8 77.9 48.8h60.1c5.5 0 25-7.2 44.2-19.5 22.4-14.4 42.4-36.7 58.1-64.6 2 .1 4 .2 5.9.2 27.2 0 52.8-9.7 72.1-27.4 19.4-17.8 30.1-41.4 30.1-66.6-.1-38.9-25.9-73.5-64.9-87.6zm-29.7 153.1c14.2-34.5 23.6-76 27.8-123.4 0 0 0-.1.1 0 10.3 5 19.1 12.2 25.8 20.9 8.4 10.9 12.8 23.7 12.8 37 0 34-29.2 62.1-66.5 65.5z" key="k0" />
]


const Cafe = ({ title, ...restProps }) => {
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
          ? [<title key="Cafe-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cafe',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Cafe.displayName = 'Cafe'

Cafe.defaultProps = { height: undefined, width: undefined}

export default Cafe
