import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16.988 11.388a4.85 4.85 0 0 0-.93.056c.076-.662.346-1.475 1.324-1.444 1.068.038 1.219 1.054 1.219 1.74a4.461 4.461 0 0 0-1.625-.352m4.59-7.199c-.18-.963-.754-1.435-1.264-1.621-.557-.201-1.686-.41-3.115-.578-1.145-.135-2.482-.123-3.295-.098-.09-.666-.555-1.275-1.082-1.486C11.426-.155 9.274-.02 8.721.135c-.437.123-.924.377-1.193.763-.182.258-.302.59-.302 1.053 0 .264 0 .882.015 1.43l.015 1.049c0 .49-.406.889-.902.889H4.096c-.481 0-.857.082-1.143.209a1.547 1.547 0 0 0-.632.503c-.301.393-.362.905-.362 1.416 0 0 0 .405.105 1.218.075.617.752 4.981 1.399 6.306.256.512.421.723.903.947 1.098.467 3.596.979 4.754 1.129 1.174.15 1.912.451 2.348-.451 0-.016.076-.24.196-.572.376-1.158.421-2.166.421-2.904 0-.074.105-.074.105 0 0 .512-.105 2.363 1.279 2.859.541.195 1.686.361 2.844.497 1.039.12 1.807.526 1.807 3.22 0 1.625-.348 1.85-2.137 1.85-1.461 0-2.018.031-2.018-1.111 0-.934.918-.842 1.611-.842.301 0 .074-.227.074-.814 0-.572.346-.902.016-.918-2.379-.074-3.762 0-3.762 2.949 0 2.68 1.024 3.191 4.379 3.191 2.633 0 3.566-.092 4.648-3.463.211-.676.738-2.707 1.055-6.108.195-2.167-.197-8.683-.496-10.323m-17.558.497h2.271c.13 0 .236-.105.236-.241 0 0-.021-1.941-.021-2.482 0-.447.09-.828.256-1.156l.075-.15c-.009 0-.016 0-.024.016L2.362 4.983c-.01.006-.016.015-.016.024l.23-.113c.377-.174.842-.271 1.398-.271" key="k0" />
]

export const hex='#2DBD60'
const Evernote = ({ title, ...restProps }) => {
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
          ? [<title key="Evernote-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Evernote',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Evernote.displayName = 'Evernote'

Evernote.defaultProps = { height: 24, width: 24}

export default Evernote
