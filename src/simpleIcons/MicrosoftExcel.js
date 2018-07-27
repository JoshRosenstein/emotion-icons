import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.553 3.102h-8.04V4.59h2.37v2.354h-2.37v.75h2.37v2.357h-2.37v.771h2.37v2.229h-2.37v.893h2.37v2.234h-2.37v.893h2.37v2.247h-2.37v1.639h8.04c.127-.038.233-.188.318-.448.085-.262.129-.475.129-.636V3.374c0-.128-.044-.205-.129-.232a1.1 1.1 0 0 0-.318-.04zM22.51 19.316h-3.857v-2.245h3.857v2.247-.002zm0-3.138h-3.857v-2.235h3.857v2.235zm0-3.128h-3.857v-2.219h3.857v2.221-.002zm0-3h-3.857V7.696h3.857v2.355-.001zm0-3.119h-3.857v-2.34h3.857v2.355-.015zM0 2.731v18.601l14.16 2.449V.219L0 2.739v-.008zm8.393 14.071c-.054-.146-.308-.766-.758-1.863a121.86 121.86 0 0 0-.799-1.916h-.025l-1.519 3.615-2.03-.137 2.408-4.5-2.205-4.5 2.07-.109 1.368 3.521h.027l1.545-3.681 2.139-.135-2.547 4.87 2.625 4.968-2.299-.135v.002z" key="k0" />
]

export const hex='#217346'
const MicrosoftExcel = ({ title, ...restProps }) => {
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
          ? [<title key="MicrosoftExcel-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MicrosoftExcel',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MicrosoftExcel.displayName = 'MicrosoftExcel'

MicrosoftExcel.defaultProps = { height: 24, width: 24}

export default MicrosoftExcel
