import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.999 18.676l-4.432-2.556-4.783 2.764V24l9.215-5.324zM11.216 24v-5.119l-4.785-2.762-4.43 2.557L11.216 24zm.779-6.475l4.789-2.765V9.236l-4.785-2.76-4.783 2.76v5.527l4.781 2.761-.002.001zM1.22 6.682v10.641l4.432-2.559V9.239L1.219 6.68l.001.002zm19.615 1.121l-2.484 1.436v5.522l4.43 2.559V6.678l-1.946 1.125zM2.001 5.324l4.435 2.559 4.781-2.762V.003L2.001 5.324zm15.566 2.559l4.434-2.559L12.782 0v5.121l4.785 2.762z" key="k0" />
]

export const hex='#F8C300'
const Launchpad = ({ title, ...restProps }) => {
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
          ? [<title key="Launchpad-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Launchpad',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Launchpad.displayName = 'Launchpad'

Launchpad.defaultProps = { height: 24, width: 24}

export default Launchpad
