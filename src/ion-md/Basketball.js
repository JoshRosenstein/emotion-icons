import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M191.6 272c-3.8 55-26.4 107.1-64.5 147.7 31.6 25 70.9 41 112.9 44.3V272h-48.4zM272 464c42-3.3 81.5-19.4 113.1-44.5-38-40.6-60.5-92.5-64.3-147.5H272v192zM240 48c-42 3.2-80.5 19-111.9 43.6 38 40.9 60.3 93.4 63.7 148.4H240V48zm80.7 192c3.4-55 25.6-107.4 63.5-148.3C352.7 67.1 314 51.2 272 48v192h48.7zm87.9-125.8c-17.2 18.5-30.7 39.7-40.1 62.9-8.2 20.2-13.1 40.9-14.6 62.9H464c-3.7-48-24.1-92.2-55.4-125.8zm-40.1 218.9c9.6 23.7 23.3 45.1 40.9 63.8C440.3 363.4 460.3 320 464 272H354.1c1.6 21 6.5 41.5 14.4 61.1zm-224.6-156c-9.5-23.3-23-44.5-40.3-63.1-31.4 33.6-51.9 78-55.6 126h110.5c-1.6-22-6.5-42.8-14.6-62.9zm-41.2 220c17.7-18.8 31.5-40.3 41.1-64 8-19.6 12.8-40.1 14.5-61.1H48c3.7 48 23.8 91.6 54.7 125.1z" key="k0" />
]


const Basketball = ({ title, ...restProps }) => {
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
          ? [<title key="Basketball-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Basketball',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Basketball.displayName = 'Basketball'

Basketball.defaultProps = { height: undefined, width: undefined}

export default Basketball
