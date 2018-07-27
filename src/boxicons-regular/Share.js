import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 7.054V4a1 1 0 0 0-1.707-.707l-7 7a.999.999 0 0 0 0 1.414l7 7A.999.999 0 0 0 11 18v-3.096c.284-.02.565-.029.843-.029 5.426 0 8.239 3.572 8.362 3.73a.996.996 0 0 0 1.113.343A1 1 0 0 0 22 18c0-9.124-8.086-10.681-11-10.946zm.843 5.821c-.647 0-1.312.045-1.975.133A1.001 1.001 0 0 0 9 14v1.586L4.414 11 9 6.414V8c0 .552.471 1 1.022 1 .91 0 8.114.201 9.679 6.425-1.654-1.218-4.281-2.55-7.858-2.55z" key="k0" />
]


const Share = ({ title, ...restProps }) => {
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
          ? [<title key="Share-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Share',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Share.displayName = 'Share'

Share.defaultProps = { height: 24, width: 24}

export default Share
