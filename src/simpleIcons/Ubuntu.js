import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm3.279 17.68a1.602 1.602 0 1 0 1.601 2.775 1.602 1.602 0 0 0-1.601-2.775zm-3.279-1a4.665 4.665 0 0 1-1.971-.435L8.916 18.24c.93.459 1.978.721 3.084.721a6.91 6.91 0 0 0 1.86-.256 2.24 2.24 0 0 1 1.095-1.587 2.244 2.244 0 0 1 1.92-.156 6.932 6.932 0 0 0 2.07-4.515l-2.285-.033A4.679 4.679 0 0 1 12 16.68zM7.32 12a4.68 4.68 0 0 1 1.99-3.83L8.14 6.209a6.969 6.969 0 0 0-2.881 4.035 2.22 2.22 0 0 1 .83 1.74c0 .704-.324 1.319-.83 1.739a6.97 6.97 0 0 0 2.881 4.034l1.17-1.965A4.585 4.585 0 0 1 7.32 12zm-3.48-1.602a1.602 1.602 0 1 0 0 3.203 1.602 1.602 0 0 0 0-3.203zM12 7.32a4.679 4.679 0 0 1 4.66 4.265l2.285-.034a6.949 6.949 0 0 0-2.07-4.516A2.246 2.246 0 0 1 13.86 5.29 7.124 7.124 0 0 0 12 5.04c-1.11 0-2.155.26-3.084.72l1.113 1.995A4.663 4.663 0 0 1 12 7.32zm3.279-1.001a1.603 1.603 0 0 0 2.189-.585 1.604 1.604 0 0 0-2.777-1.601 1.6 1.6 0 0 0 .588 2.186z" key="k0" />
]

export const hex='#E95420'
const Ubuntu = ({ title, ...restProps }) => {
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
          ? [<title key="Ubuntu-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Ubuntu',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Ubuntu.displayName = 'Ubuntu'

Ubuntu.defaultProps = { height: 24, width: 24}

export default Ubuntu
