import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.055 7.328a11.967 11.967 0 0 0-2.569-3.813A12.049 12.049 0 0 0 16.672.944 11.89 11.89 0 0 0 12 0a11.986 11.986 0 0 0-8.485 3.515A12.02 12.02 0 0 0 .943 7.328 11.899 11.899 0 0 0 0 12a11.971 11.971 0 0 0 3.514 8.485 12.042 12.042 0 0 0 3.813 2.57C8.81 23.686 10.38 24 12 24c1.619 0 3.189-.314 4.671-.944a12.04 12.04 0 0 0 3.814-2.564 11.967 11.967 0 0 0 2.57-3.811c.63-1.47.944-3.045.944-4.665 0-1.619-.314-3.18-.944-4.664v-.024zM12 22.335C6.293 22.335 1.665 17.707 1.665 12S6.293 1.665 12 1.665 22.335 6.293 22.335 12 17.707 22.335 12 22.335zm3.242-18.214H8.757c-.922 0-1.7.324-2.333.975a3.208 3.208 0 0 0-.953 2.334v10.182c0 .449.135.81.4 1.095.267.269.615.42 1.051.42.445 0 .805-.135 1.079-.405.272-.271.409-.63.409-1.08V7.08h2.141v10.529c0 .445.131.806.391 1.08.259.273.611.411 1.059.411.446 0 .799-.138 1.059-.411.26-.274.39-.635.39-1.08V7.08h2.142v10.529c0 .445.135.806.408 1.08.275.273.635.411 1.08.411.435 0 .783-.141 1.05-.423.268-.28.401-.638.401-1.069V7.426c0-.91-.318-1.688-.953-2.336-.633-.648-1.41-.975-2.334-.975v.006z" key="k0" />
]

export const hex='#FF1E0D'
const MakerBot = ({ title, ...restProps }) => {
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
          ? [<title key="MakerBot-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MakerBot',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MakerBot.displayName = 'MakerBot'

MakerBot.defaultProps = { height: 24, width: 24}

export default MakerBot
