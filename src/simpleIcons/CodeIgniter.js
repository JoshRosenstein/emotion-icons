import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.49 24a4.59 4.59 0 0 1-2.723-3.824 5.4 5.4 0 0 1 2.45-4.246c-.238.58-.18 1.24.15 1.77a1.625 1.625 0 0 0 1.655.646 1.697 1.697 0 0 0 .66-2.91A3.76 3.76 0 0 1 9.332 12a3.523 3.523 0 0 1 1.096-1.785c-.405 1.08.737 2.146 1.504 2.67 1.36.816 2.67 1.713 3.924 2.686a5.285 5.285 0 0 1 2 4.5 4.986 4.986 0 0 1-3.385 3.93c3.55-.79 7.21-3.61 7.28-7.61a8.288 8.288 0 0 0-4.9-7.38h-.13c.065.157.096.326.09.496.01-.11.01-.22 0-.33.016.13.016.26 0 .39a1.699 1.699 0 0 1-2.976.658c-1.17-1.5 0-3.207.196-4.857a6.171 6.171 0 0 0-2.554-5.36c.856 1.427-.284 3.3-1.113 4.366-.83 1.066-2.03 1.86-3.008 2.79a24.503 24.503 0 0 0-2.887 3.21 9.778 9.778 0 0 0-2 8.205 7.806 7.806 0 0 0 6.015 5.43H8.5z" key="k0" />
]

export const hex='#EE4623'
const CodeIgniter = ({ title, ...restProps }) => {
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
          ? [<title key="CodeIgniter-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CodeIgniter',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CodeIgniter.displayName = 'CodeIgniter'

CodeIgniter.defaultProps = { height: 24, width: 24}

export default CodeIgniter
