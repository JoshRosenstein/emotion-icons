import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.381 18.056c-7.43.445-15.51 3.135-16.362 3.51l.989-2.789c2.521-1.166 8.775-3.469 16.486-4.019-.15.57-.961 2.671-1.125 3.285l.012.013zm2.649-7.509s-.363.765-.709 1.814c-2.954.18-7.635 1.154-9.915 1.98 1.186-1.08 8.686-8.61 8.686-8.61C20.985 7.71 24 10.155 24 10.155l-3.97.395v-.003zm-17.55.33c1.647-.75 6.265-2.146 10.685-3.181 0 0-8.497 7.845-10.859 10.275l1.95-5.28c-1.516.225-2.184.315-4.256.75l2.479-2.551.001-.013zm10.6-8.432c.734.359 3.45 2.205 4.419 2.888-3.096.074-9.135 1.409-11.652 2.25 2.065-1.568 5.903-4.53 7.233-5.148v.01z" key="k0" />
]

export const hex='#0074E4'
const Zillow = ({ title, ...restProps }) => {
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
          ? [<title key="Zillow-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Zillow',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Zillow.displayName = 'Zillow'

Zillow.defaultProps = { height: 24, width: 24}

export default Zillow
