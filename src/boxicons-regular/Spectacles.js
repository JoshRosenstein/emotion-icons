import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22 14c0-.12-.021-.239-.063-.352l-3-8A1.002 1.002 0 0 0 18 5h-2v2h1.307l1.38 3.679A4.443 4.443 0 0 0 17.5 10.5c-2.137 0-3.922 1.5-4.379 3.5h-2.242c-.457-2-2.242-3.5-4.379-3.5-.413 0-.806.074-1.187.179L6.693 7H8V5H6c-.417 0-.79.259-.937.648l-3 8A1.01 1.01 0 0 0 2 14v.938h.006c0 .021-.006.041-.006.062 0 2.481 2.019 4.5 4.5 4.5 2.137 0 3.922-1.5 4.379-3.5h2.242c.457 2 2.242 3.5 4.379 3.5 2.481 0 4.5-2.019 4.5-4.5 0-.021-.006-.041-.006-.063H22V14zM6.5 17.5C5.121 17.5 4 16.379 4 15s1.121-2.5 2.5-2.5S9 13.621 9 15s-1.121 2.5-2.5 2.5zm11 0c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5S20 13.621 20 15s-1.121 2.5-2.5 2.5z" key="k0" />
]


const Spectacles = ({ title, ...restProps }) => {
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
          ? [<title key="Spectacles-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Spectacles',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Spectacles.displayName = 'Spectacles'

Spectacles.defaultProps = { height: 24, width: 24}

export default Spectacles
