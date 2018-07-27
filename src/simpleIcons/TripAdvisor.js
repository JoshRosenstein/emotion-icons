import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.011 9.532c.281-1.207 1.175-2.416 1.175-2.416h-4.012c-2.251-1.455-4.981-2.226-8.013-2.226-3.14 0-5.978.78-8.214 2.251H.186s.885 1.186 1.17 2.386a6.004 6.004 0 0 0-1.167 3.557 6.015 6.015 0 0 0 6.012 6.008c1.891 0 3.571-.885 4.681-2.254l1.275 1.916 1.291-1.936a5.855 5.855 0 0 0 2.205 1.74 6.013 6.013 0 0 0 4.592.18c3.106-1.154 4.696-4.621 3.556-7.726a5.821 5.821 0 0 0-.81-1.485l.02.005zm-3.171 8.072a4.756 4.756 0 0 1-5.658-1.87 4.58 4.58 0 0 1-.503-.971 4.775 4.775 0 0 1-.259-1.215 4.8 4.8 0 0 1 .405-2.453 4.802 4.802 0 0 1 8.867.345 4.808 4.808 0 0 1-2.835 6.163h-.017zm-9.668-1.834a4.802 4.802 0 0 1-3.973 2.113 4.808 4.808 0 0 1-4.801-4.797c0-2.641 2.156-4.802 4.801-4.802s4.798 2.161 4.798 4.802c0 .164-.03.314-.048.479a4.806 4.806 0 0 1-.777 2.221v-.016zM3.15 13.023c0 1.641 1.336 2.971 2.971 2.971s2.968-1.33 2.968-2.971a2.97 2.97 0 0 0-5.937 0H3.15zm12.048 0a2.97 2.97 0 0 0 2.968 2.971 2.967 2.967 0 1 0 0-5.935 2.973 2.973 0 0 0-2.971 2.964h.003zm-11.022 0c0-1.071.869-1.943 1.936-1.943 1.064 0 1.949.873 1.949 1.943a1.95 1.95 0 1 1-3.9 0h.015zm12.033 0c0-1.071.869-1.943 1.949-1.943 1.066 0 1.937.873 1.937 1.943a1.95 1.95 0 1 1-3.901 0h.015zM12.156 5.94c2.161 0 4.111.389 5.822 1.162a6.013 6.013 0 0 0-1.906.36 5.898 5.898 0 0 0-3.375 3.125 5.95 5.95 0 0 0-.541 2.065 6.024 6.024 0 0 0-5.881-5.578C7.986 6.34 9.967 5.94 12.112 5.94h.044z" key="k0" />
]

export const hex='#00AF87'
const TripAdvisor = ({ title, ...restProps }) => {
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
          ? [<title key="TripAdvisor-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TripAdvisor',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TripAdvisor.displayName = 'TripAdvisor'

TripAdvisor.defaultProps = { height: 24, width: 24}

export default TripAdvisor
