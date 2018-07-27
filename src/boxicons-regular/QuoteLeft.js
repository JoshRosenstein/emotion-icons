import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4h-7a1 1 0 0 0-1 1l.003 7.919c-.009.111-.199 2.741 1.688 4.789C16.094 19.229 18.217 20 21 20a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1c-1.031 0-1.533-.49-1.776-1H21a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 8h-2a1 1 0 0 0-1 1c0 1.41.819 3.423 3 3.897v1.062c-1.69-.146-2.973-.68-3.822-1.59C14.881 14.978 14.996 13.095 15 13V6h5v6zM3.691 17.708C5.094 19.229 7.217 20 10 20a1 1 0 0 0 1-1v-2.966a1 1 0 0 0-1-1c-1.043 0-1.545-.51-1.784-1.034H10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1l.003 7.919c-.009.111-.199 2.741 1.688 4.789zM4 13V6h5v6H7a1 1 0 0 0-1 1c0 1.422.819 3.452 3 3.931v1.028c-1.69-.146-2.973-.68-3.822-1.59C3.881 14.978 3.996 13.095 4 13z" key="k0" />
]


const QuoteLeft = ({ title, ...restProps }) => {
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
          ? [<title key="QuoteLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-QuoteLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

QuoteLeft.displayName = 'QuoteLeft'

QuoteLeft.defaultProps = { height: 24, width: 24}

export default QuoteLeft
