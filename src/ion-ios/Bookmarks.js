import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M416 32v127.9l-22.9-14.5-9.1-6.4-9.1 6.4-22.9 14.5V32h-41.4c-22.5.2-40.6 18.8-40.6 41.4v313.2c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14V73.4c0-22.6-18.1-41.2-40.6-41.4H95.1C64.8 32 40 56.8 40 87.1v289.8c0 30.3 24.8 55.1 55.1 55.1l108-.1c4.2.1 8.3.6 12.2 1.4 15.3 3.1 26.8 16.6 26.6 32.2-.1 7.2 5.2 13.6 12.4 14.4 8.5.9 15.7-5.7 15.6-14.1-.2-15.8 11.4-29.4 26.9-32.5 3.8-.8 7.9-1.2 12-1.3l108 .1c30.3 0 55.1-24.8 55.1-55.1V87.1C472 56.8 446.3 32 416 32z" key="k0" />
]


const Bookmarks = ({ title, ...restProps }) => {
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
          ? [<title key="Bookmarks-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bookmarks',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bookmarks.displayName = 'Bookmarks'

Bookmarks.defaultProps = { height: undefined, width: undefined}

export default Bookmarks
