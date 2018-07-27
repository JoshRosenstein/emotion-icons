import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM5.285 7.667C6.144 8.55 6.713 9.728 6.913 11H4.069a7.949 7.949 0 0 1 1.216-3.333zM4.069 13h2.828A6.05 6.05 0 0 1 5.2 16.193 7.938 7.938 0 0 1 4.069 13zM11 19.931a7.98 7.98 0 0 1-4.549-2.181C7.8 16.475 8.689 14.797 8.932 13H11v6.931zM11 11H8.936c-.224-1.862-1.068-3.598-2.362-4.862A7.976 7.976 0 0 1 11 4.069V11zm2-6.931a7.981 7.981 0 0 1 4.426 2.068c-1.294 1.265-2.138 3-2.361 4.862H13v-6.93zm0 15.862V13h2.068c.242 1.797 1.132 3.475 2.48 4.75A7.974 7.974 0 0 1 13 19.931zm5.8-3.738A6.047 6.047 0 0 1 17.103 13h2.828a7.938 7.938 0 0 1-1.131 3.193zM17.087 11c.2-1.272.77-2.45 1.628-3.333A7.935 7.935 0 0 1 19.931 11h-2.844z" key="k0" />
]


const Basketball = ({ title, ...restProps }) => {
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
          ? [<title key="Basketball-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Basketball',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Basketball.displayName = 'Basketball'

Basketball.defaultProps = { height: 24, width: 24}

export default Basketball
