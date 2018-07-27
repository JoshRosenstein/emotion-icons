import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22.146 9.227a1.478 1.478 0 1 0-2.956.002v6.19c0 .81.663 1.48 1.483 1.48.814 0 1.476-.67 1.476-1.48v-6.2h-.01zM5.393 8.032l.004 9.6c0 .885.704 1.59 1.573 1.59h1.063v3.28c0 .82.66 1.482 1.47 1.482s1.467-.66 1.48-1.468v-3.28h1.993v3.28a1.475 1.475 0 1 0 2.952-.007v-3.28h1.078c.87 0 1.573-.71 1.573-1.578v-9.63L5.35 8.03l.04.002zm9.648-2.93a.56.56 0 1 1-.002-1.118.56.56 0 0 1 .002 1.118m-6.06 0a.56.56 0 1 1 .56-.548.565.565 0 0 1-.57.567m6.29-2.9L16.29.33c.06-.105.014-.226-.076-.285a.219.219 0 0 0-.284.09l-1.05 1.9c-.868-.405-1.856-.63-2.89-.63s-2.018.215-2.892.603L8.064.105a.205.205 0 0 0-.278-.08c-.1.045-.136.18-.08.27l1.03 1.875c-2.03 1.047-3.4 3.04-3.4 5.33h13.328c0-2.29-1.368-4.283-3.396-5.33M3.33 7.742c-.817 0-1.48.665-1.48 1.483v6.192a1.48 1.48 0 0 0 2.961 0v-6.19c0-.815-.66-1.478-1.47-1.478" key="k0" />
]

export const hex='#A4C639'
const Android = ({ title, ...restProps }) => {
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
          ? [<title key="Android-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Android',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Android.displayName = 'Android'

Android.defaultProps = { height: 24, width: 24}

export default Android
