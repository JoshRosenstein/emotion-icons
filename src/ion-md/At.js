import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M265.6 212.3c-10.5 0-18.5 4.4-24 13.2-5.5 8.8-9.1 22-10.8 39.6-.9 11.7 0 20.5 2.7 26.5s7.1 9 13.1 9c5.5 0 10.3-1.5 14.6-4.4 4.3-2.9 8.1-8.3 11.3-16.2l6.1-66c-2.2-.5-4.4-.9-6.5-1.2-2.3-.4-4.4-.5-6.5-.5z" key="k0" />
,
<path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.8 201.9c-.9 21.4-7.6 39.9-20 55.6-12.4 15.6-31 23.4-55.6 23.4-8.2 0-15.3-2.2-21.2-6.6-6-4.4-10.2-10.7-12.6-18.8-4.1 8.3-9.4 14.5-15.7 18.6-6.3 4.1-13.7 6.2-22.2 6.2-15.1 0-26.6-5.8-34.6-17.3s-10.9-26.8-8.8-45.9c2.6-24.4 10-44 22.2-58.7 12.2-14.7 27-22 44.4-22 12.2 0 22.1 1.3 29.5 3.8 7.4 2.5 15.6 5.7 24.5 11l-.5-.1h.8l-7.7 83.4c-.5 8.5.1 14.6 1.7 17.8 1.7 3.2 3.9 4.9 6.7 4.9 11.3 0 20.4-5.1 27.2-15.6 6.8-10.5 10.6-23.6 11.4-39.6 1.6-33-5.1-58.7-20.2-77.1-15.1-18.4-38.3-27.7-69.7-27.7-30.5 0-54.8 9.9-72.8 29.8s-27.7 46.9-29.3 81.2c-1.7 33.4 5.6 59.8 21.9 79.1 16.3 19.4 39.7 29.1 70.3 29.1 8.5 0 17.3-.9 26.5-2.7 9.1-1.8 17.1-4.1 23.7-6.8l5.8 24.2c-6.8 4.1-15.4 7.3-25.9 9.6-10.5 2.3-20.7 3.4-30.7 3.4-40.8 0-72.3-12.1-94.3-36.4-22-24.2-32.2-57.4-30.5-99.6 1.8-41.8 14.9-74.9 39.1-99.4 24.3-24.5 56.5-36.7 96.7-36.7 39.5 0 69.8 11.6 90.7 34.7 21.2 23.2 30.8 54.9 29.2 95.2z" key="k1" />
]


const At = ({ title, ...restProps }) => {
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
          ? [<title key="At-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-At',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

At.displayName = 'At'

At.defaultProps = { height: undefined, width: undefined}

export default At
