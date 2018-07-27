import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.507 15C13.573 15 12 16.573 12 18.507s1.573 3.507 3.507 3.507c1.769 0 3.22-1.32 3.458-3.023H19v-.348c.002-.047.014-.09.014-.136s-.012-.089-.014-.136V7.411a.997.997 0 0 0-.56-.897l-9-4.411A.998.998 0 0 0 8 3.001l.01 8.337a3.464 3.464 0 0 0-1.503-.352C4.573 10.986 3 12.56 3 14.493S4.573 18 6.507 18s3.507-1.573 3.507-3.507v-.001l-.012-9.888L17 8.034v7.313A3.466 3.466 0 0 0 15.507 15zm-9 1C5.676 16 5 15.324 5 14.493s.676-1.507 1.507-1.507 1.507.676 1.507 1.507c0 .831-.676 1.507-1.507 1.507zm9 4.014c-.831 0-1.507-.676-1.507-1.507S14.676 17 15.507 17c.785 0 1.424.604 1.493 1.371v.271a1.503 1.503 0 0 1-1.493 1.372z" key="k0" />
]


const Music = ({ title, ...restProps }) => {
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
          ? [<title key="Music-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Music',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Music.displayName = 'Music'

Music.defaultProps = { height: 24, width: 24}

export default Music
