import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6.815 15.128l4.704 2.715V12.41L6.813 9.696v5.433z" key="k0" />
,
<path d="M4.79 16.296l6.73 3.883V24L1.48 18.207V6.617l3.31 1.91v7.77zM12 6.146L7.297 8.864 12 11.58l4.705-2.717L12 6.147z" key="k1" />
,
<path d="M12 3.813l5.66 3.275 3.31-1.91L12 0 1.973 5.79 5.28 7.697 12 3.813zm7.208 12.483v-3.948l-2.023 1.167v1.614l-4.704 2.715v.005-5.436L22.52 6.62v11.588l-10.04 5.795v-3.817l6.728-3.888z" key="k2" />
]

export const hex='#6A5FBB'
const NintendoGameCube = ({ title, ...restProps }) => {
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
          ? [<title key="NintendoGameCube-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-NintendoGameCube',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

NintendoGameCube.displayName = 'NintendoGameCube'

NintendoGameCube.defaultProps = { height: 24, width: 24}

export default NintendoGameCube
