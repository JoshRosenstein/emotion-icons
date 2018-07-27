import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.624 16.84c0 .266.105.52.293.707l3.536 3.536a.997.997 0 0 0 1.414 0l3.795-3.795a7.495 7.495 0 0 0 2.217.333 7.446 7.446 0 0 0 5.302-2.195 7.484 7.484 0 0 0 1.632-8.158.999.999 0 0 0-1.632-.327l-3.183 3.182-2.121-2.122 3.182-3.182a1 1 0 0 0-.328-1.632 7.469 7.469 0 0 0-2.856-.563c-2.003 0-3.886.78-5.301 2.196a7.478 7.478 0 0 0-1.862 7.519l-3.795 3.794a.996.996 0 0 0-.293.707zm5.95-3.535a1 1 0 0 0 .218-1.087 5.486 5.486 0 0 1 1.196-5.983 5.517 5.517 0 0 1 4.413-1.585l-2.646 2.646a.999.999 0 0 0 0 1.414l3.535 3.536a.997.997 0 0 0 1.414 0l2.648-2.648a5.49 5.49 0 0 1-1.587 4.416c-1.55 1.55-3.964 2.027-5.984 1.196a1.002 1.002 0 0 0-1.087.218L7.16 18.962 5.038 16.84l3.536-3.535z" key="k0" />
]


const Wrench = ({ title, ...restProps }) => {
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
          ? [<title key="Wrench-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Wrench',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Wrench.displayName = 'Wrench'

Wrench.defaultProps = { height: 24, width: 24}

export default Wrench
