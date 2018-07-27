import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.999 21.988v-2.036c3.659-.327 5-2.45 5-4.452 0-2.847-2.821-4.281-5-4.475V6.042c2.144.174 3.54.847 3.556.854l.892-1.791c-.081-.04-1.809-.882-4.447-1.066V2h-2v2.048c-3.659.327-5 2.45-5 4.452 0 2.847 2.821 4.281 5 4.475v4.984c-2.144-.175-3.54-.847-3.553-.854l-.895 1.789c.081.04 1.809.882 4.447 1.065v2.028h2zm0-8.951c1.368.174 3 1.033 3 2.463 0 1.365-1.083 2.227-3 2.442v-4.905zm-5-4.537c0-1.389 1.06-2.236 3-2.445v4.91c-1.254-.164-3-.919-3-2.465z" key="k0" />
]


const Dollar = ({ title, ...restProps }) => {
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
          ? [<title key="Dollar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Dollar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Dollar.displayName = 'Dollar'

Dollar.defaultProps = { height: 24, width: 24}

export default Dollar
