import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18c1.658 0 3-1.342 3-3V3a3 3 0 0 0-3-3zm-5.801 4.399c0-.44.36-.8.802-.8.44 0 .8.36.8.8v10.688a.802.802 0 0 1-1.602 0V4.399zM11.2 3.994a.8.8 0 0 1 1.6 0v11.602a.8.8 0 0 1-1.6 0V3.994zm-4 .405a.801.801 0 0 1 1.601 0v10.688a.801.801 0 0 1-1.601 0V4.399zM3.199 6A.801.801 0 0 1 4.8 6v7.195a.8.8 0 0 1-1.601 0V6zM20.52 18.202c-.123.105-3.086 2.593-8.52 2.593-5.433 0-8.397-2.486-8.521-2.593a.8.8 0 1 1 1.039-1.218c.047.041 2.693 2.211 7.481 2.211 4.848 0 7.456-2.186 7.479-2.207a.798.798 0 0 1 1.128.086c.289.336.25.84-.086 1.128zm.281-5.007a.802.802 0 0 1-1.602 0V6a.802.802 0 0 1 1.602 0v7.195z" key="k0" />
]

export const hex='#1F8DED'
const Intercom = ({ title, ...restProps }) => {
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
          ? [<title key="Intercom-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Intercom',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Intercom.displayName = 'Intercom'

Intercom.defaultProps = { height: 24, width: 24}

export default Intercom
