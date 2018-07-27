import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16 5.004V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.004C5.325 6.438 3.5 9.259 3.5 12.5s1.825 6.063 4.5 7.496v1.045a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.045c2.675-1.434 4.5-4.255 4.5-7.496S18.675 6.438 16 5.004zM12 19a6.509 6.509 0 0 1-6.5-6.5C5.5 8.916 8.416 6 12 6s6.5 2.916 6.5 6.5c0 3.583-2.917 6.5-6.5 6.5z" key="k0" />
,
<path d="M13 8h-2v5h5v-2h-3z" key="k1" />
]


const Watch = ({ title, ...restProps }) => {
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
          ? [<title key="Watch-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Watch',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Watch.displayName = 'Watch'

Watch.defaultProps = { height: 24, width: 24}

export default Watch