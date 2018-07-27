import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M50 124c-1.1 0-2 .9-2 2v59.9c0 14.4 9.6 27 23.4 30.8l104 29.4c1.3.4 2.5-.6 2.5-1.9V126c0-1.1-.9-2-2-2H50zm154 2v126.2c0 .9.6 1.7 1.5 1.9l50 13.9c.4.1.7.1 1.1 0l56-15.6c.9-.2 1.5-1 1.5-1.9V126c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2zm130 0v119.2c0 1.3 1.3 2.3 2.6 1.9l104-30.4c13.8-3.9 23.4-16.5 23.4-30.8V126c0-1.1-.9-2-2-2H336c-1.1 0-2 .9-2 2zM48 64v38c0 1.1.9 2 2 2h412c1.1 0 2-.9 2-2V64c0-17.7-14.3-32-32-32H80c-17.7 0-32 14.3-32 32z" key="k0" />
,
<circle cx={256} cy={352} r={56} key="k1" />
,
<path d="M351.3 266.6l-51.5 13.8c24 14.8 40.1 41.3 40.1 71.6 0 46.3-37.7 84-84 84s-84-37.7-84-84c0-30.4 16.2-57 40.4-71.8L161 266.1c-20.5 22.7-33 52.8-33 85.9 0 70.7 57.3 128 128 128s128-57.3 128-128c0-32.8-12.4-62.7-32.7-85.4z" key="k2" />
,
<path d="M256 296c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56z" key="k3" />
]


const Medal = ({ title, ...restProps }) => {
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
          ? [<title key="Medal-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Medal',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Medal.displayName = 'Medal'

Medal.defaultProps = { height: undefined, width: undefined}

export default Medal
