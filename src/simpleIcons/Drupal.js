import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.45 3.552C18.258 1.257 15.233.006 12 .006 5.431.006.007 5.428.007 12S5.43 23.994 12 23.994 23.995 18.572 23.995 12c0-3.233-1.251-6.258-3.546-8.448zM12 19.822c-3.65 0-6.57-2.92-6.57-6.57 0-3.025 2.085-5.111 3.858-6.884 1.252-1.252 2.4-2.4 2.712-3.755.313 1.252 1.46 2.399 2.712 3.65 1.773 1.774 3.859 3.86 3.859 6.884 0 3.65-2.92 6.571-6.571 6.675z" key="k0" />
]

export const hex='#0678BE'
const Drupal = ({ title, ...restProps }) => {
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
          ? [<title key="Drupal-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Drupal',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Drupal.displayName = 'Drupal'

Drupal.defaultProps = { height: 24, width: 24}

export default Drupal
