import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M450.4 168.5c7.5 0 13.6-6.1 13.6-13.6V61.6c0-7.5-6.1-13.6-13.6-13.6h-93.3c-7.5 0-13.6 6.1-13.6 13.6s6.1 13.6 13.6 13.6H417l-75 75.4c-25.7-16.3-55.4-24.8-86-24.8-30.7 0-60.3 8.6-86 24.8l-19-19.1 28.2-28.2c5.3-5.3 5.3-13.9 0-19.2-2.6-2.6-6-4-9.6-4-3.6 0-7.1 1.4-9.6 4l-28.1 28.1-36.8-37H155c7.5 0 13.6-6.1 13.6-13.6S162.5 48 155 48H61.6C54.1 48 48 54.1 48 61.6v93.3c0 7.5 6.1 13.6 13.6 13.6s13.6-6.1 13.6-13.6V95.1l36.9 36.7-30 30c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4l30.1-30.1 16.5 16.4c-33.9 30.6-53.3 73.9-53.3 119.8 0 43.1 16.8 83.6 47.3 114.1 30.5 30.5 71 47.3 114.1 47.3 45.9 0 89.2-19.4 119.9-53.3l16.4 16.4-29.3 29.2c-5.3 5.3-5.3 13.9 0 19.2 2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4l29.3-29.3 29.3 29.3c2.6 2.6 6 4 9.6 4 3.6 0 7.1-1.4 9.6-4 5.3-5.3 5.3-13.9 0-19.2l-29.3-29.3 29.3-29.3c5.3-5.3 5.3-13.9 0-19.2-2.6-2.6-6-4-9.6-4-3.6 0-7.1 1.4-9.6 4l-29.3 29.3-19-19c16.3-25.8 24.9-55.4 24.9-86.1 0-45.9-19.3-89.2-53.3-119.8l72.7-72.2v59.9c0 7.3 6.1 13.4 13.6 13.4zm-60.3 118.6c0 35.8-14 69.5-39.3 94.8-25.3 25.3-59 39.3-94.8 39.3s-69.5-14-94.8-39.3c-25.3-25.3-39.3-59-39.3-94.8s14-69.5 39.3-94.8c25.3-25.3 59-39.3 94.8-39.3s69.5 14 94.8 39.3c25.4 25.3 39.3 59 39.3 94.8z" key="k0" />
]


const Transgender = ({ title, ...restProps }) => {
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
          ? [<title key="Transgender-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Transgender',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Transgender.displayName = 'Transgender'

Transgender.defaultProps = { height: undefined, width: undefined}

export default Transgender
