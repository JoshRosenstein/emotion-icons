import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M21.7 246.4c-.1 86.8 29 159.5 78.7 212.1H0v-405h87.2c-41.5 50.2-65.6 116.2-65.5 192.9zM640 53.6h-83.6c31.4 42.7 48.7 97.5 46.2 162.7.5 6 .5 11.7 0 24.1H230.2c-.2 109.7 38.9 194.9 138.6 195.3 68.5-.3 118-51 151.9-106.1l96.4 48.2c-17.4 30.9-36.5 57.8-57.9 80.8H640v-405zm-80.8 405s0-.1 0 0h-.2.2zm-3.1-405h.3l-.1-.1-.2.1zm-230.7 9.6c-45.9.1-85.1 33.5-89.2 83.2h169.9c-1.1-49.7-34.5-83.1-80.7-83.2z" key="k0" />
]


const Erlang = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Erlang-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 640 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Erlang',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Erlang.displayName = 'Erlang'

Erlang.defaultProps = { height: undefined, width: undefined}

export default Erlang
