import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.01 2a9.941 9.941 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142 1.895 1.895 4.406 2.938 7.072 2.938s5.177-1.043 7.07-2.937c3.899-3.898 3.899-10.243 0-14.144A9.938 9.938 0 0 0 12.01 2zm5.656 15.667a7.95 7.95 0 0 1-5.656 2.351A7.95 7.95 0 0 1 5.76 17h12.499c-.185.23-.38.454-.593.667zM19.937 13a7.945 7.945 0 0 1-.509 2H4.59a7.945 7.945 0 0 1-.509-2H6v-2H4.084a7.955 7.955 0 0 1 1.609-3.892L7.05 8.465l1.414-1.414-1.358-1.358A7.93 7.93 0 0 1 11 4.071V6h2V4.068a7.916 7.916 0 0 1 4.279 1.933l-4.452 3.18A1.97 1.97 0 0 0 12.008 9 1.992 1.992 0 1 0 14 10.99c0-.061-.013-.118-.018-.178l4.632-3.309a7.944 7.944 0 0 1 1.319 3.496H18v2h1.937z" key="k0" />
]


const Dashboard = ({ title, ...restProps }) => {
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
          ? [<title key="Dashboard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Dashboard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Dashboard.displayName = 'Dashboard'

Dashboard.defaultProps = { height: 24, width: 24}

export default Dashboard
