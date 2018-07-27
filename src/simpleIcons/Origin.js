import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.588 3.11a8.78 8.78 0 0 1 3.417.919 8.775 8.775 0 0 1 2.706 2.094 9.112 9.112 0 0 1 1.715 2.963 8.65 8.65 0 0 1 .464 3.502 8.224 8.224 0 0 1-.306 1.848 9.174 9.174 0 0 1-.674 1.703 19.958 19.958 0 0 1-1.47 2.412 17.61 17.61 0 0 1-1.762 2.118 18.609 18.609 0 0 1-4.286 3.281l-.037.026a.196.196 0 0 1-.109.023.293.293 0 0 1-.159-.097.266.266 0 0 1-.062-.173c0-.029.004-.059.012-.085a.186.186 0 0 1 .037-.062c.277-.393.506-.806.686-1.235a5.42 5.42 0 0 0 .368-1.359.118.118 0 0 0-.038-.085.11.11 0 0 0-.085-.038 9.155 9.155 0 0 1-.795.062 4.925 4.925 0 0 1-.796-.037 8.818 8.818 0 0 1-6.123-3.013 9.088 9.088 0 0 1-1.715-2.963 8.662 8.662 0 0 1-.465-3.502 8.224 8.224 0 0 1 .306-1.848 8.598 8.598 0 0 1 .675-1.68c.439-.864.931-1.676 1.469-2.436A18.034 18.034 0 0 1 7.322 3.33 18.8 18.8 0 0 1 11.608.051l.038-.025a.187.187 0 0 1 .109-.025.295.295 0 0 1 .158.098.255.255 0 0 1 .062.174.244.244 0 0 1-.012.084.164.164 0 0 1-.036.061 6.447 6.447 0 0 0-.687 1.237c-.181.433-.3.885-.366 1.358 0 .033.012.063.036.086a.117.117 0 0 0 .085.037c.262-.033.527-.053.795-.061.272-.009.536.003.798.035zm-.807 12.367a3.32 3.32 0 0 0 2.521-.855c.72-.639 1.109-1.438 1.176-2.4a3.357 3.357 0 0 0-.856-2.535 3.293 3.293 0 0 0-2.4-1.162 3.36 3.36 0 0 0-2.534.855 3.299 3.299 0 0 0-1.164 2.4 3.381 3.381 0 0 0 .846 2.535c.628.725 1.432 1.115 2.411 1.162z" key="k0" />
]

export const hex='#F56C2D'
const Origin = ({ title, ...restProps }) => {
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
          ? [<title key="Origin-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Origin',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Origin.displayName = 'Origin'

Origin.defaultProps = { height: 24, width: 24}

export default Origin