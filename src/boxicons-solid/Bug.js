import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22 16.011v-2h-2.309c.065-.493.108-.996.108-1.511 0-.512-.043-1.01-.106-1.5h2.246V9h-2.695a9.934 9.934 0 0 0-1.682-3.148l2.145-2.145-1.414-1.414-2.163 2.163C14.931 3.539 13.518 3 12 3s-2.931.539-4.13 1.456L5.707 2.293 4.293 3.707l2.145 2.145A9.934 9.934 0 0 0 4.756 9H2v2h2.307c-.064.49-.107.988-.107 1.5 0 .515.043 1.018.108 1.511H2v2h2.759c.228.693.52 1.346.868 1.948l-2.334 2.334 1.414 1.414 2.118-2.118C8.204 21.083 10.014 22 12 22s3.796-.917 5.175-2.411l2.118 2.118 1.414-1.414-2.334-2.334c.349-.602.641-1.255.868-1.948H22zM6.317 11a8.946 8.946 0 0 1 .557-2h10.252a9 9 0 0 1 .557 2H6.317zM11 19.88V13h2v6.88c-.325.074-.658.12-1 .12s-.675-.046-1-.12z" key="k0" />
]


const Bug = ({ title, ...restProps }) => {
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
          ? [<title key="Bug-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bug',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bug.displayName = 'Bug'

Bug.defaultProps = { height: 24, width: 24}

export default Bug
