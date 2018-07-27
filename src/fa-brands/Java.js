import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M121.6 396s-19.6 11.4 13.9 15.2c40.6 4.6 61.3 4 106-4.5 0 0 11.8 7.4 28.2 13.8C169.5 463.4 42.9 418 121.6 396m-12.2-56.1s-21.9 16.2 11.6 19.7c43.3 4.5 77.6 4.8 136.8-6.6 0 0 8.2 8.3 21.1 12.8-121.3 35.5-256.3 2.9-169.5-25.9m103.2-95.1c24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3.1 0-175.2 43.8-91.5 140.2m132.6 192.6s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2 204.2 33.2 372.4-14.9 319.4-38.8M131 281.8s-93.1 22.1-33 30.1c25.4 3.4 76 2.6 123.1-1.3 38.5-3.2 77.2-10.2 77.2-10.2s-13.6 5.8-23.4 12.5c-94.5 24.9-277 13.3-224.5-12.1 44.5-21.4 80.6-19 80.6-19m167 93.3c96.1-49.9 51.6-97.9 20.6-91.4-7.6 1.6-11 3-11 3s2.8-4.4 8.2-6.3c61.3-21.6 108.5 63.6-19.8 97.3 0-.1 1.5-1.4 2-2.6M240 0s53.2 53.2-50.5 135c-83.1 65.6-19 103.1 0 145.8-48.5-43.8-84.1-82.3-60.2-118.2C164.4 110.1 261.5 84.5 240 0m-99.5 510.4c92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6" key="k0" />
]


const Java = ({ title, ...restProps }) => {
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
          ? [<title key="Java-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 377 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Java',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Java.displayName = 'Java'

Java.defaultProps = { height: undefined, width: undefined}

export default Java
