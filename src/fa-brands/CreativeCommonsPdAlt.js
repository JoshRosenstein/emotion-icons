import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zM135.5 323.3V186h68.2c33.7 0 50.5 15.5 50.5 46.5 0 9-3 46.5-57.1 46.5h-27v44.3h-34.6zm34.1-111.6v41.6h29.2c27.9 0 30-41.6-.9-41.6h-28.3zm93.9 111.6V186h53.2c21.4 0 70 5.2 70 68.6 0 63.5-48.6 68.6-70 68.6h-53.2zm34.1-108.5v79.7h19.9c24 0 34.5-15.3 34.5-39.9 0-42-31.2-39.9-35-39.9l-19.4.1z" key="k0" />
]


const CreativeCommonsPdAlt = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="CreativeCommonsPdAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 496 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CreativeCommonsPdAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CreativeCommonsPdAlt.displayName = 'CreativeCommonsPdAlt'

CreativeCommonsPdAlt.defaultProps = { height: undefined, width: undefined}

export default CreativeCommonsPdAlt
