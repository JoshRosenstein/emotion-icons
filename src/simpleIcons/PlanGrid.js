import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16.6 0c2.6 0 4.262.009 5.828 1.574C23.99 3.141 24 4.794 24 7.401v9.2c0 2.6-.01 4.261-1.574 5.828C20.859 23.991 19.207 24 16.598 24h-9.2c-2.599 0-4.26-.009-5.827-1.574C.01 20.861 0 19.207 0 16.599v-9.2C0 4.8.01 3.138 1.574 1.572 3.141.01 4.793 0 7.4 0h9.201-.001zm4.398 11.151C20.57 6.578 16.684 3.002 12 3.002c-4.971 0-9 4.027-9 8.998 0 4.801 3.752 8.734 8.485 9h7.136A2.385 2.385 0 0 0 21 18.619v-7.47l-.002.002zm-2.285 8.589a1.025 1.025 0 0 1 0-2.048 1.024 1.024 0 1 1 0 2.048zM12 18.949A6.956 6.956 0 0 1 5.051 12 6.956 6.956 0 0 1 12 5.051 6.956 6.956 0 0 1 18.949 12 6.956 6.956 0 0 1 12 18.949z" key="k0" />
]

export const hex='#0085DE'
const PlanGrid = ({ title, ...restProps }) => {
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
          ? [<title key="PlanGrid-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PlanGrid',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PlanGrid.displayName = 'PlanGrid'

PlanGrid.defaultProps = { height: 24, width: 24}

export default PlanGrid
