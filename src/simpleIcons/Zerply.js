import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.779 18.746c-.747.714-1.562 1.017-2.543 1.017-1.32 0-3.322-.61-4.846-1.66-1.629-1.119-3.765-2.237-5.562-2.271 1.323-1.798 3.39-3.628 5.322-5.798.713-.78 4.983-5.7 5.73-6.586.54-.645.813-1.424.813-2.205 0-.3-.033-.585-.101-.855-2.035.405-3.561.601-6.001.601-2.677.015-4.607-.314-5.73-.989-.78 1.018-1.56 2.373-1.56 3.12 0 .948.918 1.728 3.189 1.728.746 0 1.965-.034 3.66-.169-3.492 4.5-6.949 8.16-9.016 10.47a4.321 4.321 0 0 0-1.121 2.881c0 .405.075.81.18 1.185a12.239 12.239 0 0 1 1.965-.179c1.395 0 2.79.299 4.081.839C11.805 21.014 14.205 24 16.921 24c2.204 0 4.065-1.741 4.065-4.036 0-.404-.061-.825-.195-1.229l-.012.011z" key="k0" />
]

export const hex='#9DBC7A'
const Zerply = ({ title, ...restProps }) => {
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
          ? [<title key="Zerply-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Zerply',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Zerply.displayName = 'Zerply'

Zerply.defaultProps = { height: 24, width: 24}

export default Zerply