import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.484 4h-8.542v3.186c.515-.39 1.132-.588 1.855-.588v3.098h3.074c-.015.869-.315 1.602-.901 2.193-.584.592-1.318.896-2.188.916a3.209 3.209 0 0 1-1.829-.615v2.129h6.719v1.045h-6.721v1.293h6.715v1.032h-6.719v2.34h8.543c.346 0 .51-.182.51-.537V4.51c0-.342-.164-.51-.51-.51h-.006zM17.28 9.186V6.062c.87.02 1.6.322 2.188.91.586.588.891 1.326.906 2.214H17.28zm-9.024.052a.961.961 0 0 0-.263-.472 1.098 1.098 0 0 0-.483-.246 2.635 2.635 0 0 0-.69-.09l-.72.014v2.999h.026c.261.016.535.016.825 0a1.92 1.92 0 0 0 .809-.225c.313-.225.5-.525.561-.914.06-.391.039-.766-.064-1.111v.045zM0 3.059v17.946l13.688 2.365V.63L0 3.059zm10.213 8.087c-.375.869-.935 1.425-1.684 1.665a6.607 6.607 0 0 1-2.429.279v3.422l-1.801-.209V6.901l2.859-.149a4.422 4.422 0 0 1 1.566.18c.515.152.922.459 1.223.922.3.461.469.996.51 1.605a3.934 3.934 0 0 1-.244 1.687z" key="k0" />
]

export const hex='#D24726'
const MicrosoftPowerPoint = ({ title, ...restProps }) => {
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
          ? [<title key="MicrosoftPowerPoint-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MicrosoftPowerPoint',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MicrosoftPowerPoint.displayName = 'MicrosoftPowerPoint'

MicrosoftPowerPoint.defaultProps = { height: 24, width: 24}

export default MicrosoftPowerPoint
