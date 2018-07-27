import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 24V0h24v24H0zM16.39 6.76l-.23.03-.22.04-.21.06-.2.07-.2.07-.19.09-.18.1-.17.11-.17.12-.16.13-.15.14-.14.15-.13.16-.13.17-.11.17-.11.19-.1.19-.09.21-.08-.22-.1-.21-.1-.2-.12-.19-.13-.17-.14-.16-.15-.15-.15-.14-.17-.13-.17-.11-.19-.11-.18-.09-.2-.08-.2-.07-.2-.06-.21-.05-.22-.04-.22-.02-.22-.02h-.43l-.21.02-.2.02-.2.03-.19.05-.18.05-.18.06-.18.07-.16.08-.17.08-.15.1-.15.1-.14.11-.14.12-.13.13-.12.13-.12.14-.11.15-.1.16L7 8.5V6.95H2.65v2.22h1.37v5.86H2.65v2.26h6.33v-2.26H7v-3.81l.01-.21.03-.2.03-.19.04-.18.05-.18.06-.16.07-.16.08-.14.09-.14.11-.12.11-.11.12-.1.14-.09.15-.08.15-.06.17-.05.19-.04.19-.02.21-.01h.17l.16.02.16.03.14.04.14.05.13.06.12.07.11.09.1.1.1.11.08.12.08.14.06.16.06.16.05.19.04.19.03.21.03.23.01.25v6.09h4.3v-2.26H13.7v-3.6l.01-.21.01-.21.02-.2.04-.19.04-.18.05-.18.06-.16.07-.16.08-.14.09-.14.1-.12.12-.11.12-.1.14-.09.14-.08.16-.06.17-.05.19-.04.19-.02.21-.01h.17l.16.02.16.03.14.04.14.05.13.06.12.07.11.09.1.1.09.11.09.12.08.14.06.16.06.16.05.19.04.19.03.21.03.23.01.25v6.09h4.3v-2.26h-1.37v-4.72l-.01-.36-.04-.33-.06-.32-.08-.3-.1-.28-.12-.26-.14-.24-.16-.23-.18-.2-.18-.19-.21-.16-.21-.15-.23-.13-.24-.12-.25-.09-.25-.08-.27-.06-.26-.04-.28-.03h-.52l-.23.02z" key="k0" />
]

export const hex='#000000'
const Mozilla = ({ title, ...restProps }) => {
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
          ? [<title key="Mozilla-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Mozilla',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Mozilla.displayName = 'Mozilla'

Mozilla.defaultProps = { height: 24, width: 24}

export default Mozilla
