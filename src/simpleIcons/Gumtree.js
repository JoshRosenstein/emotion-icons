import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.829 6.52a.664.664 0 0 1-.315-.57C18.198 2.596 15.412 0 11.994 0s-6.203 2.594-6.52 5.949a.667.667 0 0 1-.314.57 6.533 6.533 0 0 0-2.785 5.378c0 3.038 2.087 5.573 4.872 6.331.507.127.95.189 1.14.061.379-.188.76-1.832.57-2.213-.128-.189-.57-.379-1.014-.506a3.871 3.871 0 0 1-2.848-3.732c0-1.015.379-1.9 1.014-2.6.252-.315.63-.567.948-.757.696-.38 1.14-1.142 1.14-1.964 0-.45.063-.826.189-1.201a3.882 3.882 0 0 1 3.67-2.659 3.883 3.883 0 0 1 3.672 2.659c.126.375.189.751.189 1.201 0 .812.381 1.578 1.142 1.953.379.18.694.436.946.752a3.777 3.777 0 0 1 1.014 2.598 3.838 3.838 0 0 1-3.86 3.861 4.433 4.433 0 0 0-4.431 4.416v2.523c0 .496.064 1.006.19 1.142.315.316 1.962.316 2.278 0 .136-.136.195-.631.195-1.142v-2.583c0-.946.766-1.713 1.713-1.713a6.515 6.515 0 0 0 6.52-6.52 6.476 6.476 0 0 0-2.78-5.317l-.015.033z" key="k0" />
]

export const hex='#72EF36'
const Gumtree = ({ title, ...restProps }) => {
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
          ? [<title key="Gumtree-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Gumtree',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Gumtree.displayName = 'Gumtree'

Gumtree.defaultProps = { height: 24, width: 24}

export default Gumtree
