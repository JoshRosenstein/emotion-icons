import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M444.485 422.426c4.689 4.689 4.684 12.287 0 16.971-32.804 32.804-85.991 32.804-118.795 0L210.176 323.883l-24.859 24.859C189.63 359.657 192 371.552 192 384c0 53.019-42.981 96-96 96S0 437.019 0 384s42.981-96 96-96c4.536 0 8.995.322 13.363.93l32.93-32.93-32.93-32.93c-4.368.608-8.827.93-13.363.93-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96c0 12.448-2.37 24.343-6.682 35.258l24.859 24.859L325.69 72.603c32.804-32.804 85.991-32.804 118.795 0 4.684 4.684 4.689 12.282 0 16.971L278.059 256l166.426 166.426zM96 96c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32m0 256c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32m112-108c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" key="k0" />
]


const Cut = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
      viewBox: '0 0 448 512',
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

Cut.defaultProps = { height: undefined, width: undefined}

export default Cut
