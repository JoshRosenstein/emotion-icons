import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 19c.946 0 1.81-.103 2.598-.281l-4.179-4.179a2.988 2.988 0 0 1-.959-.959L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm9.948-6.684a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.952 3.547-4.616 3.56-4.658zm-11.23-3.012C11.107 9.116 11.538 9 12 9a3 3 0 0 1 3 3c0 .462-.116.893-.304 1.282l-3.978-3.978z" key="k0" />
]


const Hide = ({ title, ...restProps }) => {
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
          ? [<title key="Hide-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hide',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hide.displayName = 'Hide'

Hide.defaultProps = { height: 24, width: 24}

export default Hide
