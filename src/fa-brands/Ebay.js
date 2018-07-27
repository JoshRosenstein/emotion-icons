import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M405.2 263.8c-29.1.9-47.2 6.2-47.2 25.3 0 12.4 9.9 25.8 35 25.8 33.7 0 51.6-18.4 51.6-48.4v-3.3c-11.8 0-26.3.1-39.4.6m71.5 39.7c0 9.3.3 18.6 1 26.8h-29.8c-.8-6.9-1.1-13.6-1.1-20.2-16.1 19.8-35.3 25.5-61.9 25.5-39.5 0-60.6-20.9-60.6-45 0-35 28.8-47.3 78.6-48.4 13.7-.3 29-.4 41.7-.4v-3.4c0-23.4-15-33-41-33-19.3 0-33.6 8-35 21.8h-33.7c3.6-34.4 39.7-43.1 71.5-43.1 38.1 0 70.3 13.5 70.3 53.8v65.6zm-349-56.8c-2.3-54.7-87.5-56.6-94.4 0h94.4zm-95 21.4c3.5 58.3 79.2 57.4 91.2 21.6H157c-6.4 34.4-43 46.1-74.4 46.1-57.2 0-82.5-31.5-82.5-74 0-46.8 26.2-77.6 83-77.6 45.3 0 78.4 23.7 78.4 75.4v8.5H32.7zm211 45.7c29.8 0 50.2-21.5 50.2-53.8 0-32.4-20.4-53.8-50.2-53.8-29.6 0-50.2 21.4-50.2 53.8 0 32.3 20.6 53.8 50.2 53.8m-82.2-186h32.1v80.6c15.7-18.7 37.4-24.2 58.7-24.2 35.7 0 75.4 24.1 75.4 76.2 0 43.6-31.5 75.4-76 75.4-23.3 0-45.1-8.3-58.7-24.9 0 6.6-.4 13.2-1.1 19.5h-31.5c.5-10.2 1.1-22.8 1.1-33.1V127.8zM640 189.5l-99.2 194.8h-35.9l28.5-54.1-74.6-140.7h37.5l54.9 109.9L606 189.5h34z" key="k0" />
]


const Ebay = ({ title, ...restProps }) => {
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
          ? [<title key="Ebay-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 640 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Ebay',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Ebay.displayName = 'Ebay'

Ebay.defaultProps = { height: undefined, width: undefined}

export default Ebay
