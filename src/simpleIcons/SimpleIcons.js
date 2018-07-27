import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 12v-1.5c-2.484 0-4.5-2.016-4.5-4.5S9.516 1.5 12 1.5s4.5 2.016 4.5 4.5H18c0-3.312-2.688-6-6-6S6 2.688 6 6s2.688 6 6 6z" key="k0" />
,
<path d="M15.037 12.826a6.002 6.002 0 0 1 2.138 8.214h1.68a7.504 7.504 0 0 0-6.851-10.54V12c1.066 0 2.113.286 3.033.826zM12.003 10.5H12h.003M6.828 21.04A5.943 5.943 0 0 1 6 18v-.03H4.5V18a7.423 7.423 0 0 0 .645 3.04h1.683z" key="k1" />
,
<path d="M15 22.5v-6h1.5V15h-9v1.5H9v6H4.5V24h15v-1.5H15zm-1.5 0h-3v-6h3v6zM9.078 5.922A3 3 0 0 0 12 9a3 3 0 0 0 0-6 3 3 0 0 0-2.922 2.922zm4.422.08a1.5 1.5 0 1 1 0-.002z" key="k2" />
]

export const hex='#111111'
const SimpleIcons = ({ title, ...restProps }) => {
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
          ? [<title key="SimpleIcons-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SimpleIcons',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SimpleIcons.displayName = 'SimpleIcons'

SimpleIcons.defaultProps = { height: 24, width: 24}

export default SimpleIcons
