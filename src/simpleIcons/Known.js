import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12zM12 1.8C6.3 1.8 1.8 6.3 1.8 12S6.3 22.2 12 22.2 22.2 17.7 22.2 12 17.7 1.8 12 1.8zm5.6 5.4l-.2.2c.1-.1.3-.2.4-.2h-.2zm.2 0h.5V5.3h-5.5v1.9h.9c.2 0 .3.1.3.3 0 .1 0 .2-.1.2l-3.8 3.8H10c-.1 0-.2-.1-.2-.2V7.9c0-.4.3-.7.7-.7h.8V5.3H5.4v1.9h.7c.4 0 .7.3.7.7v8.4c0 .4-.3.7-.7.7h-.7v2h5.9v-2h-.8c-.4 0-.7-.3-.7-.7v-1.4c0-.1 0-.2.1-.3l1.5-1.5s.1-.1.2-.1.2 0 .2.1l2.1 3.3v.2c0 .2-.1.3-.3.3h-.9v2H19v-2h-.7c-.2 0-.4-.1-.5-.3v-.1L14.1 11c0-.1-.1-.1-.1-.2s0-.2.1-.2l3.2-3.2c.2-.2.3-.2.5-.2z" key="k0" />
]

export const hex='#333333'
const Known = ({ title, ...restProps }) => {
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
          ? [<title key="Known-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Known',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Known.displayName = 'Known'

Known.defaultProps = { height: 24, width: 24}

export default Known
