import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.707 7.293a1 1 0 1 0-1.694.543c-.392 2.348-1.275 3.484-2.604 3.483 1.023-2.493 1.098-4.602.219-6.278C12.29 2.487 9.27 2.028 9.142 2.01A1.003 1.003 0 0 0 8 3c0 .025-.02 2.605-1.707 4.293C4.239 9.347 3 10.586 3 14c0 5.526 4.27 8 8.5 8 4.094 0 8.5-2.504 8.5-8 0-.181-.026-4.44-2.293-6.707zM13.65 19.718C12.637 19.834 9.641 19.581 8 13c0 0-1.387 3.475-.688 5.786C5.965 17.85 5 16.32 5 14c0-2.586.737-3.323 2.707-5.293C9.115 7.3 9.658 5.493 9.868 4.293c.675.276 1.521.784 1.988 1.676.693 1.322.44 3.201-.751 5.584a1.003 1.003 0 0 0 .447 1.342c.087.044.881.426 1.919.426 1.089 0 2.837-.426 3.879-2.874.635 1.666.65 3.528.65 3.553 0 3.385-2.047 5.097-4.35 5.718z" key="k0" />
]


const Hot = ({ title, ...restProps }) => {
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
          ? [<title key="Hot-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hot',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hot.displayName = 'Hot'

Hot.defaultProps = { height: 24, width: 24}

export default Hot