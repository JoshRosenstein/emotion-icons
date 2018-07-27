import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.95 19.062a.804.804 0 0 1-.67-1.245c.738-1.094 1.125-2.381 1.125-3.719s-.387-2.625-1.125-3.721a.796.796 0 0 1 .216-1.106.797.797 0 0 1 1.108.214A8.266 8.266 0 0 1 24 14.105a8.268 8.268 0 0 1-1.396 4.619.73.73 0 0 1-.645.359l-.009-.021z" key="k0" />
,
<path d="M19.66 17.768a.784.784 0 0 1-.445-.139.777.777 0 0 1-.215-1.094 4.275 4.275 0 0 0 .747-2.43c0-.855-.258-1.695-.747-2.431-.248-.36-.154-.854.215-1.095s.857-.15 1.106.225a5.922 5.922 0 0 1 1.021 3.314c0 1.201-.352 2.34-1.021 3.315a.767.767 0 0 1-.661.36v-.025zm-3.73-7.153a6.331 6.331 0 0 0-6.3-5.699 6.349 6.349 0 0 0-5.995 4.283C1.588 9.501 0 11.269 0 13.4a4.264 4.264 0 0 0 4.26 4.254h10.908a3.566 3.566 0 0 0 3.566-3.557c0-1.706-1.2-3.129-2.805-3.48v-.002zm-.762 5.446H4.263a2.67 2.67 0 0 1-2.669-2.658 2.664 2.664 0 0 1 2.669-2.658c.71 0 1.381.285 1.886.781a.79.79 0 0 0 1.125 0c.3-.301.3-.811 0-1.125A4.288 4.288 0 0 0 5.309 9.29a4.728 4.728 0 0 1 4.305-2.774 4.75 4.75 0 0 1 4.74 4.738c0 .512-.075 1.006-.24 1.486a.819.819 0 0 0 .75 1.065.79.79 0 0 0 .75-.54c.105-.315.18-.63.225-.96a1.977 1.977 0 0 1 1.26 1.83 1.973 1.973 0 0 1-1.965 1.979l.034-.053z" key="k1" />
]

export const hex='#314359'
const Mixcloud = ({ title, ...restProps }) => {
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
          ? [<title key="Mixcloud-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Mixcloud',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Mixcloud.displayName = 'Mixcloud'

Mixcloud.defaultProps = { height: 24, width: 24}

export default Mixcloud
