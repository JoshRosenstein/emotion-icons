import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.471 10.533l1.771 1.688 5.598 5.141 2.4-2.291a.804.804 0 0 0-.046-.985L9.99 12.184l.01-.005-2.371-2.266a.788.788 0 0 1 .021-1.079l6.39-6.076L11.146 0 2.475 8.238a1.571 1.571 0 0 0 0 2.295h-.004zm19.056 2.937l-1.77-1.691-5.595-5.142-2.411 2.291a.773.773 0 0 0 .045.985l2.205 1.891h-.006l2.369 2.265a.77.77 0 0 1-.029 1.064l-6.391 6.075L12.855 24l8.67-8.238a1.57 1.57 0 0 0 0-2.295l.002.003z" key="k0" />
]

export const hex='#258AAF'
const SitePoint = ({ title, ...restProps }) => {
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
          ? [<title key="SitePoint-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SitePoint',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SitePoint.displayName = 'SitePoint'

SitePoint.defaultProps = { height: 24, width: 24}

export default SitePoint
