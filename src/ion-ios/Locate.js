import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M395.3 259c-.3-1.2-.4-2.4-.3-3.6 0-.8.2-1.6.3-2.4-.4.9-.6 2-.6 3 .1 1.1.3 2.1.6 3z" key="k0" />
,
<path d="M459.4 270H409c-6.7 0-12.3-4.7-13.7-11-.3-.9-.5-1.9-.5-3s.2-2.1.6-3c1.4-6.4 7.3-11 14.1-11h49.9c2.4 0 4.2-2 4-4.4-8.8-100.3-88.7-180.2-189-189-2.3-.2-4.4 1.6-4.4 4V103c0 7.9-6.6 14.3-14.6 14-7.6-.3-13.4-6.9-13.4-14.4v-50c0-2.4-2-4.2-4.4-4-100.3 8.8-180.2 88.7-189 189-.2 2.3 1.6 4.4 4 4.4H103c7.9 0 14.3 6.6 14 14.6-.3 7.6-6.9 13.4-14.4 13.4h-50c-2.4 0-4.2 2-4 4.4 8.8 100.3 88.7 180.2 189 189 2.3.2 4.4-1.6 4.4-4V409c0-7.9 6.6-14.3 14.6-14 7.6.3 13.4 6.9 13.4 14.4v49.9c0 2.4 2 4.2 4.4 4 100.3-8.8 180.2-88.7 189-189 .2-2.3-1.7-4.3-4-4.3zM256 326c-38.7 0-70-31.3-70-70s31.3-70 70-70 70 31.3 70 70-31.3 70-70 70z" key="k1" />
]


const Locate = ({ title, ...restProps }) => {
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
          ? [<title key="Locate-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Locate',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Locate.displayName = 'Locate'

Locate.defaultProps = { height: undefined, width: undefined}

export default Locate
