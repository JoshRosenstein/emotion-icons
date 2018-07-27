import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.707 7.293a1 1 0 1 0-1.694.543c-.392 2.348-1.275 3.484-2.604 3.483 1.023-2.493 1.098-4.602.219-6.278C12.29 2.487 9.27 2.028 9.142 2.01A1.003 1.003 0 0 0 8 3c0 .025-.02 2.605-1.707 4.293C4.239 9.347 3 10.586 3 14c0 3.94 2.174 6.321 4.954 7.368C6.04 18.891 8 13 8 13c1.672 6.706 6.264 7.854 7.709 8.051C18.136 19.872 20 17.571 20 14c0-.181-.026-4.44-2.293-6.707z" key="k0" />
]


const Hot = ({ title, ...restProps }) => {
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
          ? [<title key="Hot-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hot',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hot.displayName = 'Hot'

Hot.defaultProps = { height: 24, width: 24}

export default Hot
