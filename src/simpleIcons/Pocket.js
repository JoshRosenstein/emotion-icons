import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.813 10.259l-5.646 5.419a1.649 1.649 0 0 1-2.282 0l-5.646-5.419a1.645 1.645 0 0 1 2.276-2.376l4.511 4.322 4.517-4.322a1.643 1.643 0 0 1 2.326.049 1.64 1.64 0 0 1-.045 2.326l-.011.001zm5.083-7.546a2.163 2.163 0 0 0-2.041-1.436H2.179c-.9 0-1.717.564-2.037 1.405-.094.25-.142.511-.142.774v7.245l.084 1.441c.348 3.277 2.047 6.142 4.682 8.139.045.036.094.07.143.105l.03.023a11.899 11.899 0 0 0 4.694 2.072c.786.158 1.591.24 2.389.24.739 0 1.481-.067 2.209-.204.088-.029.176-.045.264-.06.023 0 .049-.015.074-.029a12.002 12.002 0 0 0 4.508-2.025l.029-.031.135-.105c2.627-1.995 4.324-4.862 4.686-8.148L24 10.678V3.445c0-.251-.031-.5-.121-.742l.017.01z" key="k0" />
]

export const hex='#EF3F56'
const Pocket = ({ title, ...restProps }) => {
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
          ? [<title key="Pocket-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pocket',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pocket.displayName = 'Pocket'

Pocket.defaultProps = { height: 24, width: 24}

export default Pocket
