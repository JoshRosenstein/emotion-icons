import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M64 72.5v316.3c0 2.8 1.3 5.5 3.5 7l69.8 50.2c5.2 3.7 12.1-.3 12.1-7V122.7c0-2.8-1.3-5.5-3.5-7L76.1 65.4c-5.2-3.7-12.1.3-12.1 7.1zm104.7 50.8v316.3c0 6.7 6.9 10.8 12.1 7l62-36.7c2.2-1.6 3.5-4.2 3.5-7V86.6c0-6.7-6.9-10.8-12.1-7l-62 36.7c-2.2 1.5-3.5 4.1-3.5 7zm267.2-57.8l-69.8 50.7c-2.2 1.6-3.5 4.2-3.5 7v316.2c0 6.8 6.9 10.8 12.1 7l69.8-50.7c2.2-1.6 3.5-4.2 3.5-7V72.5c0-6.7-6.9-10.7-12.1-7zM265.7 85.6v316.2c0 2.8 1.3 5.5 3.5 7l62 37c5.2 3.8 12.1-.3 12.1-7V122.6c0-2.8-1.3-5.5-3.5-7l-62-37c-5.2-3.7-12.1.3-12.1 7z" key="k0" />
]


const Map = ({ title, ...restProps }) => {
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
          ? [<title key="Map-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Map',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Map.displayName = 'Map'

Map.defaultProps = { height: undefined, width: undefined}

export default Map
