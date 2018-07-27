import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.647 3.08a1 1 0 0 0-.728-.728 15.546 15.546 0 0 0-3.424-.383c-2.585 0-4.663.712-6.011 2.061A379.545 379.545 0 0 0 8.31 7.242c-1.215-.138-4.077-.203-6.017 1.737a1 1 0 0 0 0 1.415l11.313 11.313a1 1 0 0 0 1.414 0c1.954-1.953 1.894-4.814 1.767-6.01l3.184-3.183c3.191-3.191 1.74-9.181 1.676-9.434zm-4.505 6.607a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828zM5 15.969c-2 1-2 5-2 5s3 0 5-2l-3-3z" key="k0" />
]


const Rocket = ({ title, ...restProps }) => {
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
          ? [<title key="Rocket-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Rocket',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Rocket.displayName = 'Rocket'

Rocket.defaultProps = { height: 24, width: 24}

export default Rocket