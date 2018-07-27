import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C8.14 2 5 5.14 5 8.999 5 12.859 8.141 16 12 16s7-3.141 7-7.001C19 5.14 15.86 2 12 2zm3 6.999A3.003 3.003 0 0 0 12 6V4c2.756 0 5 2.242 5 4.999h-2z" key="k0" />
,
<path d="M12 16a6.98 6.98 0 0 0 5-2.11V13H7v.889A6.977 6.977 0 0 0 12 16zm0 2a8.947 8.947 0 0 1-5-1.522V21a.998.998 0 0 0 1.447.895L12 20.118l3.553 1.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851v-4.521A8.951 8.951 0 0 1 12 18z" key="k1" />
]


const Award = ({ title, ...restProps }) => {
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
          ? [<title key="Award-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Award',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Award.displayName = 'Award'

Award.defaultProps = { height: 24, width: 24}

export default Award
