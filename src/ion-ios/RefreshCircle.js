import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 336.1c-70.7 0-128-57.3-128-128.1s57.3-128.1 128-128.1v-37c0-6.4 7.1-10.2 12.4-6.7l72.9 52.6c4.9 3.3 4.7 10.6-.4 13.6L268 196.7c-5.3 3.1-12-.8-12-6.9v-41.9c-60.3 0-109.2 49.7-108.1 110.2 1.1 59.1 50.3 106.7 109.5 106 55.9-.7 101.8-43.7 106.3-99 .4-5.2 4.7-9.1 9.9-9.1 5.8 0 10.4 4.9 9.9 10.7-5.4 66-60.4 117.4-127.5 117.4z" key="k0" />
]


const RefreshCircle = ({ title, ...restProps }) => {
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
          ? [<title key="RefreshCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RefreshCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

RefreshCircle.displayName = 'RefreshCircle'

RefreshCircle.defaultProps = { height: undefined, width: undefined}

export default RefreshCircle
