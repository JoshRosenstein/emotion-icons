import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M417.5 160H363c-4.6 0-8.9-2-12-5.4-28.4-31.8-39.1-42.6-50.7-42.6h-85.5c-11.7 0-23.2 10.8-51.7 42.7-3 3.4-7.4 5.3-11.9 5.3h-4.1v-8c0-4.4-3.6-8-8-8h-26c-4.4 0-8 3.6-8 8v8h-7.5C79.9 160 64 173.2 64 190.7v176c0 17.5 15.9 33.3 33.5 33.3h320c17.6 0 30.5-15.8 30.5-33.3v-176c0-17.5-12.9-30.7-30.5-30.7zM308.3 340.5c-.8 2.5-2.6 4.6-4.8 6.1-14.1 9.7-30.5 14.8-47.5 14.8-21 0-41.2-8.1-57.1-22.7-14.6-13.5-24.1-31.2-27-50.2h-20.4c-3.2 0-6-2.8-5.6-6.6.1-.7.3-1.3.7-1.8l31.5-42.3c1.1-1.4 2.7-2.2 4.4-2.2 1.7 0 3.3.8 4.4 2.2l32.2 41.8c2 2.6 1.5 6.4-1.8 8.5-.6.4-1.2.5-1.9.5h-20.8c2.7 12.8 9.7 24.8 19.9 34 11.6 10.6 26.3 16.4 41.4 16.4 12.3 0 24.4-4 35.1-11.5 1.9-1.3 4.2-2.1 6.5-2.1 3.2 0 6.2 1.3 8.3 3.7 2.9 3 3.9 7.3 2.5 11.4zm56.6-67.5l-31.2 42.9c-1.8 2.5-5.5 3.2-8.3.8-.2-.2-.4-.4-.5-.6L292.5 273c-2-2.6-1.4-6.5 1.9-8.5.6-.3 1.2-.5 1.9-.5h21c-2.7-13.6-9.7-26.1-19.9-35.6-11.5-10.7-26.2-16.6-41.3-16.6-12.5 0-24.6 3.9-35.2 11.3-1.9 1.3-4.1 2-6.4 2-3.1 0-6.1-1.3-8.2-3.6-2.8-3-3.8-7.4-2.5-11.5.8-2.5 2.6-4.6 4.7-6 14.1-9.7 30.6-14.8 47.6-14.8 21.7 0 42.2 7.9 57.8 22.3 13.3 12.3 23.2 32.1 26.2 52.4h21.1c.6 0 1.3.2 1.8.5 3.2 2.1 3.8 6 1.9 8.6z" key="k0" />
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
