import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M112 162c0-13.3 10.7-24 24-24h229.5c4.9 0 9.6 1.5 13.5 4.4 2 1.5 4.9 0 4.8-2.5-.1-5.7-.2-9.3-.2-21.6 0-20.8-17.2-38.3-38.1-38.3h-.2c-5.7-.4-10.8-4-12.9-9.3-9-22.6-32.3-38.6-56.4-38.6-21 0-34.2 7-44 18.3-4.4 5-11.8 5.9-17.4 2.4-7.3-4.6-16.1-7.1-25.5-7.1-14.4 0-27.2 7.1-35.8 17.4-4 4.9-10.4 7-16.6 5.9-5.2-1-12.6-1.8-22.7-1.8-25 0-50 16.6-50 42.4v4c0 28.8 16 22.9 16 41.8v50.8c0 13.4-11.2 19.3-11.2 35.2 0 8.8 8 16.8 16.8 16.8H112V162zm274 290H110c-7.7 0-14 6.3-14 14s6.3 14 14 14h276c7.7 0 14-6.3 14-14s-6.3-14-14-14z" key="k0" />
,
<path d="M400 194h-32v-24c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v213.8c0 12.1-1.1 18.2-3.2 30.1l-.1.5c-.8 4.7.2 9.5 2.8 13.5 3.4 5.1 9.1 8.2 15.3 8.2h213.9c4.1 0 8.1-1.4 11.1-4.1 4.7-4.1 6.5-10.3 5.2-16-2.7-11.8-4.5-17.8-4.8-29.9H400c26.4 0 48-21.6 48-48v-96c0-26.5-21.6-48.1-48-48.1zm20 144c0 11-9 20-20 20h-32V222h32c11 0 20 9 20 20v96z" key="k1" />
]


const Beer = ({ title, ...restProps }) => {
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
          ? [<title key="Beer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Beer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Beer.displayName = 'Beer'

Beer.defaultProps = { height: undefined, width: undefined}

export default Beer
