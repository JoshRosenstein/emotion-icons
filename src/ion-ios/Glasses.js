import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M464.5 240.9h-6.2c-3.3-21.1-13.3-40.5-28.5-55.2-17.3-16.6-39.8-25.8-63.4-25.8-20.5 0-40 6.7-56.2 19.4-13.8 10.8-24.2 25.1-30.5 41.7-7-4.6-15.4-7.3-23.7-7.3-8.3 0-16.7 2.6-23.7 7.3-6.2-16.6-16.6-30.9-30.5-41.7-16.2-12.7-35.7-19.4-56.2-19.4-23.6 0-46.1 9.1-63.4 25.6C67 200.4 57 219.9 53.7 241h-6.2c-8 0-14.5 6.7-14.5 15s6.5 15 14.5 15h6.2c3.3 21.2 13.3 40.6 28.5 55.3 17.3 16.6 39.8 25.8 63.4 25.8 51.3 0 93.1-43 93.1-95.9v-.2c0-5.9 6.9-14.9 17.3-14.9s17.3 9 17.3 14.9v.1c0 52.9 41.8 95.9 93.1 95.9 23.7 0 46.2-9.1 63.4-25.8 15.2-14.7 25.2-34.2 28.5-55.4h6.2c8 0 14.5-6.7 14.5-15 0-8.1-6.5-14.9-14.5-14.9z" key="k0" />
]


const Glasses = ({ title, ...restProps }) => {
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
          ? [<title key="Glasses-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Glasses',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Glasses.displayName = 'Glasses'

Glasses.defaultProps = { height: undefined, width: undefined}

export default Glasses
