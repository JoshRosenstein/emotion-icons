import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={18} height={18} x={3} y={4} rx={2} ry={2} key="k0" />
,
<line x1={16} x2={16} y1={2} y2={6} key="k1" />
,
<line x1={8} x2={8} y1={2} y2={6} key="k2" />
,
<line x1={3} x2={21} y1={10} y2={10} key="k3" />
]


const Calendar = ({ title, ...restProps }) => {
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
          ? [<title key="Calendar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Calendar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

Calendar.displayName = 'Calendar'

Calendar.defaultProps = { height: 24, width: 24}

export default Calendar
