import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.984 22.265c-.33 0-.654-.088-.943-.256-.9-.52-1.21-1.67-.69-2.57 1.91-3.3.77-7.54-2.54-9.448a6.89 6.89 0 0 0-3.45-.92c-.33 0-.66-.09-.942-.258a1.87 1.87 0 0 1-.69-2.566c.33-.575.947-.93 1.622-.935 1.864 0 3.713.49 5.336 1.427a10.613 10.613 0 0 1 4.957 6.48c.735 2.75.36 5.62-1.066 8.1-.33.57-.96.93-1.622.93l.04.006zm-11.478 1.31c-3.81 0-7.355-2.046-9.256-5.338a1.875 1.875 0 0 1 .69-2.56c.873-.504 2.068-.176 2.565.686A6.935 6.935 0 0 0 9.5 19.82c1.202 0 2.397-.32 3.448-.926a7.159 7.159 0 0 0 2.524-2.54c.166-.285.392-.525.69-.69.857-.51 2.06-.18 2.555.676a1.86 1.86 0 0 1-.015 1.878 10.722 10.722 0 0 1-3.906 3.907 10.74 10.74 0 0 1-5.335 1.428l.05.023zm.746-16.637a5.644 5.644 0 0 0-1.816 4.155c0 1.03.278 1.993.76 2.827.272.466.422.99.422 1.563 0 1.247-.736 2.33-1.79 2.825 1.46.45 3.08.315 4.51-.512a5.718 5.718 0 0 0 2.073-2.072c.27-.467.67-.872 1.16-1.144a3.138 3.138 0 0 1 3.35.136 5.564 5.564 0 0 0-2.69-3.65 5.626 5.626 0 0 0-2.82-.752 3.2 3.2 0 0 1-1.56-.42 3.123 3.123 0 0 1-1.547-2.975l-.043.01zm-3.77 10.428c-.664 0-1.286-.36-1.623-.94a10.636 10.636 0 0 1-1.43-5.334C3.43 5.21 8.21.424 14.1.424a1.879 1.879 0 0 1-.008 3.756c-3.812 0-6.91 3.102-6.91 6.912 0 1.21.318 2.404.926 3.455a1.879 1.879 0 0 1-1.63 2.816v.003z" key="k0" />
]

export const hex='#00A3E0'
const BathASU = ({ title, ...restProps }) => {
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
          ? [<title key="BathASU-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BathASU',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BathASU.displayName = 'BathASU'

BathASU.defaultProps = { height: 24, width: 24}

export default BathASU
