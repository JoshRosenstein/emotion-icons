import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.978 20.238c-.304-1.931-3.874-.444-4.096-2.559-.313-2.998 4.15-9.459 3.797-11.972-.313-2.255-1.841-2.73-3.165-2.756-1.284-.02-1.623.182-2.058.435-.253.146-.612.435-1.112-.041-.334-.318-.557-.536-.905-.819a1.915 1.915 0 0 0-.945-.395c-.476-.071-1.098 0-1.492.167-.395.172-.702.466-1.026.749-.323.283-1.147 1.198-1.911.859-.335-.145-1.458-.706-2.272-1.055-1.563-.677-3.822.42-4.636 1.866C2.944 6.866.557 15.32.193 16.432c-.809 2.502 1.032 4.54 3.509 4.424 1.052-.051 1.75-.43 2.412-1.638.384-.693 3.979-10.087 4.248-10.543.197-.323.844-.753 1.39-.475.551.283.662.869.581 1.421-.136.895-2.669 6.629-2.771 7.275-.162 1.103.359 1.714 1.507 1.774.784.041 1.567-.237 2.184-1.41.349-.652 4.349-8.666 4.702-9.202.39-.586.703-.779 1.103-.758.309.015.799.096.678 1.016-.122.905-3.343 6.78-3.676 8.221-.456 1.927.602 3.874 2.341 4.728 1.112.546 5.97 1.476 5.577-1.027z" key="k0" />
]

export const hex='#ED1C40'
const Meetup = ({ title, ...restProps }) => {
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
          ? [<title key="Meetup-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Meetup',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Meetup.displayName = 'Meetup'

Meetup.defaultProps = { height: 24, width: 24}

export default Meetup
