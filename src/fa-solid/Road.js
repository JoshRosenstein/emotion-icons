import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M567.3 383.6L429.9 78.2C426 69.5 417.4 64 408 64h-96.1l1.9 18.8c.7 7.1-4.8 13.2-11.9 13.2H274c-7.1 0-12.7-6.2-11.9-13.2L264 64h-96c-9.4 0-18 5.5-21.9 14.2L8.7 383.6C3.2 395.8 0 409.6 0 424c0 13.3 10.7 24 24 24h213.6c-7.1 0-12.7-6.2-11.9-13.2l10.8-104c.6-6.1 5.8-10.8 11.9-10.8h79.2c6.1 0 11.3 4.6 11.9 10.8l10.8 104c.7 7.1-4.8 13.2-11.9 13.2H552c13.2 0 24-10.7 24-24 0-13.9-3-27.7-8.7-40.4zM254.7 154.8l3.3-32c.6-6.1 5.8-10.8 11.9-10.8h36.2c6.1 0 11.3 4.6 11.9 10.8l3.3 32c.7 7.1-4.8 13.2-11.9 13.2h-42.8c-7.1 0-12.7-6.2-11.9-13.2zM321.8 288h-67.6c-7.1 0-12.7-6.2-11.9-13.2l7.4-72c.6-6.1 5.8-10.8 11.9-10.8h52.7c6.1 0 11.3 4.6 11.9 10.8l7.4 72c.9 7-4.7 13.2-11.8 13.2z" key="k0" />
]


const Road = ({ title, ...restProps }) => {
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
          ? [<title key="Road-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 576 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Road',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Road.displayName = 'Road'

Road.defaultProps = { height: undefined, width: undefined}

export default Road
