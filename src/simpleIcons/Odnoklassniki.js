import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14.505 17.44a11.599 11.599 0 0 0 3.6-1.49 1.816 1.816 0 0 0-1.935-3.073 7.866 7.866 0 0 1-8.34 0 1.814 1.814 0 0 0-2.5.565c0 .002 0 .004-.002.005a1.812 1.812 0 0 0 .567 2.5l.002.002c1.105.695 2.322 1.2 3.596 1.488l-3.465 3.465A1.796 1.796 0 0 0 6 23.439l.03.03c.344.354.81.53 1.274.53.465 0 .93-.176 1.275-.53L12 20.065l3.404 3.406a1.815 1.815 0 0 0 2.566-2.565l-3.465-3.466zM12 12.388a6.202 6.202 0 0 0 6.195-6.193C18.195 2.78 15.415 0 12 0S5.805 2.78 5.805 6.197A6.2 6.2 0 0 0 12 12.389zm0-8.757a2.566 2.566 0 0 1 0 5.13 2.569 2.569 0 0 1-2.565-2.564A2.57 2.57 0 0 1 12 3.63z" key="k0" />
]

export const hex='#F4731C'
const Odnoklassniki = ({ title, ...restProps }) => {
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
          ? [<title key="Odnoklassniki-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Odnoklassniki',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Odnoklassniki.displayName = 'Odnoklassniki'

Odnoklassniki.defaultProps = { height: 24, width: 24}

export default Odnoklassniki