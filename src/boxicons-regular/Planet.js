import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.222 3.811c-.661-.744-1.58-1.091-2.575-.983-.832.091-1.687.502-2.549 1.192a8.922 8.922 0 0 0-8.712.282 8.917 8.917 0 0 0-4.109 5.515 8.892 8.892 0 0 0 .306 5.325c-1.065 1.203-2.054 3.677-.823 5.063.517.581 1.257.841 2.147.841.975 0 2.133-.319 3.373-.86a8.947 8.947 0 0 0 3.709.811 8.986 8.986 0 0 0 4.616-1.282 8.915 8.915 0 0 0 4.107-5.515 8.904 8.904 0 0 0-.163-4.908c1.31-2.237 1.754-4.264.673-5.481zm-2.358 1.004c.356-.033.632.064.861.323.231.261.169.946-.252 1.929a9.059 9.059 0 0 0-1.617-1.853c.431-.262.776-.373 1.008-.399zm-13.647 5.49a6.931 6.931 0 0 1 3.195-4.286 6.994 6.994 0 0 1 3.589-.999c2.473 0 4.709 1.273 5.983 3.405.13.218.245.44.351.667-.971 1.441-2.433 3.16-4.498 4.994-2.063 1.833-3.942 3.082-5.488 3.876a6.978 6.978 0 0 1-2.343-2.371 6.933 6.933 0 0 1-.789-5.286zm-.961 8.572c-.217-.244.003-1.07.377-1.76a9.009 9.009 0 0 0 1.565 1.739c-1.024.302-1.712.283-1.942.021zm14.517-5.165a6.928 6.928 0 0 1-3.194 4.285 6.998 6.998 0 0 1-3.59.999c-.422 0-.833-.05-1.237-.122a31.627 31.627 0 0 0 4.413-3.292c1.411-1.253 2.722-2.626 3.803-3.996a6.939 6.939 0 0 1-.195 2.126z" key="k0" />
]


const Planet = ({ title, ...restProps }) => {
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
          ? [<title key="Planet-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Planet',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Planet.displayName = 'Planet'

Planet.defaultProps = { height: 24, width: 24}

export default Planet
