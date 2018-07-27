import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 6h-.02C18.154 3.576 15.262 2 12 2 6.486 2 2 6.486 2 12s4.486 10 10 10c3.262 0 6.154-1.576 7.98-4H20v-.025c1.25-1.67 2-3.733 2-5.975s-.75-4.305-2-5.975V6zM9 19.411C6.072 18.222 4 15.35 4 12c0-.34.028-.672.069-1H5l1 2v2l2 2 1 1v1.411zM12 20a7.974 7.974 0 0 1-1.884-.233L11 18l1-2v-2h-2l-1-1H8l-1-2 1-2 1-1 1-1 1-2v-.931c.328-.041.66-.069 1-.069 1.892 0 3.629.663 5 1.765V7l-1 2 1 1v1l-2 1-1 1.016L15 14l1 1 1 2 .654.654A7.975 7.975 0 0 1 12 20z" key="k0" />
]


const World = ({ title, ...restProps }) => {
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
          ? [<title key="World-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-World',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

World.displayName = 'World'

World.defaultProps = { height: 24, width: 24}

export default World