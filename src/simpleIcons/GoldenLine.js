import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16.377 21.658a2.215 2.215 0 1 1-4.428 0 2.215 2.215 0 0 1 4.428 0zm-4.715-.172L6.47 22.7s-.287.08-.392-.215c-.06-.181.091-.398.091-.398l5.213-8.514s.267-.402.77-.549c.418-.121.872.16.872.16l8.351 5.253s.362.147.348.438c-.015.293-.333.343-.333.343l-5.04 1.178a2.476 2.476 0 0 0-2.156-1.244 2.517 2.517 0 0 0-2.504 2.335h-.028zM3.898 7.297l1.513-5.263s.072-.303.381-.242c.186.031.303.273.303.273l4.889 8.698s.223.425.106.941c-.099.425-.567.683-.567.683L1.864 17.11s-.307.243-.547.084c-.242-.163-.136-.463-.136-.463l1.472-5.116a2.507 2.507 0 0 0 1.245-4.329v.011zm.532 1.858a2.215 2.215 0 1 1-2.214-2.213c1.225 0 2.217.992 2.217 2.213H4.43zm15.666-1.734l3.81 4.18s.211.212.003.445c-.124.141-.394.111-.394.111l-9.974-.395s-.478-.035-.853-.402c-.31-.303-.282-.838-.282-.838l.51-9.852s-.05-.389.212-.511c.27-.122.467.129.467.129l3.318 3.628c-.188.35-.293.744-.293 1.17a2.508 2.508 0 0 0 2.509 2.504c.341 0 .667-.075.964-.197l.003.028zm1.25-2.317a2.209 2.209 0 0 1-2.212 2.217 2.214 2.214 0 0 1-2.217-2.217 2.21 2.21 0 0 1 2.217-2.201 2.22 2.22 0 0 1 2.213 2.217l-.001-.016z" key="k0" />
]

export const hex='#FBBF00'
const GoldenLine = ({ title, ...restProps }) => {
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
          ? [<title key="GoldenLine-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GoldenLine',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GoldenLine.displayName = 'GoldenLine'

GoldenLine.defaultProps = { height: 24, width: 24}

export default GoldenLine
