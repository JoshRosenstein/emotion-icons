import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.26 21.896l-2.332-3.256c-.622-.87-1.127-1.547-1.154-1.547s-1.006 1.314-2.316 3.113C8.21 21.92 7.178 23.32 7.163 23.32c-.033 0-4.498-3.144-4.51-3.177-.006-.016 1.005-1.498 2.242-3.293 1.24-1.795 2.254-3.29 2.254-3.326 0-.055-.408-.193-3.557-1.245L0 11.08c-.03-.018.156-.64.793-2.65.46-1.446.844-2.64.855-2.655.014-.016 1.71.524 3.772 1.205a301.36 301.36 0 0 0 3.788 1.234c.022 0 .046-.03.053-.07.01-.03.03-1.786.04-3.9.02-2.1.04-3.84.05-3.87.02-.03.6-.03 2.73-.03 1.484 0 2.713.015 2.733.03.025.016.065 1.186.136 3.78.11 4.275.11 4.335.18 4.335.025 0 1.66-.54 3.63-1.22 1.973-.66 3.592-1.2 3.605-1.186.03.044 1.65 5.31 1.635 5.325-.017.016-1.667.585-3.66 1.26-2.76.93-3.647 1.245-3.647 1.29-.014.03.93 1.455 2.146 3.21a228.64 228.64 0 0 1 2.143 3.18c-.015.046-4.44 3.302-4.483 3.302-.015 0-.585-.766-1.245-1.695l.005-.067z" key="k0" />
]

export const hex='#000000'
const Diaspora = ({ title, ...restProps }) => {
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
          ? [<title key="Diaspora-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Diaspora',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Diaspora.displayName = 'Diaspora'

Diaspora.defaultProps = { height: 24, width: 24}

export default Diaspora
