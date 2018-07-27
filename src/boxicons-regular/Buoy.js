import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 2.069c.328-.041.66-.069 1-.069s.672.028 1 .069v3.032a4.988 4.988 0 0 0-2 0V4.069zm-2 .52V8h.031A5.037 5.037 0 0 0 8 9.031V9H4.589C5.402 7 6.999 5.402 9 4.589zM4 12c0-.339.028-.672.069-1h3.032a4.995 4.995 0 0 0 .001 2H4.069A8.047 8.047 0 0 1 4 12zm5 7.411A8.039 8.039 0 0 1 4.589 15H8v-.031c.284.381.621.718 1 1.005v3.437zm4 .52c-.328.041-.66.069-1 .069s-.672-.028-1-.069v-3.032a4.988 4.988 0 0 0 2 0v3.032zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm3 4.411v-3.437a5.038 5.038 0 0 0 1-1.005V15h3.411A8.039 8.039 0 0 1 15 19.411zM20 12c0 .339-.028.672-.069 1h-3.032a4.995 4.995 0 0 0-.001-2h3.032c.042.328.07.661.07 1zm-4-3v.031A5.037 5.037 0 0 0 14.969 8H15V4.589A8.039 8.039 0 0 1 19.411 9H16z" key="k0" />
]


const Buoy = ({ title, ...restProps }) => {
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
          ? [<title key="Buoy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Buoy',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Buoy.displayName = 'Buoy'

Buoy.defaultProps = { height: 24, width: 24}

export default Buoy
