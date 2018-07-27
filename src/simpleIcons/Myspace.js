import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.803 12.274c2.108 0 3.818-1.703 3.818-3.804s-1.71-3.795-3.818-3.795a3.816 3.816 0 0 0-3.818 3.81 3.817 3.817 0 0 0 3.818 3.811v-.022zm-8.603.705c1.897 0 3.436-1.533 3.436-3.424S13.098 6.13 11.2 6.13 7.764 7.676 7.764 9.566A3.436 3.436 0 0 0 11.2 13v-.021zm-7.8.635c1.71 0 3.093-1.38 3.093-3.081 0-1.704-1.395-3.084-3.105-3.084A3.086 3.086 0 0 0 .3 10.539c0 1.7 1.387 3.078 3.095 3.078l.005-.003zm0 .705c-1.96 0-3.4 1.717-3.4 3.495v1.196c0 .17.138.31.31.31h6.18a.31.31 0 0 0 .309-.31v-1.196c0-1.779-1.437-3.5-3.398-3.5l-.001.005zm7.8-.56c-2.179 0-3.78 1.915-3.78 3.891v1.331c0 .188.156.344.345.344h6.871a.344.344 0 0 0 .342-.344V17.65c0-1.976-1.598-3.891-3.778-3.891zm8.603-.617c-2.422 0-4.197 2.126-4.197 4.323v1.477c0 .21.172.381.382.381h7.63c.21 0 .383-.171.383-.381v-1.477c-.001-2.197-1.776-4.323-4.198-4.323z" key="k0" />
]

export const hex='#030303'
const Myspace = ({ title, ...restProps }) => {
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
          ? [<title key="Myspace-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Myspace',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Myspace.displayName = 'Myspace'

Myspace.defaultProps = { height: 24, width: 24}

export default Myspace
