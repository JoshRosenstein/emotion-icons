import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M576 56.015v335.97a23.998 23.998 0 0 1-13.267 21.466l-128 64C418.948 485.344 400 473.992 400 455.985v-335.97a23.998 23.998 0 0 1 13.267-21.466l128-64C557.052 26.656 576 38.008 576 56.015zm-206.253 42.07l-144-64c-15.751-7-33.747 4.461-33.747 21.932v335.967a24 24 0 0 0 14.253 21.931l144 64c15.751 7 33.747-4.461 33.747-21.931V120.017a24 24 0 0 0-14.253-21.932zm-228.48-63.536l-128 63.985A23.998 23.998 0 0 0 0 120v335.985c0 18.007 18.948 29.359 34.733 21.466l128-63.985A23.998 23.998 0 0 0 176 392V56.015c0-18.007-18.948-29.359-34.733-21.466z" key="k0" />
]


const Map = ({ title, ...restProps }) => {
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
          ? [<title key="Map-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 576 512',
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