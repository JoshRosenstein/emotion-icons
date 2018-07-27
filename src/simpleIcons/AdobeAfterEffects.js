import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm5.784 12.25l-.792 2.986c-.017.083-.05.113-.148.113H4.376c-.1 0-.116-.035-.1-.15l2.84-9.933c.05-.18.082-.325.098-.82 0-.066.033-.1.083-.1h2.096c.066 0 .1.018.116.1l3.183 10.77c.016.082 0 .13-.083.13h-1.65c-.082 0-.13-.03-.147-.096l-.825-3.002h-3.2zm2.806-1.624c-.28-1.106-.96-3.53-1.206-4.7h-.016c-.214 1.17-.756 3.148-1.17 4.7H9.59zm5.36 1.024c.017 1.353.66 2.26 2.178 2.26.594 0 1.103-.078 1.63-.31.067-.032.117-.015.117.067v1.254c0 .1-.033.15-.1.2-.527.264-1.184.38-2.01.38-2.64 0-3.63-1.947-3.63-4.125 0-2.36 1.222-4.29 3.367-4.29 2.178 0 2.937 1.833 2.937 3.317 0 .48-.035.876-.085 1.057-.017.082-.05.11-.132.127-.198.033-.792.066-1.667.066H14.95zm2.03-1.375c.512 0 .693 0 .742-.016 0-.068.017-.125.017-.174 0-.545-.266-1.544-1.306-1.544-.957 0-1.37.842-1.468 1.732h2.013z" key="k0" />
]

export const hex='#D291FF'
const AdobeAfterEffects = ({ title, ...restProps }) => {
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
          ? [<title key="AdobeAfterEffects-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AdobeAfterEffects',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AdobeAfterEffects.displayName = 'AdobeAfterEffects'

AdobeAfterEffects.defaultProps = { height: 24, width: 24}

export default AdobeAfterEffects
