import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M445.2 48H128.5C74.1 48 64 75.9 64 88.2c30.3 4.2 32 4.2 32 36.2v275.5c0 35.3 28.9 64 64.2 64H368c35.4 0 63-29.2 63-64.5V89.2c2-17.5 12.5-31.6 13.6-33.3 1.2-1.9 3.4-4.4 3.4-5.5 0-1.2-.3-2.4-2.8-2.4zm-333 29.3c0-.1 0-.1 0 0 6-1 12-1.3 16.3-1.3H405c-.9 3.7-1.5 7.1-1.8 10-.1 1.1-.2 2.1-.2 3.2v70.9-.1H124v-35.5c0-17.6 0-34.2-11.8-47.2z" key="k0" />
]


const Beaker = ({ title, ...restProps }) => {
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
          ? [<title key="Beaker-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Beaker',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Beaker.displayName = 'Beaker'

Beaker.defaultProps = { height: undefined, width: undefined}

export default Beaker
