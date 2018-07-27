import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 18.5C3 20.43 4.57 22 6.5 22s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V8.837C8.94 8.403 10 7.08 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326C4.06 15.597 3 16.92 3 18.5zm5 0c0 .827-.673 1.5-1.5 1.5S5 19.327 5 18.5 5.673 17 6.5 17s1.5.673 1.5 1.5zm-3-13C5 4.673 5.673 4 6.5 4S8 4.673 8 5.5 7.327 7 6.5 7 5 6.327 5 5.5zm16 13c0-1.58-1.06-2.903-2.5-3.337V8c0-1.509-.959-3.683-3.5-3.947V2l-4 3 4 3V6.055c1.348.258 1.493 1.529 1.5 1.945v7.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5zM17.5 20c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z" key="k0" />
]


const GitPullRequest = ({ title, ...restProps }) => {
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
          ? [<title key="GitPullRequest-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GitPullRequest',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GitPullRequest.displayName = 'GitPullRequest'

GitPullRequest.defaultProps = { height: 24, width: 24}

export default GitPullRequest
