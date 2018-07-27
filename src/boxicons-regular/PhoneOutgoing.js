import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.002 6.942c-.015.25-.302 6.172 4.291 10.765 3.988 3.988 8.99 4.299 10.428 4.299.219 0 .337-.008.337-.008.243-.015.478-.118.649-.291l3-3a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0l-3 3a.996.996 0 0 0-.291.649zM6 5.414L8.586 8 7.293 9.293a.996.996 0 0 0-.271.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.993.993 0 0 0 .912-.271L16 15.414 18.586 18l-2.005 2.005c-1.401-.021-5.548-.387-8.874-3.712-3.342-3.343-3.685-7.622-3.71-8.876L6 5.414z" key="k0" />
,
<path d="M13.707 11.707l5.172-5.172L21 8.656V3h-5.656l2.121 2.121-5.172 5.172z" key="k1" />
]


const PhoneOutgoing = ({ title, ...restProps }) => {
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
          ? [<title key="PhoneOutgoing-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PhoneOutgoing',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PhoneOutgoing.displayName = 'PhoneOutgoing'

PhoneOutgoing.defaultProps = { height: 24, width: 24}

export default PhoneOutgoing
