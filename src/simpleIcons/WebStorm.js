import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4.65 19.351h14.7V4.65H4.65v14.701zm6.901-1.726H5.926v-.945h5.625v.945zM15.676 6.33c.824 0 1.648.3 2.279.795l-.705 1.05a2.767 2.767 0 0 0-1.574-.6c-.496 0-.796.225-.796.57 0 .404.271.555 1.319.81 1.231.345 1.951.795 1.951 1.875 0 1.245-.945 1.95-2.25 1.95a4.32 4.32 0 0 1-2.625-1.005l.779-.976c.57.45 1.125.75 1.846.75.555 0 .9-.225.9-.6 0-.346-.227-.525-1.23-.795-1.246-.33-2.04-.676-2.04-1.905v-.044c0-1.125.9-1.875 2.146-1.875zm-8.625.12l.944 3.6 1.05-3.6h1.05l1.051 3.6.929-3.6h1.471l-1.8 6.225h-1.171l-1.004-3.6-1.02 3.6H7.396L5.595 6.45h1.456z" key="k0" />
,
<path d="M24 8.13l-1.919-4.755L20.88.495 15.301 0l-.871.84-1.11-.42-3.525 1.875L6 .045l-6 2.46 3.225 19.171L16.5 24l.84-4.26.15-.091H4.35V4.35h15.3v14.025l4.35-2.58-2.625-4.92" key="k1" />
]

export const hex='#00CDD7'
const WebStorm = ({ title, ...restProps }) => {
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
          ? [<title key="WebStorm-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-WebStorm',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

WebStorm.displayName = 'WebStorm'

WebStorm.defaultProps = { height: 24, width: 24}

export default WebStorm
