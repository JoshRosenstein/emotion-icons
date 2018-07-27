import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M13.991 13.991c-.05.69-1.269 1-1.998 1H5.666l-1.668-1V7.995c1.359 0 2.108-.75 3.128-1.879 1.229-1.359 1.139-2.558.879-4.127-.08-.5.5-1 1-1 .829 0 1.998 2.729 1.998 3.998l-.02 1.03c0 .689.33.969 1.02.969H14c.63 0 .98.36 1 .999l-1 5.996-.01.01zm0-7.995h-2.018l.02-.98C11.993 3.719 10.823 0 8.994 0c-.58 0-1.169.3-1.559.77-.36.41-.5.909-.42 1.409.25 1.479.28 2.278-.629 3.278-1 1.089-1.48 1.549-2.388 1.549h-2C.94 6.996 0 7.935 0 8.994v3.998c0 1.06.94 1.999 1.999 1.999h1.719l1.439.86c.16.089.33.139.52.139h6.325c1.13 0 2.839-.5 2.999-1.879l.979-5.946c.02-.08.02-.14.02-.2-.03-1.17-.84-1.969-1.999-1.969h-.01z" key="k0" />
]


const Thumbsup = ({ title, ...restProps }) => {
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
          ? [<title key="Thumbsup-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 16 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Thumbsup',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Thumbsup.displayName = 'Thumbsup'

Thumbsup.defaultProps = { height: 16, width: 16}

export default Thumbsup
