import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M215.4 145.5c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L133.3 200H80.5c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.5zM447.5 256c0-59.3-23.2-114.8-65.4-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17 37.6 37.1 58.2 86.6 58.2 139.4 0 52.8-20.7 102.3-58.2 139.4-4.7 4.7-4.8 12.3-.1 17 2.3 2.4 5.4 3.6 8.5 3.6 3 0 6.1-1.2 8.4-3.5 42.3-41.6 65.5-97.2 65.5-156.5z" key="k0" />
,
<path d="M384.9 256c0-43.5-16.6-84.3-46.8-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.7 26.1 39.9 60.9 39.9 98.1 0 37.2-14.2 72-39.9 98.1-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 30.2-30.8 46.9-71.6 46.9-115.1z" key="k1" />
,
<path d="M287.5 182.5c-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 14.8 15 23 35.1 23 56.6 0 21.4-8.2 41.5-23 56.6-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 19.3-19.6 29.9-45.6 29.9-73.4.1-27.9-10.5-54-29.8-73.6z" key="k2" />
]


const VolumeHigh = ({ title, ...restProps }) => {
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
          ? [<title key="VolumeHigh-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VolumeHigh',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VolumeHigh.displayName = 'VolumeHigh'

VolumeHigh.defaultProps = { height: undefined, width: undefined}

export default VolumeHigh
