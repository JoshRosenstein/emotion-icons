import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M407.1 211.2c-3.5-1.4-11.6-3.8-15.4-3.8-37.1 0-62.2 16.8-93.5 34.5l-.9-.9c7-47.3 23.5-91.9 23.5-140.4C320.8 29.1 282.6 0 212.4 0 97.3 0 39 113.7 39 198.4 39 286.3 90.3 335 177.6 335c12 0 11-1 11 3.8-16.9 128.9-90.8 133.1-90.8 94.6 0-39.2 45-58.6 45.5-61-.3-12.2-47-27.6-58.9-27.6-33.9.1-52.4 51.2-52.4 79.3C32 476 64.8 512 117.5 512c77.4 0 134-77.8 151.4-145.4 15.1-60.5 11.2-63.3 19.7-67.6 32.2-16.2 57.5-27 93.8-27 17.8 0 30.5 3.7 58.9 8.4 2.9 0 6.7-2.9 6.7-5.8 0-8-33.4-60.5-40.9-63.4zm-175.3-84.4c-9.3 44.7-18.6 89.6-27.8 134.3-2.3 10.2-13.3 7.8-22 7.8-38.3 0-49-41.8-49-73.1 0-47 18-109.3 61.8-133.4 7-4.1 14.8-6.7 22.6-6.7 18.6 0 20 13.3 20 28.7-.1 14.3-2.7 28.5-5.6 42.4z" key="k0" />
]


const GlideG = ({ title, ...restProps }) => {
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
          ? [<title key="GlideG-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GlideG',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GlideG.displayName = 'GlideG'

GlideG.defaultProps = { height: undefined, width: undefined}

export default GlideG
