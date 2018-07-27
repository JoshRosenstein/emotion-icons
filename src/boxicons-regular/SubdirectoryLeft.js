import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 14l4 4v-3h8V6h-2v7H9v-3z" key="k0" />
]


const SubdirectoryLeft = ({ title, ...restProps }) => {
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
          ? [<title key="SubdirectoryLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SubdirectoryLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SubdirectoryLeft.displayName = 'SubdirectoryLeft'

SubdirectoryLeft.defaultProps = { height: 24, width: 24}

export default SubdirectoryLeft
