import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 21.5c1.387 0 2.5-1.113 2.5-2.5h-5c0 1.387 1.113 2.5 2.5 2.5zm8-3.5a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087a7.977 7.977 0 0 0-4.783 2.57L3.707 2.293 2.293 3.707l18 18 1.414-1.414L19.414 18H20zM4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h9.879L4.19 8.312C4.07 8.858 4 9.422 4 10z" key="k0" />
]


const BellOff = ({ title, ...restProps }) => {
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
          ? [<title key="BellOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BellOff',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BellOff.displayName = 'BellOff'

BellOff.defaultProps = { height: 24, width: 24}

export default BellOff
