import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.994 7.952a1.041 1.041 0 0 0-.03-.216c-.007-.027-.022-.051-.032-.077-.02-.056-.039-.111-.068-.162-.017-.028-.04-.052-.06-.079-.031-.043-.061-.088-.099-.126-.026-.025-.059-.045-.087-.067-.037-.029-.07-.063-.111-.087l-.013-.005-.01-.008-3.287-1.818L8 10.938V14l-2-1.1V10c0-.406.032-.469.386-.668L15.87 4.02l-3.406-1.885a1.002 1.002 0 0 0-.97.001l-8.979 4.99c-.003.002-.005.005-.009.006-.004.003-.009.003-.013.006-.045.026-.081.062-.12.094-.025.02-.055.038-.078.06-.039.039-.069.085-.102.13-.018.026-.041.048-.056.075a.962.962 0 0 0-.07.165c-.009.025-.023.049-.03.074a.913.913 0 0 0-.03.214c-.001.017-.007.031-.007.048V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.016-.006-.03-.006-.046zM13 19.301v-5.68l7-3.916v5.706l-7 3.89z" key="k0" />
]


const Package = ({ title, ...restProps }) => {
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
          ? [<title key="Package-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Package',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Package.displayName = 'Package'

Package.defaultProps = { height: 24, width: 24}

export default Package
