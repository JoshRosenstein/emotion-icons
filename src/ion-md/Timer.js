import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M232.9 371.6c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1c0-12.7-10.4-23.1-23.1-23.1s-23.1 10.3-23.1 23.1zm0-323.6v92.4h46.2V96.1c78.3 11.3 138.7 78.3 138.7 159.9 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-38.8 13.6-74.4 36.5-102.2L256 279.1l32.6-32.6L131.4 89.4v.5C80.8 127.7 48 187.8 48 256c0 114.9 92.9 208 208 208 114.9 0 208-93.1 208-208S370.9 48 256 48h-23.1zm161.8 208c0-12.7-10.4-23.1-23.1-23.1-12.7 0-23.1 10.4-23.1 23.1s10.4 23.1 23.1 23.1c12.7 0 23.1-10.4 23.1-23.1zm-277.4 0c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1-10.4-23.1-23.1-23.1-23.1 10.4-23.1 23.1z" key="k0" />
]


const Timer = ({ title, ...restProps }) => {
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
          ? [<title key="Timer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Timer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Timer.displayName = 'Timer'

Timer.defaultProps = { height: undefined, width: undefined}

export default Timer
