import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM8.5 8c.828 0 1.5.896 1.5 2s-.672 2-1.5 2S7 11.104 7 10s.672-2 1.5-2zm6.7 9.6c-.763-1.017-1.93-1.6-3.2-1.6s-2.437.583-3.2 1.601L7.2 16.4A5.955 5.955 0 0 1 12 14c1.904 0 3.654.874 4.8 2.398L15.2 17.6zm.3-5.6c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z" key="k0" />
]


const SmileySad = ({ title, ...restProps }) => {
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
          ? [<title key="SmileySad-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SmileySad',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SmileySad.displayName = 'SmileySad'

SmileySad.defaultProps = { height: 24, width: 24}

export default SmileySad