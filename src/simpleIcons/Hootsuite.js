import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.002 0h.023a8.205 8.205 0 0 1 3.766.928 8.166 8.166 0 0 1 3.741-.906h.676V24l-.656-.002A15.743 15.743 0 0 1 8.4 19.373 15.575 15.575 0 0 1 3.791 8.23V.021h.677c1.301 0 2.586.311 3.741.906A8.226 8.226 0 0 1 12.002 0zm0 .654a7.522 7.522 0 0 0-3.791 1.021 7.49 7.49 0 0 0-3.742-1h-.022V8.23c-.025 8.35 6.764 15.09 15.107 15.113V.675h-.022a7.488 7.488 0 0 0-3.743.999 7.508 7.508 0 0 0-3.766-1.02h-.021zm3.252 2.754a3.24 3.24 0 1 1-1.746 5.97l-1.516 1.508-1.507-1.516a3.239 3.239 0 1 1 1.506-3.019l.016-.02.015.018a3.24 3.24 0 0 1 3.232-2.941zM8.76 8.789a2.16 2.16 0 0 0 2.072-2.794 1.081 1.081 0 0 1-1.972-.882 1.09 1.09 0 0 1 .548-.547 2.16 2.16 0 1 0-.652 4.223h.004zm6.478.019a2.16 2.16 0 1 0-.627-4.225c.545.244.789.883.547 1.428a1.084 1.084 0 0 1-1.428.545 1.088 1.088 0 0 1-.549-.553 2.162 2.162 0 0 0 2.057 2.805z" key="k0" />
]

export const hex='#000000'
const Hootsuite = ({ title, ...restProps }) => {
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
          ? [<title key="Hootsuite-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hootsuite',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hootsuite.displayName = 'Hootsuite'

Hootsuite.defaultProps = { height: 24, width: 24}

export default Hootsuite
