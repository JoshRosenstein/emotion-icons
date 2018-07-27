import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M24 19.5c-.7-.1-2.5-.3-2.7-.3-.1 0-2.8 2.3-4 3.399l-.1.101c.1-1.3.3-2.601.399-3.9C11.7 18.1 5.9 17.4 0 16.7V1.3h.3C.9 1.4 22.9 3.9 24 4v15.5zm-2.6-2.6V6.2C15.1 5.5 8.7 4.7 2.4 4v10.6c6.3.8 12.7 1.5 19 2.3z" key="k0" />
]

export const hex='#0095DE'
const XSplit = ({ title, ...restProps }) => {
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
          ? [<title key="XSplit-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-XSplit',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

XSplit.displayName = 'XSplit'

XSplit.defaultProps = { height: 24, width: 24}

export default XSplit