import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.128 0h11.011c.176 0 .264.09.264.267v4.124c0 .18-.09.267-.264.267H9.422c-.177 0-.265.09-.265.27v4.491c.045.18.135.27.266.27h8.617c.179 0 .269.09.269.27v3.982c0 .18-.09.27-.269.27H9.429c-.134 0-.221.09-.266.27V19c0 .179.09.269.265.269h10.046c.135 0 .224.075.27.21a4.106 4.106 0 0 1 0 1.991 3.451 3.451 0 0 1-.54 1.197c-.254.374-.673.689-1.242.944-.585.254-1.288.389-2.096.389H4.399c-.178 0-.266-.091-.266-.269V3.997c0-1.107.389-2.052 1.164-2.829C6.076.389 7.017 0 8.128 0z" key="k0" />
]

export const hex='#F6682F'
const Eventbrite = ({ title, ...restProps }) => {
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
          ? [<title key="Eventbrite-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Eventbrite',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Eventbrite.displayName = 'Eventbrite'

Eventbrite.defaultProps = { height: 24, width: 24}

export default Eventbrite
