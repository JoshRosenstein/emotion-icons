import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M96 304c0 8.8 7.2 16 16 16h117.5l-96-96H112c-8.8 0-16 7.2-16 16v64zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.1-192-192 0-41.4 13.3-79.7 35.7-111.1l267.4 267.4C335.7 434.7 297.4 448 256 448zm45.2-192H384v32h-50.8l-32-32zm111.1 111.1L365.2 320H400c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H269.2L144.9 99.7C176.3 77.3 214.6 64 256 64c105.9 0 192 86.1 192 192 0 41.4-13.3 79.7-35.7 111.1zM320.6 128c-15.6 0-28.6-11.2-31.4-25.9-.7-3.6-4-6.1-7.7-6.1h-16.2c-5 0-8.7 4.5-8 9.4 4.6 30.9 31.2 54.6 63.3 54.6 15.6 0 28.6 11.2 31.4 25.9.7 3.6 4 6.1 7.7 6.1h16.2c5 0 8.7-4.5 8-9.4-4.6-30.9-31.2-54.6-63.3-54.6z" key="k0" />
]


const SmokingBan = ({ title, ...restProps }) => {
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
          ? [<title key="SmokingBan-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SmokingBan',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SmokingBan.displayName = 'SmokingBan'

SmokingBan.defaultProps = { height: undefined, width: undefined}

export default SmokingBan
