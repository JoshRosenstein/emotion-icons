import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9 14h6v1.5H9z" key="k0" />
,
<circle cx={15.5} cy={9.5} r={1.5} key="k1" />
,
<circle cx={8.5} cy={9.5} r={1.5} key="k2" />
,
<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" key="k3" />
]


const SentimentNeutral = ({ title, ...restProps }) => {
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
          ? [<title key="SentimentNeutral-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SentimentNeutral',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SentimentNeutral.displayName = 'SentimentNeutral'

SentimentNeutral.defaultProps = { height: 24, width: 24}

export default SentimentNeutral
