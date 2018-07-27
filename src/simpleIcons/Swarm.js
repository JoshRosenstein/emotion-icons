import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.367 8.755l.004-.005c-.03-.058-.138-.3-.16-.364v-.002C8.828 1.474 1.314 1.72.128 4.81c-.91 2.373 3.072 8.026 12.24 3.945zM9.9 19.232a11.201 11.201 0 0 1-.957-4.26c-.964 1.49-1.69 2.987-2.176 4.104-.023.045-.38.93-.482 1.2-.13.33.045.734.383.854.273.104 1.165.42 1.22.45 1.14.374 2.716.84 4.456 1.126a11.001 11.001 0 0 1-2.445-3.496v.022zm3.99-11.115c5.18-2.306 4.456-6.31 3.116-6.825-1.804-.693-5.08 1.974-3.205 6.62.016.033.09.17.09.205zm9.523 5.069v-.008a6.758 6.758 0 0 0-3.897-3.624 1.444 1.444 0 0 0-.51-.09c-.87 0-1.707.723-1.785 1.626-.134 1.506.165 3.04.825 4.516.646 1.46 1.566 2.69 2.75 3.596.31.24.684.36 1.063.36.677 0 1.354-.36 1.623-1.005a6.79 6.79 0 0 0-.067-5.37z" key="k0" />
,
<path d="M19.482 20.918h-.004c-1.445-1.11-2.594-2.6-3.41-4.43-.826-1.86-1.164-3.738-1.004-5.586a3.773 3.773 0 0 1 .438-1.465l-.137.035c-.764.19-1.5.52-2.156.953-.95.625-1.788 1.55-2.15 2.646a4.03 4.03 0 0 0-.193.93 9.206 9.206 0 0 0 3.457 7.927c.684.547 1.92.89 2.93.89.95 0 1.887-.27 2.73-.704.263-.137.84-.493.878-.524a3.681 3.681 0 0 1-1.38-.66v-.012z" key="k1" />
]

export const hex='#FFA633'
const Swarm = ({ title, ...restProps }) => {
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
          ? [<title key="Swarm-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Swarm',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Swarm.displayName = 'Swarm'

Swarm.defaultProps = { height: 24, width: 24}

export default Swarm
