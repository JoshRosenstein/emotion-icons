import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 12.957V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v9.958c-1.263.927-2 2.397-2 4.042 0 .012.004.022.004.035-.001.008-.004.019-.004.028 0 .076.002.188.041.341a4.975 4.975 0 0 0 4.542 4.555.996.996 0 0 0 .417.104c.147 0 .29-.041.425-.105a4.979 4.979 0 0 0 4.55-4.707 1.09 1.09 0 0 0 .015-.14c-.001-.038.01-.073.01-.111 0-1.645-.737-3.115-2-4.043zM10 4v5H8V4h2zm4-1h6v2h-6zm0 4h4v2h-4zm0 4h2v2h-2z" key="k0" />
]


const Thermometer = ({ title, ...restProps }) => {
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
          ? [<title key="Thermometer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Thermometer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Thermometer.displayName = 'Thermometer'

Thermometer.defaultProps = { height: 24, width: 24}

export default Thermometer
