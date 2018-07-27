import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.963 12a2.854 2.854 0 0 1 2.855-2.855A2.863 2.863 0 0 1 14.674 12a2.863 2.863 0 0 1-2.856 2.856A2.863 2.863 0 0 1 8.963 12zm2.855-12C6.215 0 1.522 3.84.19 9.025c-.01.036-.01.07-.01.12 0 .313.252.576.575.576H5.59c.23 0 .433-.13.517-.333.997-2.16 3.18-3.672 5.712-3.672a6.293 6.293 0 0 1 6.286 6.287c0 3.47-2.82 6.29-6.29 6.29a6.28 6.28 0 0 1-5.71-3.673.594.594 0 0 0-.517-.336H.755a.576.576 0 0 0-.575.576c0 .037.014.072.014.12C1.514 20.16 6.214 24 11.818 24c6.624 0 12-5.375 12-12 0-6.623-5.376-12-12-12z" key="k0" />
]

export const hex='#343434'
const CircleCI = ({ title, ...restProps }) => {
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
          ? [<title key="CircleCI-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CircleCI',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CircleCI.displayName = 'CircleCI'

CircleCI.defaultProps = { height: 24, width: 24}

export default CircleCI
