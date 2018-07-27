import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9.879 10.995l1.035 3.085 3.205-1.074-1.035-3.074-3.205 1.08v-.017z" key="k0" />
,
<path d="M18.824 14.055l-1.555.521.54 1.61a1.246 1.246 0 0 1-1.221 1.637 1.26 1.26 0 0 1-1.155-.849l-.54-1.607-3.21 1.073.539 1.608a1.249 1.249 0 0 1-1.229 1.639 1.266 1.266 0 0 1-1.156-.85l-.539-1.619-1.561.524c-.15.045-.285.061-.435.061a1.269 1.269 0 0 1-1.155-.855 1.235 1.235 0 0 1 .78-1.575l1.56-.525L7.5 11.76l-1.551.525a1.264 1.264 0 0 1-.428.064 1.247 1.247 0 0 1-1.141-.848 1.25 1.25 0 0 1 .796-1.574l1.56-.52-.54-1.605a1.248 1.248 0 0 1 .796-1.575 1.239 1.239 0 0 1 1.574.783l.539 1.608L12.3 7.544l-.54-1.605a1.256 1.256 0 0 1 .789-1.574 1.249 1.249 0 0 1 1.575.791l.54 1.621 1.555-.51a1.247 1.247 0 0 1 1.575.779 1.244 1.244 0 0 1-.784 1.575l-1.557.524 1.035 3.086 1.551-.516a1.248 1.248 0 0 1 1.575.795c.22.66-.135 1.365-.779 1.574l-.011-.029zm4.171-5.356C20.52.456 16.946-1.471 8.699 1.005.456 3.479-1.471 7.051 1.005 15.301c2.475 8.245 6.046 10.17 14.296 7.694 8.245-2.475 10.17-6.046 7.694-14.296z" key="k1" />
]

export const hex='#56B68B'
const Slack = ({ title, ...restProps }) => {
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
          ? [<title key="Slack-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Slack',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Slack.displayName = 'Slack'

Slack.defaultProps = { height: 24, width: 24}

export default Slack
