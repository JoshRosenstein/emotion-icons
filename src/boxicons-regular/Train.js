import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="none" d="M6 18h12v-4H6v4zm9-3h2v1.991h-2V15zm-8 0h2v1.991H7V15zM6 8h12v4H6zm10.336-4H7.625c-.001 0-.462.039-.989.653-.564.657-.628 1.249-.634 1.347H18c-.001-.025-.022-.66-.623-1.334-.55-.617-1.022-.666-1.041-.666z" key="k0" />
,
<path d="M7 15h2v1.991H7zm8 0h2v1.991h-2z" key="k1" />
,
<path d="M18.871 3.335C17.715 2.037 16.509 2 16.375 2H7.621c-.224 0-1.399.065-2.503 1.351C4.031 4.616 4 5.862 4 6v13a1 1 0 0 0 1 1h2l-2 2h14l-2-2h2a1 1 0 0 0 1-1V6c.001-.187-.032-1.434-1.129-2.665zM18 18H6v-4h12v4zm0-6H6V8h12v4zM6.002 6c.006-.098.07-.69.634-1.347.527-.614.988-.652.989-.653l8.711-.001c.02.002.491.049 1.041.666.601.674.622 1.31.623 1.335H6.002z" key="k2" />
]


const Train = ({ title, ...restProps }) => {
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
          ? [<title key="Train-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Train',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Train.displayName = 'Train'

Train.defaultProps = { height: 24, width: 24}

export default Train
