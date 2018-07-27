import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15 12.004c0 .893-.165 1.746-.461 2.535a7.172 7.172 0 0 1-2.535.461h-.009a7.193 7.193 0 0 1-2.534-.461A7.18 7.18 0 0 1 9 12.004v-.009c0-.893.164-1.745.461-2.534A7.175 7.175 0 0 1 11.995 9h.009c.893 0 1.748.164 2.535.462.297.788.461 1.641.461 2.535v.007zM23.835 10H16.83l4.948-4.952a12.052 12.052 0 0 0-2.825-2.829l-4.954 4.949V.165A12.577 12.577 0 0 0 12.004 0h-.01c-.68 0-1.346.061-1.995.165V7.17l-4.95-4.949a11.997 11.997 0 0 0-2.83 2.827L7.168 10H.165S0 11.316 0 11.995v.009c0 .68.061 1.348.165 1.995H7.17l-4.949 4.952a11.981 11.981 0 0 0 2.827 2.83L10 16.831v7.004a12.44 12.44 0 0 0 1.991.165h.017c.679 0 1.344-.06 1.991-.165v-7.004l4.952 4.95c.548-.375 1.06-.812 1.529-1.29h.005c.473-.465.906-.976 1.296-1.531l-4.95-4.949h7.004c.105-.645.165-1.304.165-1.98V12c0-.678-.06-1.343-.165-1.99" key="k0" />
]

export const hex='#FF4A00'
const Zapier = ({ title, ...restProps }) => {
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
          ? [<title key="Zapier-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Zapier',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Zapier.displayName = 'Zapier'

Zapier.defaultProps = { height: 24, width: 24}

export default Zapier
