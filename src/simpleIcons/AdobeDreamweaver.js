import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm2.125 4.51c0-.084.017-.117.116-.133.38-.017 1.47-.05 2.597-.05 3.35 0 5.016 2.162 5.016 5.33 0 4.405-2.89 5.74-5.115 5.74-.842 0-2.064-.016-2.51-.032-.065 0-.098-.05-.098-.132V5.808zm1.8 9.27c.28.018.528.034.842.034 1.848 0 3.217-1.304 3.234-4.108.02-2.74-1.4-3.795-3.163-3.795-.347 0-.627.02-.907.038v7.837zm12.688 1.57c-.116 0-.148-.045-.165-.143-.495-2.755-.907-4.703-1.09-6.056h-.016c-.214 1.226-.61 3.257-1.27 6.078-.033.1-.066.127-.148.127h-1.617c-.116 0-.148-.016-.18-.115L11.36 8.66c-.016-.067.018-.133.117-.133h1.617c.066 0 .116.023.132.09.627 3.546.89 5.384.99 6.11h.066c.116-.858.462-2.646 1.204-6.078.033-.1.033-.124.132-.124h1.7c.082 0 .098.04.115.123.578 3.25.957 5.3 1.056 6.126h.05c.16-1.056.38-2.48 1.084-6.144.017-.066.033-.106.116-.106h1.52c.066 0 .116.033.083.116l-1.963 7.894c-.015.083-.03.116-.146.116h-1.617z" key="k0" />
]

export const hex='#35FA00'
const AdobeDreamweaver = ({ title, ...restProps }) => {
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
          ? [<title key="AdobeDreamweaver-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AdobeDreamweaver',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AdobeDreamweaver.displayName = 'AdobeDreamweaver'

AdobeDreamweaver.defaultProps = { height: 24, width: 24}

export default AdobeDreamweaver
