import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.537 4.118c-.806-.453-2.092.278-2.871 1.635L16.25 8.215a3.104 3.104 0 0 0 .21 3.18l.041.062c.653.94 1.535 1.808 1.823 2.118a1.613 1.613 0 0 1-.739 2.654 1.603 1.603 0 0 1-2.025-1.747c.045-.35-.067-.927-.574-1.489-.506-.563-1.54.5-1.874 1.61l-.016.061c-.334 1.094-.546 2.05-.482 2.143.037.06.072.12.105.182a1.81 1.81 0 0 1-3.196 1.701 1.806 1.806 0 0 1 .747-2.446l.121-.061c.065-.03.26-.486.423-1.032l.301-.987a.97.97 0 0 0 .045-.168l.897-3.19-.957 1.96c-.112-.363-.3-.38-.709-.091-.243.183-.653.531-.85.669-.365.273-.685.788-.851 1.109a1.313 1.313 0 0 1-.41.5 1.575 1.575 0 0 1-2.234-.227 1.591 1.591 0 0 1 .912-2.552c.409-.092 1.777-.927 2.596-1.52.152-.106.274-.197.38-.304l2.203-1.67-1.914 1.032s-.196-.016-.426.017c-.698.075-1.428.182-1.564.35a.999.999 0 0 1-.29.272 1.43 1.43 0 0 1-1.989-.317A1.437 1.437 0 0 1 6.29 8.04c.259-.183.577-.274.865-.274.518.016 1.87.29 2.993.092l.288-.045c1.14-.196 2.476-1.186 3.024-2.187l1.184-2.067c.653-1.139.608-2.384-.105-2.795l-1.323-.76c-.653-.363-1.715-.363-2.354 0L2.004 4.97C1.337 5.319.805 6.23.805 6.975v9.744c0 .744.532 1.656 1.178 2.02l8.85 4.983c.652.365 1.716.365 2.354 0l8.826-4.983c.653-.368 1.184-1.276 1.184-2.02v-9.76c0-.744-.531-1.653-1.169-2.02l-1.46-.823" key="k0" />
]

export const hex='#5FCF80'
const Treehouse = ({ title, ...restProps }) => {
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
          ? [<title key="Treehouse-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Treehouse',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Treehouse.displayName = 'Treehouse'

Treehouse.defaultProps = { height: 24, width: 24}

export default Treehouse
