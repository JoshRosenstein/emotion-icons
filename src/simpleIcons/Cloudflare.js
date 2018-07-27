import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 0 1-.134-.071.194.194 0 0 1-.02-.155.239.239 0 0 1 .203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 0 0 .013-.168 5.69 5.69 0 1 0-10.938-.584 2.585 2.585 0 0 0-1.793-.5 2.561 2.561 0 0 0-2.223 3.18 3.634 3.634 0 0 0-3.53 3.636c0 .176.013.352.034.528a.174.174 0 0 0 .169.148h15.981a.22.22 0 0 0 .204-.155z" className="st2" key="k0" />
,
<path d="M19.266 11.281c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 0 1 .021.156.238.238 0 0 1-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 0 0 .17-.125 4.81 4.81 0 0 0 .175-1.28 4.739 4.739 0 0 0-4.734-4.727" className="st3" key="k1" />
]

export const hex='#F38020'
const Cloudflare = ({ title, ...restProps }) => {
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
          ? [<title key="Cloudflare-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cloudflare',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Cloudflare.displayName = 'Cloudflare'

Cloudflare.defaultProps = { height: 24, width: 24}

export default Cloudflare
