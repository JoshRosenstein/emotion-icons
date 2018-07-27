import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm5.648 15.325c-.116 0-.148-.05-.148-.148V5.733c0-.083.033-.132.116-.132H8.2c.084 0 .1.037.1.12v9.26h4.125c.083 0 .106.033.09.116l-.248 1.42c-.016.082-.066.115-.148.115H6.65zm7.402-6.476c0-.12 0-.416-.05-.977 0-.083.018-.1.084-.132.61-.246 2.058-.692 3.675-.692.08 0 .112.017.112.1V9.9c0 .084-.033.1-.116.1-.628-.033-1.564.05-1.91.198v6.31c0 .082-.033.115-.116.115h-1.57c-.08 0-.114-.033-.114-.116v-6.36z" key="k0" />
]

export const hex='#ADD5EC'
const AdobeLightroom = ({ title, ...restProps }) => {
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
          ? [<title key="AdobeLightroom-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AdobeLightroom',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AdobeLightroom.displayName = 'AdobeLightroom'

AdobeLightroom.defaultProps = { height: 24, width: 24}

export default AdobeLightroom