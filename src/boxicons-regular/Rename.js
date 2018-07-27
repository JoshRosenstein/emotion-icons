import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 6h-2v2h1v8h-1v2h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM3 18h10v-2H4V8h9V6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1z" key="k0" />
,
<path d="M6 10h7v4H6z" key="k1" />
,
<path d="M17 6.024C17.013 5.686 17.22 4 20 4V2c-1.986 0-3.238.67-3.993 1.511C15.255 2.67 14 2 12 2v2c2.8 0 2.99 1.678 3 2v11.998C15 18.08 14.962 20 12 20v2c2.003 0 3.257-.673 4.01-1.517.049.055.089.111.143.165C17.047 21.546 18.342 22 20 22v-2c-2.803 0-2.991-1.676-3-1.998V6.024z" key="k2" />
]


const Rename = ({ title, ...restProps }) => {
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
          ? [<title key="Rename-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Rename',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Rename.displayName = 'Rename'

Rename.defaultProps = { height: 24, width: 24}

export default Rename