import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10.005 5.416a4.195 4.195 0 0 1 3.046-1.306c1.56 0 2.954.9 3.689 2.205.63-.3 1.35-.45 2.101-.45 2.849 0 5.159 2.34 5.159 5.22s-2.311 5.22-5.176 5.22c-.345 0-.689-.044-1.02-.104a3.75 3.75 0 0 1-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.315 4.315 0 0 1 8.879 20.4a4.303 4.303 0 0 1-4.05-2.819c-.27.061-.54.075-.825.075-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.649 4.65-4.649 1.53 0 2.85.704 3.72 1.8" key="k0" />
]

export const hex='#00A1E0'
const Salesforce = ({ title, ...restProps }) => {
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
          ? [<title key="Salesforce-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Salesforce',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Salesforce.displayName = 'Salesforce'

Salesforce.defaultProps = { height: 24, width: 24}

export default Salesforce