import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 456c-110.3 0-200-89.7-200-200 0-54.8 21.7-105.9 61.2-144 6.4-6.2 16.6-6 22.7.4 6.2 6.4 6 16.6-.4 22.7-33.1 32-51.3 74.9-51.3 120.9 0 92.5 75.3 167.8 167.8 167.8S423.8 348.5 423.8 256c0-87.1-66.7-159-151.8-167.1v62.6c0 8.9-7.2 16.1-16.1 16.1s-16.1-7.2-16.1-16.1V72.1c0-8.9 7.2-16.1 16.1-16.1 110.3 0 200 89.7 200 200S366.3 456 256 456z" key="k0" />
,
<path d="M175.9 161.9l99.5 71.5c13.5 9.7 16.7 28.5 7 42s-28.5 16.7-42 7c-2.8-2-5.2-4.4-7-7l-71.5-99.5c-3.2-4.5-2.2-10.8 2.3-14 3.6-2.6 8.3-2.4 11.7 0z" key="k1" />
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
