import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M201.1 361.2l-67.8 48.9c-3.7 3.6-5.2 9.1-5.3 13.9-.1 4.8 1.2 8.8 4.7 12.5 3.6 3.9 8.8 6.2 13.6 6.2 4.5 0 12.5-4.9 16-8.4l69.7-51.6c3.6-3.5 5.7-8.4 5.7-13.5l9.1-52.5-45.7-46.7v91.2z" key="k0" />
,
<ellipse cx={274.7} cy={69.3} rx={37.3} ry={37.3} transform="rotate(-80.781 274.673 69.329)" key="k1" />
,
<path d="M350.7 459.2l-15.2-117.4c-.5-3.5-1.9-6.8-4.2-9.5l-57-68.8V143.9c0-11.3-6.3-15.9-18.3-15.9h-37c-2.8 0-5.2 1-7.7 2.3l-68 31.7c-10 5.3-15.3 15.4-15.3 28.7V256c0 10.3 8.2 18.7 18.3 18.7 10.1 0 18.3-8.4 18.3-18.7v-58.2c0-3 1.7-5.8 4.4-7.1l32.2-16.4v75.3c0 4.2 1.6 8.2 4.6 11.2l92.4 94.4c1.2 1.2 2 2.8 2.2 4.5l14.2 104.7c1.3 9.3 9.1 15.7 18.1 15.7h2c9.9-1.5 17.4-10.7 16-20.9z" key="k2" />
,
<path d="M378.4 232.4l-95-96.2v52.6l69.2 70.1c7.2 7.3 18.7 7.2 25.9-.1 3.5-3.6 5.5-7.5 5.5-12.2 0-4.8-2-10.5-5.6-14.2z" key="k3" />
]


const Walk = ({ title, ...restProps }) => {
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
          ? [<title key="Walk-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Walk',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Walk.displayName = 'Walk'

Walk.defaultProps = { height: undefined, width: undefined}

export default Walk
