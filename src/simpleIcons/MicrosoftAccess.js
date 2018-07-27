import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M24 15.019c-.051.542-.773.975-2.165 1.29-1.392.32-3.138.479-5.24.479-.621 0-1.216-.008-1.785-.026v3.283c.569.033 1.164.053 1.785.053 2.094-.02 3.84-.205 5.234-.563s2.12-.808 2.171-1.351v-3.165zm-7.432-2.367c-.603 0-1.199-.016-1.784-.051l.026 3.345c.57.016 1.163.03 1.785.03 2.1-.015 3.848-.195 5.239-.555 1.392-.346 2.115-.795 2.165-1.335V10.86c-.051.543-.776.978-2.178 1.305-1.399.33-3.15.495-5.254.495v-.008zm0-4.122c-.603 0-1.199-.019-1.784-.053v3.335c.585.034 1.182.053 1.784.053 2.101-.019 3.855-.203 5.254-.555 1.401-.354 2.127-.803 2.178-1.346V6.759c-.051.544-.776.976-2.178 1.294-1.399.317-3.15.479-5.254.479V8.53zm0-4.627c-.603 0-1.199.025-1.784.077v3.697c.585.034 1.182.05 1.784.05 2.101-.015 3.855-.199 5.254-.548 1.402-.348 2.127-.8 2.178-1.351-.051-.542-.776-.995-2.178-1.356-1.399-.36-3.15-.54-5.254-.556v-.013zM6.474 9.111c-.032.197-.171.824-.412 1.875l-.45 1.834 1.8.025-.42-1.835c-.256-1.069-.421-1.709-.451-1.89h-.06l-.007-.009zM0 3.153v17.759l13.545 2.338V.75L0 3.153zm8.284 13.234l-.504-2.002-2.494-.09-.479 1.886-1.591-.105 2.419-8.475 1.85-.104 2.639 8.995-1.845-.105h.005z" key="k0" />
]

export const hex='#BA141A'
const MicrosoftAccess = ({ title, ...restProps }) => {
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
          ? [<title key="MicrosoftAccess-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MicrosoftAccess',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MicrosoftAccess.displayName = 'MicrosoftAccess'

MicrosoftAccess.defaultProps = { height: 24, width: 24}

export default MicrosoftAccess
