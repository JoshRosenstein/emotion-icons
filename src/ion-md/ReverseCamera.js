import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M440 96h-88l-32-32H192l-32 32H72c-22.1 0-40 17.9-40 40v272c0 22.1 17.9 40 40 40h368c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40zm-72 171h-97.7l44.8-45.1c-14.7-15.4-35.7-25.5-58.8-25.5-46.2 0-84 37.8-84 84s37.8 84 84 84c35.5 0 66.2-21.5 78.2-53.5h29.6c-13.4 47-56.2 81.5-107.8 81.5-62.3 0-112-50.4-112-112s50.4-112 112-112c30.8 0 58.7 12.6 79 32.9l32.8-32.9V267z" key="k0" />
]


const ReverseCamera = ({ title, ...restProps }) => {
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
          ? [<title key="ReverseCamera-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ReverseCamera',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ReverseCamera.displayName = 'ReverseCamera'

ReverseCamera.defaultProps = { height: undefined, width: undefined}

export default ReverseCamera
