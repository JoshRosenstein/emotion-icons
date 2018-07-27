import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.445 8.623a4.991 4.991 0 0 0-1.74-.301c-1.92 0-3.275.968-3.285 2.355-.012 1.02.964 1.594 1.701 1.936.757.35 1.01.57 1.008.885-.005.477-.605.693-1.162.693-.766 0-1.186-.107-1.831-.375l-.239-.111-.271 1.598c.466.195 1.306.362 2.175.375 2.041 0 3.375-.961 3.391-2.439.016-.813-.51-1.43-1.621-1.938-.674-.33-1.094-.551-1.094-.886 0-.296.359-.612 1.109-.612a3.56 3.56 0 0 1 1.455.273l.18.081.271-1.544-.047.01zm4.983-.17h-1.5c-.467 0-.816.127-1.021.591l-2.885 6.534h2.041l.408-1.07 2.49.002c.061.25.24 1.068.24 1.068H24l-1.572-7.125zM9.66 8.393h1.943l-1.215 7.129H8.444L9.66 8.391v.002zm-4.939 3.929l.202.99 1.901-4.859h2.059l-3.061 7.115H3.768l-1.68-6.026a.398.398 0 0 0-.18-.237A8.211 8.211 0 0 0 0 8.598l.025-.15h3.131c.424.016.766.15.883.604l.682 3.273v-.003zm15.308.727l.775-1.994c-.01.02.16-.412.258-.68l.133.615.449 2.057h-1.615v.002z" key="k0" />
]

export const hex='#142787'
const Visa = ({ title, ...restProps }) => {
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
          ? [<title key="Visa-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Visa',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Visa.displayName = 'Visa'

Visa.defaultProps = { height: 24, width: 24}

export default Visa
