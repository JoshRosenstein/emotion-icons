import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M453.594 100.001l-32.353-39.299C415.469 52.627 405.083 48 394.664 48H117.335c-10.416 0-20.801 4.627-26.576 12.702l-32.351 39.299C51.468 106.923 48 117.335 48 128.886v288.89C48 443.2 68.8 464 94.225 464h323.553C443.202 464 464 443.2 464 417.775v-288.89c0-11.55-3.463-21.962-10.406-28.884zM256 383.109L128.89 256h80.89v-46.224h92.443V256h80.89L256 383.109zM96.534 94.221L115.02 71.11h277.331l21.965 23.111H96.534z" key="k0" />
]


const Archive = ({ title, ...restProps }) => {
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
          ? [<title key="Archive-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Archive',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Archive.displayName = 'Archive'

Archive.defaultProps = { height: undefined, width: undefined}

export default Archive
