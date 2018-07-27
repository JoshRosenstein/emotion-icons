import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={4} x2={20} y1={9} y2={9} key="k0" />
,
<line x1={4} x2={20} y1={15} y2={15} key="k1" />
,
<line x1={10} x2={8} y1={3} y2={21} key="k2" />
,
<line x1={16} x2={14} y1={3} y2={21} key="k3" />
]


const Hash = ({ title, ...restProps }) => {
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
          ? [<title key="Hash-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hash',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

Hash.displayName = 'Hash'

Hash.defaultProps = { height: 24, width: 24}

export default Hash
