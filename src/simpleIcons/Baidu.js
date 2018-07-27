import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4.312 12.65c2.61-.562 2.25-3.684 2.176-4.366-.128-1.05-1.366-2.888-3.044-2.74-2.11.186-2.418 3.24-2.418 3.24-.287 1.41.682 4.426 3.286 3.865m4.845-5.24c1.44 0 2.604-1.66 2.604-3.71 0-2.04-1.16-3.7-2.6-3.7S6.55 1.65 6.55 3.7s1.17 3.71 2.61 3.71m6.207.245c1.93.26 3.162-1.8 3.412-3.36.25-1.55-1-3.36-2.36-3.67-1.37-.316-3.06 1.874-3.23 3.3-.18 1.75.25 3.49 2.17 3.737M23 10.284c0-.746-.613-2.993-2.91-2.993-2.295 0-2.61 2.12-2.61 3.62 0 1.43.118 3.42 2.985 3.36 2.855-.07 2.543-3.24 2.543-3.99M20.1 16.82s-2.985-2.31-4.726-4.8c-2.36-3.677-5.715-2.18-6.834-.316-1.12 1.883-2.86 3.062-3.105 3.377-.25.31-3.6 2.12-2.854 5.42.75 3.3 3.36 3.24 3.36 3.24s1.92.19 4.16-.31 4.16.12 4.16.12 5.207 1.75 6.648-1.61c1.424-3.37-.81-5.11-.81-5.11" key="k0" />
]

export const hex='#2319DC'
const Baidu = ({ title, ...restProps }) => {
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
          ? [<title key="Baidu-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Baidu',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Baidu.displayName = 'Baidu'

Baidu.defaultProps = { height: 24, width: 24}

export default Baidu
