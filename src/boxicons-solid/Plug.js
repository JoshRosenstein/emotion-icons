import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22 10V8h-4V5a1 1 0 0 0-1-1h-3C9.674 4 7.352 6.065 6.522 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.522c.829.935 3.151 3 7.478 3h3a1 1 0 0 0 1-1v-3h4v-2h-4v-4h4z" key="k0" />
]


const Plug = ({ title, ...restProps }) => {
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
          ? [<title key="Plug-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Plug',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Plug.displayName = 'Plug'

Plug.defaultProps = { height: 24, width: 24}

export default Plug
