import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-88.5 364.8l49.2-85.8c1.1-1.9.5-4.2-1.3-5.4-20.2-12.9-34-35-35.2-60.3-.1-2.1-1.8-3.8-4-3.8H76V256c0-48.1 18.7-93.3 52.7-127.3 10.8-10.8 22.7-20 35.4-27.6l50.5 87.9c1.1 1.9 3.5 2.5 5.4 1.5 10.7-5.8 22.9-9 35.9-9 12.5 0 24.4 3.1 34.8 8.5 1.9 1 4.2.3 5.3-1.5l51.1-87.7c13 7.7 25.1 17 36.1 28 34 34 52.7 79.2 52.7 127.3v1.5h-100c-2.1 0-3.9 1.7-4 3.8-1.3 25.4-15 47.5-35.2 60.3-1.8 1.2-2.4 3.5-1.3 5.4l49.2 85.8c-26.7 15.1-57 23.2-88.5 23.2-31.6-.1-61.9-8.2-88.6-23.3z" key="k0" />
,
<circle cx={256} cy={256} r={56} key="k1" />
]


const Nuclear = ({ title, ...restProps }) => {
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
          ? [<title key="Nuclear-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Nuclear',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Nuclear.displayName = 'Nuclear'

Nuclear.defaultProps = { height: undefined, width: undefined}

export default Nuclear
