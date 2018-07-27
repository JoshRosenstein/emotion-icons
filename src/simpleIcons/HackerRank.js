import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799a.259.259 0 0 0-.258.258v3.875H9.963V6.908h.701a.255.255 0 0 0 .254-.258.257.257 0 0 0-.123-.221L9.223 4.92a.303.303 0 0 0-.226-.109.265.265 0 0 0-.207.107L7.11 6.43a.257.257 0 0 0-.12.218c0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492a.258.258 0 0 0 .259-.256v-4.004h4.073v4.152h-.699a.26.26 0 1 0-.137.477l1.579 1.51a.301.301 0 0 0 .225.109.264.264 0 0 0 .208-.109l1.679-1.51a.258.258 0 0 0-.135-.477h-.704l-.007-10.034a.257.257 0 0 0-.255-.26h-1.494v.002z" key="k0" />
]

export const hex='#2EC866'
const HackerRank = ({ title, ...restProps }) => {
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
          ? [<title key="HackerRank-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-HackerRank',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

HackerRank.displayName = 'HackerRank'

HackerRank.defaultProps = { height: 24, width: 24}

export default HackerRank
