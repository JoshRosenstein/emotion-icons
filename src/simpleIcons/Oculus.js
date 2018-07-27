import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.135 13.949c-.319.221-.675.355-1.057.416s-.761.049-1.142.049H8.063c-.382 0-.762.014-1.145-.049a2.588 2.588 0 0 1-1.057-.416 2.378 2.378 0 0 1-1.027-1.951c0-.796.387-1.515 1.029-1.95.314-.225.674-.359 1.049-.42s.75-.061 1.141-.061h7.875c.375 0 .765-.014 1.14.046s.735.194 1.051.405a2.342 2.342 0 0 1 1.02 1.949c0 .78-.391 1.5-1.035 1.95l.031.032zm3.174-7.555a7.235 7.235 0 0 0-2.865-1.398 8.78 8.78 0 0 0-1.822-.23c-.449-.015-.899-.01-1.364-.01H8.76c-.457 0-.915-.005-1.372.01a8.912 8.912 0 0 0-1.825.23 7.26 7.26 0 0 0-2.865 1.4A7.169 7.169 0 0 0 0 12c0 2.182.99 4.241 2.689 5.606a7.292 7.292 0 0 0 2.865 1.4 8.764 8.764 0 0 0 1.823.229c.45.016.9.012 1.365.012h6.496c.449 0 .914.004 1.364-.012a8.597 8.597 0 0 0 1.814-.229 7.374 7.374 0 0 0 2.866-1.402A7.125 7.125 0 0 0 24 12c0-2.181-.99-4.241-2.691-5.606z" key="k0" />
]

export const hex='#1C1E20'
const Oculus = ({ title, ...restProps }) => {
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
          ? [<title key="Oculus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Oculus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Oculus.displayName = 'Oculus'

Oculus.defaultProps = { height: 24, width: 24}

export default Oculus
