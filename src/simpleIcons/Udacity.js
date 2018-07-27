import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.01.138L0 4.68v10.458c-.015 4.803 3.915 8.71 8.775 8.725a8.895 8.895 0 0 0 4.414-1.154l6.487-3.686c2.561-1.306 4.313-3.946 4.323-6.991V1.096L22.409.18l-6.503 3.631v11.373a6.197 6.197 0 0 1-.153 1.435 8.263 8.263 0 0 1-.574 1.665c-.511-.03-1.546-.314-2.386-.81a7.67 7.67 0 0 1-1.364-1.021 5.752 5.752 0 0 1-.78-.945 5.392 5.392 0 0 1-.585-1.079 6.9 6.9 0 0 1-.375-1.185c-.09-.421-.104-.855-.104-1.275L9.6 1.051 8.01.143V.138zm3.687 21.583a7.506 7.506 0 0 1-1.35.41 7.029 7.029 0 0 1-2.855-.01 7.05 7.05 0 0 1-1.35-.417 7.428 7.428 0 0 1-1.219-.659c-.99-.691-1.5-1.291-1.941-1.936-.26-.39-.48-.795-.66-1.215a7.328 7.328 0 0 1-.416-1.335c-.09-.465-.104-.961-.104-1.439V5.58l6-3.621V11.97c0 3.806 2.819 6.979 6.45 7.747-.135.165-.24.331-.391.48-.33.322-.675.624-1.064.877-.375.257-.645.465-1.065.644l-.035.003zm10.405-8.408a6.482 6.482 0 0 1-.375 1.186c-.439.955-1.148 1.77-1.74 2.294-1.216 1.101-2.725 1.44-2.898 1.44.362-.948.608-1.965.611-3.039V4.725L22.204 2l.003 10.009c0 .431-.018.879-.105 1.296v.008z" key="k0" />
]

export const hex='#01B3E3'
const Udacity = ({ title, ...restProps }) => {
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
          ? [<title key="Udacity-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Udacity',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Udacity.displayName = 'Udacity'

Udacity.defaultProps = { height: 24, width: 24}

export default Udacity
