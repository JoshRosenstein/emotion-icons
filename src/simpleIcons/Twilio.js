import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0C5.381-.008.008 5.352 0 11.971V12c0 6.64 5.359 12 12 12 6.64 0 12-5.36 12-12 0-6.641-5.36-12-12-12zm0 20.801c-4.846.015-8.786-3.904-8.801-8.75V12a8.777 8.777 0 0 1 8.75-8.801H12a8.776 8.776 0 0 1 8.801 8.75V12c.015 4.847-3.904 8.786-8.75 8.801H12zm5.44-11.76a2.492 2.492 0 0 1-2.481 2.479 2.492 2.492 0 0 1-2.479-2.479 2.492 2.492 0 0 1 2.479-2.481 2.493 2.493 0 0 1 2.481 2.481zm0 5.919c0 1.36-1.12 2.48-2.481 2.48a2.492 2.492 0 0 1-2.479-2.48 2.492 2.492 0 0 1 2.479-2.479 2.492 2.492 0 0 1 2.481 2.479zm-5.919 0c0 1.36-1.12 2.48-2.479 2.48a2.492 2.492 0 0 1-2.481-2.48 2.492 2.492 0 0 1 2.481-2.479 2.492 2.492 0 0 1 2.479 2.479zm0-5.919a2.492 2.492 0 0 1-2.479 2.479 2.492 2.492 0 0 1-2.481-2.479A2.493 2.493 0 0 1 9.042 6.56a2.493 2.493 0 0 1 2.479 2.481z" key="k0" />
]

export const hex='#F22F46'
const Twilio = ({ title, ...restProps }) => {
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
          ? [<title key="Twilio-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Twilio',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Twilio.displayName = 'Twilio'

Twilio.defaultProps = { height: 24, width: 24}

export default Twilio
