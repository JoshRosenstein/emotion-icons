import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4.82 17.275c-.684 0-1.304-.56-1.304-1.24s.56-1.243 1.305-1.243c.748 0 1.31.56 1.31 1.242s-.622 1.24-1.305 1.24zm16.012-6.763c-.135-.992-.75-1.8-1.56-2.42l-.315-.25-.254.31c-.494.56-.69 1.553-.63 2.295.06.562.24 1.12.554 1.554-.254.13-.568.25-.81.377a5.29 5.29 0 0 1-1.68.25H.097l-.06.37a6.98 6.98 0 0 0 .562 3.54l.244.435v.06c1.5 2.483 4.17 3.6 7.078 3.6 5.594 0 10.182-2.42 12.357-7.633 1.425.062 2.864-.31 3.54-1.676l.18-.31-.3-.187c-.81-.494-1.92-.56-2.85-.31l-.018.002zm-8.008-.992h-2.428v2.42h2.43V9.518l-.002.003zm0-3.043h-2.428v2.42h2.43V6.48l-.002-.003zm0-3.104h-2.428v2.42h2.43v-2.42h-.002zm2.97 6.147H13.38v2.42h2.42V9.518l-.007.003zm-8.998 0H4.383v2.42h2.422V9.518l-.01.003zm3.03 0h-2.4v2.42H9.84V9.518l-.015.003zm-6.03 0H1.4v2.42h2.428V9.518l-.03.003zm6.03-3.043h-2.4v2.42H9.84V6.48l-.015-.003zm-3.045 0H4.387v2.42H6.8V6.48l-.016-.003z" key="k0" />
]

export const hex='#1488C6'
const Docker = ({ title, ...restProps }) => {
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
          ? [<title key="Docker-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Docker',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Docker.displayName = 'Docker'

Docker.defaultProps = { height: 24, width: 24}

export default Docker
