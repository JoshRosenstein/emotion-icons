import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.958 11.26C23.58 5.004 18.404.045 12.062.006h-.142C9.68.022 7.584.646 5.795 1.73a12.03 12.03 0 0 0-4.048 4.033 11.956 11.956 0 0 0-1.722 6.983 11.892 11.892 0 0 0 1.723 5.49c1 1.648 2.384 3.03 4.024 4.033a12.093 12.093 0 0 0 6.13 1.72h.18c6.343-.043 11.498-4.99 11.89-11.24.014-.24.03-.496.03-.735s0-.495-.016-.734l-.027-.022zm-11.956 4.38v3.83c.096 2.34-.57 2.73-1.37 2.766-.034 0-.066.003-.1.004a10.348 10.348 0 0 1-8.784-11.661 10.345 10.345 0 0 1 8.77-8.82l.115.01c.8.043 1.465.43 1.37 2.764v3.828c-.01 1.573.895 3.072 1.857 3.64-.962.56-1.868 1.875-1.858 3.634z" key="k0" />
]

export const hex='#0AA0FF'
const Brandai = ({ title, ...restProps }) => {
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
          ? [<title key="Brandai-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Brandai',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Brandai.displayName = 'Brandai'

Brandai.defaultProps = { height: 24, width: 24}

export default Brandai
