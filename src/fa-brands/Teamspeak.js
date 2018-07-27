import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M203.4 65.8c-10.3-2-42.1-3.7-52.3-3.7-8.4 0-6.9 2-6.9 2 63.7 50.1 75.4 121.1 75.6 122.1 1.9 15.6-3.1 22.9-8.7 31.3-1.4 1.8-2.7 5 .3 8.9l28.9 39.4h-.3c9.4 14.1 28.1 32.2-5.4 39.9-7.7 1.9-18.7 6.3-11.2 15.8 2.2 2.9 8.8 9.5 1.8 16.5-7.5 4.8-2.7 7.9-1.8 10.4 1.8 6.6-2.6 11.2-4.3 12.7-4.2 3.2-3.7 7.8-2.6 10.1v.1c3.1 13.1-1.7 27.1-3.9 34.9l.1-.1c-1.4 3.2 22-2.6 22.1-2.6 87.5-23 150.6-88.5 150.6-165.7-.1-86.3-78.7-157.9-182-172m239.4 126.7c-12.9-35.4-34.5-62.3-58.9-85.4-75.8-71.7-175.6-76.6-214-74.8C133 34 79.5 43.7 67.1 59.4c-4.6 5.8-4 6.2-24.4 103.2C36.7 165 0 181.3 0 225.9c-.3 88.7 133.8 89.3 133.8-.3 0-24.6-13-46.1-32.5-58V49.2c12-3 119.7-28.8 223.6 37.3 29.8 19 104.3 76.9 96.9 182.8-1.5 21.2-5.7 40.8-13.6 56.4-57 113.5-170.7 133.8-212.8 137.9-68.3 6.6-122.5-14.1-124-14-2.7.1-12 7.1-11.7 7.4 36.6 12.1 74.3 23 121 23 48 0 84.3-8.2 118-21.6C401.8 417.3 453.6 340 453.6 253.7c0-22.9-4.3-43.2-10.8-61.2m-246.3 33.6c-8.5-15.6.5-15.9 4.8-23.4 5.5-9.6 1.7-22.1-1.7-32.2-9.6-28.5-33.8-84.5-83-103.6v100c4.5 4.5 54.1 33.5 58.2 116.8 4.1 82.7-52 121.6-51.7 123.3 22.8 4.5 66 10.7 76.7-8.6 5.7-10.2-1.5-28.1-.9-28.1-3.6-14.2 7.8-19.4 7.8-21.8 0-1.4-7.2-3.1-7.2-8.1 0-5.9 8.5-6.2 9.4-10.7.9-4.5-3.1-7.8-5.1-16.6-3.5-19 27.9-16 30.8-23.1 1.4-3.3-1.4-7.8-3.4-10.7" key="k0" />
]


const Teamspeak = ({ title, ...restProps }) => {
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
          ? [<title key="Teamspeak-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 453 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Teamspeak',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Teamspeak.displayName = 'Teamspeak'

Teamspeak.defaultProps = { height: undefined, width: undefined}

export default Teamspeak
