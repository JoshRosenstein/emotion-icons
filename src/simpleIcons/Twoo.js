import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10.116 16.877c.064-.054.129-.109.189-.168-1.209 1.176-2.756 1.756-4.291 1.735h-.023a5.938 5.938 0 0 1-4.245-1.894 6.439 6.439 0 0 1-1.507-2.691v-.007c-.604-2.199-.065-4.674 1.605-6.406 2.346-2.434 6.072-2.492 8.459-.205l1.215 1.275.543.57 4.228 4.484h.018c.045.046.09.076.119.121.855.779 2.162.75 2.986-.105.869-.9.9-2.37.047-3.285a1.737 1.737 0 0 0-.303-.27l-.24-.166c-.824-.449-1.875-.3-2.58.42a1.959 1.959 0 0 0-.27.346 2.38 2.38 0 0 0-.346 1.561l-1.514-1.529-1.756-1.665a6.499 6.499 0 0 1 1.432-1.876 5.134 5.134 0 0 0-.189.168 6.028 6.028 0 0 1 4.291-1.734h.023a5.94 5.94 0 0 1 4.246 1.895 6.43 6.43 0 0 1 1.506 2.693v.006c.605 2.197.066 4.676-1.605 6.405-2.346 2.434-6.072 2.494-8.459.205l-1.214-1.286-.543-.581-4.225-4.501-.004-.015c-.016 0-.016-.015-.016-.015-.045-.046-.09-.09-.121-.136a2.11 2.11 0 0 0-2.984.105c-.87.9-.9 2.37-.045 3.271.09.105.195.18.3.27l.24.15a2.16 2.16 0 0 0 2.58-.436c.105-.104.196-.225.271-.345.301-.465.404-1.034.345-1.575l1.515 1.561 1.758 1.771a6.41 6.41 0 0 1-1.433 1.875l-.003.004z" key="k0" />
]

export const hex='#FF7102'
const Twoo = ({ title, ...restProps }) => {
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
          ? [<title key="Twoo-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Twoo',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Twoo.displayName = 'Twoo'

Twoo.defaultProps = { height: 24, width: 24}

export default Twoo
