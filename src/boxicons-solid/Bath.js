import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 10H8V6c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S6 3.794 6 6v4H3a1 1 0 0 0-1 1v1c0 .14.026 3.44 2.293 5.707A7.147 7.147 0 0 0 6.082 19H6v3h2v-2.283c1.098.275 1.932.283 2 .283h4c.068 0 .902-.008 2-.283V22h2v-3h-.082a7.147 7.147 0 0 0 1.789-1.293C21.974 15.44 22 13.099 22 13v-2a1 1 0 0 0-1-1z" key="k0" />
]


const Bath = ({ title, ...restProps }) => {
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
          ? [<title key="Bath-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bath',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bath.displayName = 'Bath'

Bath.defaultProps = { height: 24, width: 24}

export default Bath
