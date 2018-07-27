import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12a7.95 7.95 0 0 1 1.285-4.333C6.365 8.778 7 10.355 7 12c0 1.561-.667 3.068-1.8 4.193A7.934 7.934 0 0 1 4 12zm8 8a7.97 7.97 0 0 1-5.549-2.25C8.047 16.24 9 14.164 9 12c0-2.23-.902-4.373-2.426-5.862C8.002 4.815 9.905 4 12 4s3.998.815 5.426 2.138C15.902 7.627 15 9.77 15 12c0 2.164.953 4.24 2.549 5.75A7.97 7.97 0 0 1 12 20zm6.8-3.807C17.667 15.068 17 13.561 17 12c0-1.645.635-3.222 1.715-4.333a7.934 7.934 0 0 1 .085 8.526z" key="k0" />
]


const TennisBall = ({ title, ...restProps }) => {
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
          ? [<title key="TennisBall-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TennisBall',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TennisBall.displayName = 'TennisBall'

TennisBall.defaultProps = { height: 24, width: 24}

export default TennisBall
