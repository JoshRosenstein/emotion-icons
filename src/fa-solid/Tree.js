import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M377.33 375.429L293.906 288H328c21.017 0 31.872-25.207 17.448-40.479L262.79 160H296c20.878 0 31.851-24.969 17.587-40.331l-104-112.003c-9.485-10.214-25.676-10.229-35.174 0l-104 112.003C56.206 134.969 67.037 160 88 160h33.21l-82.659 87.521C24.121 262.801 34.993 288 56 288h34.094L6.665 375.429C-7.869 390.655 2.925 416 24.025 416H144c0 32.781-11.188 49.26-33.995 67.506C98.225 492.93 104.914 512 120 512h144c15.086 0 21.776-19.069 9.995-28.494-19.768-15.814-33.992-31.665-33.995-67.496V416h119.97c21.05 0 31.929-25.309 17.36-40.571z" key="k0" />
]


const Tree = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Tree-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 384 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Tree',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Tree.displayName = 'Tree'

Tree.defaultProps = { height: undefined, width: undefined}

export default Tree
