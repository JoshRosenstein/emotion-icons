import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.979 9.652A5.005 5.005 0 0 0 17 5H7a4.97 4.97 0 0 0-4.987 4.737c-.01.079-.013.161-.013.253v6.51c0 .925.373 1.828 1.022 2.476A3.524 3.524 0 0 0 5.5 20c1.8 0 2.854-1.004 4.19-2.276.236-.226 1.1-.646 1.54-.751.25-.059 1.289-.059 1.539 0 .44.104 1.304.525 1.541.752C15.646 18.996 16.7 20 18.5 20c.925 0 1.828-.373 2.476-1.022A3.524 3.524 0 0 0 22 16.5V10c0-.095-.004-.18-.014-.26l-.007-.088zM20 16.5c0 .397-.159.784-.438 1.063A1.51 1.51 0 0 1 18.5 18c-.959 0-1.555-.528-2.81-1.724-.576-.55-1.821-1.098-2.46-1.249-.416-.099-.949-.113-1.23-.113s-.814.015-1.23.113c-.639.151-1.884.699-2.459 1.248C7.055 17.472 6.459 18 5.5 18c-.397 0-.784-.159-1.063-.438A1.51 1.51 0 0 1 4 16.5l-.009-6.478c.01-.051.016-.103.018-.155A2.977 2.977 0 0 1 7 7h10c1.567 0 2.877 1.225 2.98 2.72 0 .06.005.12.01.12 0 .064-.003.097.01.16v6.5z" key="k0" />
,
<circle cx={16} cy={13} r={1} key="k1" />
,
<circle cx={18} cy={11} r={1} key="k2" />
,
<circle cx={16} cy={9} r={1} key="k3" />
,
<circle cx={14} cy={11} r={1} key="k4" />
,
<circle cx={8} cy={11} r={2} key="k5" />
]


const Joystick = ({ title, ...restProps }) => {
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
          ? [<title key="Joystick-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Joystick',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Joystick.displayName = 'Joystick'

Joystick.defaultProps = { height: 24, width: 24}

export default Joystick
