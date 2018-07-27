import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4.92 17.562a3.157 3.157 0 0 1-1.68.457c-.92-.029-1.68-.346-2.287-.951-.607-.601-.922-1.367-.953-2.282.016-.862.291-1.594.83-2.192.54-.601 1.225-.948 2.058-1.05a3.416 3.416 0 0 1-.042-.566c.03-1.14.42-2.084 1.17-2.819.754-.735 1.7-1.125 2.842-1.155.719 0 1.364.165 1.934.51a5.634 5.634 0 0 1 1.861-1.859c.779-.465 1.65-.705 2.609-.721 1.291.03 2.385.436 3.314 1.215.93.78 1.516 1.785 1.756 3.03h-.285c-.465 0-.869.06-1.23.194a4.945 4.945 0 0 0-1.664-1.169c-.615-.271-1.29-.39-2.011-.39-.66 0-1.29.104-1.89.33-.6.225-1.14.539-1.62.959-.42.36-.765.766-1.05 1.23s-.48.96-.585 1.485c-.36.075-.705.179-1.021.314-.51.239-.944.569-1.289 1.005-.33.375-.586.811-.75 1.305a4.846 4.846 0 0 0-.256 1.545c0 .6.091 1.156.301 1.666l-.062-.091zm16.848-3.747c1.576.391 2.318 1.32 2.225 2.781-.092 1.463-.943 2.287-2.555 2.471H8.7c-2.104-.277-3.138-1.365-3.102-3.263.034-1.905 1.104-2.954 3.21-3.135.275-2.04 1.316-3.3 3.12-3.78 1.806-.494 3.342.061 4.612 1.681.436-.36.986-.511 1.65-.466.668.045 1.234.181 1.697.436.6.314 1.08.765 1.396 1.336.313.568.479 1.215.479 1.919l.006.02z" key="k0" />
]

export const hex='#094AB2'
const OneDrive = ({ title, ...restProps }) => {
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
          ? [<title key="OneDrive-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-OneDrive',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

OneDrive.displayName = 'OneDrive'

OneDrive.defaultProps = { height: 24, width: 24}

export default OneDrive
