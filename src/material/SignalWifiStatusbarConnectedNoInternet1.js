import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillOpacity={.3} d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z" key="k0" />
,
<path d="M7.34 14.95L13 21.99V22v-.01l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95zM22 22h2v-2h-2v2zm0-12v8h2v-8h-2z" key="k1" />
]


const SignalWifiStatusbarConnectedNoInternet1 = ({ title, ...restProps }) => {
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
          ? [<title key="SignalWifiStatusbarConnectedNoInternet1-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 26 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SignalWifiStatusbarConnectedNoInternet1',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SignalWifiStatusbarConnectedNoInternet1.displayName = 'SignalWifiStatusbarConnectedNoInternet1'

SignalWifiStatusbarConnectedNoInternet1.defaultProps = { height: 24, width: 26}

export default SignalWifiStatusbarConnectedNoInternet1
