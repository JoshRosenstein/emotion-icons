import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.152 14.434A3.449 3.449 0 0 0 6.5 14C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.5-1.57 3.5-3.5c0-.601-.166-1.158-.434-1.652L12 13.414 18.586 20h2.828L9.566 8.152A3.449 3.449 0 0 0 10 6.5C10 4.57 8.43 3 6.5 3S3 4.57 3 6.5 4.57 10 6.5 10c.601 0 1.158-.166 1.652-.434L10.586 12l-2.434 2.434zM6.5 19c-.827 0-1.5-.673-1.5-1.5S5.673 16 6.5 16s1.5.673 1.5 1.5S7.327 19 6.5 19zM5 6.5C5 5.673 5.673 5 6.5 5S8 5.673 8 6.5 7.327 8 6.5 8 5 7.327 5 6.5z" key="k0" />
,
<path d="M13.293 9.293l1.414 1.414L21.414 4h-2.828z" key="k1" />
]


const Cut = ({ title, ...restProps }) => {
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
          ? [<title key="Cut-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cut',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Cut.displayName = 'Cut'

Cut.defaultProps = { height: 24, width: 24}

export default Cut
