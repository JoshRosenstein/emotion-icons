import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.964 21.237c.01-.037.022-.072.027-.11.006-.043.002-.086.002-.13 0-.036.005-.071 0-.107-.006-.055-.022-.108-.037-.162-.007-.022-.008-.047-.017-.069l-.002-.005-.001-.005-.021-.055L16 9.824V4h1V2H7v2h1v5.824l-3.916 10.77-.021.055-.001.005-.002.005c-.008.022-.01.045-.016.067-.016.055-.032.108-.038.164-.004.034 0 .068 0 .103 0 .046-.004.091.002.135.004.037.018.071.026.106.01.042.016.085.031.125.014.033.034.063.05.095.021.039.036.08.062.116l.002.002.001.002c.024.035.056.063.084.093.025.028.048.061.076.085.041.036.088.064.135.093.021.014.039.031.062.042.054.028.112.047.171.065.018.005.034.015.052.02.078.018.158.028.24.028h14c.082 0 .162-.01.24-.029.018-.005.034-.015.052-.02.059-.019.117-.037.171-.065.022-.011.041-.028.062-.042a.898.898 0 0 0 .135-.093c.028-.024.051-.057.076-.085.028-.03.06-.058.084-.093l.001-.002.002-.002c.024-.035.039-.074.059-.111.018-.033.039-.065.053-.1.013-.039.019-.081.029-.121zM14 4v6c0 .116.021.232.061.342L14.663 12H9.337l.603-1.658c.039-.11.06-.226.06-.342V4h4z" key="k0" />
]


const Flask = ({ title, ...restProps }) => {
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
          ? [<title key="Flask-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Flask',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Flask.displayName = 'Flask'

Flask.defaultProps = { height: 24, width: 24}

export default Flask
