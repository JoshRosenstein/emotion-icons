import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M437.4 354.4L320.7 159.9c-.4-.6-.6-1.3-.6-2.1V80c0-2.2 1.8-4 4-4 6.6 0 12-5.4 12-12v-4c0-6.6-5.4-12-12-12H187.8c-6.6 0-12 5.4-12 12v4c0 6.6 5.4 12 12 12 2.2 0 4 1.8 4 4v77.9c0 .7-.2 1.4-.6 2L75.7 354.4c-8.4 15.8-12.5 31.4-12.1 45.6 1.1 36.5 28.8 64 65.2 64h256.6c36.4 0 62.3-27.6 63.2-64 .2-14.2-2.7-29.7-11.2-45.6zM161.8 288c-6.2 0-10.1-6.8-6.9-12.1l60.5-101.7c2.9-4.9 4.5-10.6 4.5-16.3V80c0-1.4-.1-2.7-.2-4h72.7c-.2 1.3-.2 2.6-.2 4v77.9c0 5.8 1.6 11.5 4.6 16.4l60.4 101.6c3.2 5.3-.7 12.1-6.9 12.1H161.8z" key="k0" />
]


const Flask = ({ title, ...restProps }) => {
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
          ? [<title key="Flask-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Flask',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Flask.displayName = 'Flask'

Flask.defaultProps = { height: undefined, width: undefined}

export default Flask
