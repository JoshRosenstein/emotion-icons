import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm7.775 15.218c0 .1-.017.132-.132.132H7.107c-.1 0-.132-.05-.132-.132V5.782c0-.1.05-.132.132-.132H8.66c.082 0 .115.033.115.116v10.752zm1.77-3.872c0-2.393 1.578-4.257 4.102-4.257.214 0 .33 0 .528.015V5.75c0-.066.05-.1.1-.1H16.9c.084 0 .1.034.1.084v9.355c0 .28 0 .625.05 1.004 0 .066-.02.083-.087.116a6.063 6.063 0 0 1-2.624.595c-2.213 0-3.797-1.37-3.797-4.158zm4.63-2.624c-.148-.066-.347-.1-.594-.1-1.285 0-2.187.99-2.187 2.64 0 1.882.918 2.64 2.073 2.64.247 0 .512-.032.71-.115v-5.065z" key="k0" />
]

export const hex='#FD3F93'
const AdobeInDesign = ({ title, ...restProps }) => {
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
          ? [<title key="AdobeInDesign-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AdobeInDesign',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AdobeInDesign.displayName = 'AdobeInDesign'

AdobeInDesign.defaultProps = { height: 24, width: 24}

export default AdobeInDesign
