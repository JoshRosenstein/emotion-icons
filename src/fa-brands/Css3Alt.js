import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" key="k0" />
]


const Css3Alt = ({ title, ...restProps }) => {
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
          ? [<title key="Css3Alt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 384 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Css3Alt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Css3Alt.displayName = 'Css3Alt'

Css3Alt.defaultProps = { height: undefined, width: undefined}

export default Css3Alt