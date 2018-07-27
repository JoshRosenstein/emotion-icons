import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.5 5c-.813 0-1.5.687-1.5 1.5S16.687 8 17.5 8 19 7.313 19 6.5 18.313 5 17.5 5z" key="k0" />
,
<path d="M17.5 2h-11C4.002 2 1.97 4.012 1.97 6.484c0 .087.013.172.036.255A4.507 4.507 0 0 0 6.5 11h11c2.481 0 4.5-2.019 4.5-4.516C22 4.012 19.981 2 17.5 2zm0 7h-11A2.502 2.502 0 0 1 4 6.5a.922.922 0 0 0-.023-.203C4.074 5.015 5.169 4 6.5 4h11C18.902 4 20 5.091 20 6.5 20 7.879 18.879 9 17.5 9zm-11 7c-.813 0-1.5.687-1.5 1.5S5.687 19 6.5 19 8 18.313 8 17.5 7.313 16 6.5 16z" key="k1" />
,
<path d="M17.5 13h-11c-2.498 0-4.53 2.012-4.53 4.484 0 .087.013.172.036.255A4.507 4.507 0 0 0 6.5 22h11c2.481 0 4.5-2.019 4.5-4.516C22 15.012 19.981 13 17.5 13zm0 7h-11A2.502 2.502 0 0 1 4 17.5a.922.922 0 0 0-.023-.203C4.074 16.015 5.169 15 6.5 15h11c1.402 0 2.5 1.091 2.5 2.5 0 1.379-1.121 2.5-2.5 2.5z" key="k2" />
]


const Toggle = ({ title, ...restProps }) => {
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
          ? [<title key="Toggle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Toggle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Toggle.displayName = 'Toggle'

Toggle.defaultProps = { height: 24, width: 24}

export default Toggle
