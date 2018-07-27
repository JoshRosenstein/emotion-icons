import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.93 15.475l6.396.004-3.582 6.758A12.005 12.005 0 0 1 0 12C0 5.383 5.383 0 12 0c1.761 0 3.436.381 4.94 1.064L5.428 12.58h10.25l-7.539 7.614 3.115-5.876H3.795C3.455 13.164 3.477 12 3.477 12a8.533 8.533 0 0 1 8.824-8.518l1.094-1.099a9.728 9.728 0 0 0-1.375-.098c-5.356 0-9.73 4.357-9.73 9.715-.001 0-.061 1.719.64 3.475zM18.255 1.764A12.007 12.007 0 0 1 24 12c0 6.616-5.384 12-12 12a11.896 11.896 0 0 1-4.941-1.065l11.426-11.513H8.205l7.656-7.616-3.115 5.876h7.46c.319 1.079.319 2.318.319 2.318a8.535 8.535 0 0 1-8.861 8.516l-1.084 1.096c5.314.777 10.256-2.901 11.032-8.218a9.71 9.71 0 0 0 .103-1.395c0-1.189-.22-2.369-.647-3.479h-6.394l3.581-6.756z" key="k0" />
]

export const hex='#E2231A'
const SauceLabs = ({ title, ...restProps }) => {
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
          ? [<title key="SauceLabs-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SauceLabs',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SauceLabs.displayName = 'SauceLabs'

SauceLabs.defaultProps = { height: 24, width: 24}

export default SauceLabs
