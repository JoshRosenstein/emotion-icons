import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.6 12.635l-1.125-.053c-.945-.033-1.197-.083-1.197-.435 0-.135.1-.318.303-.42.167.036.337.053.507.053 2.415 0 3.63-1.17 3.63-2.98 0-.3-.074-.57-.225-.735h.96v-2.01H12.6c-.472-.115-.892-.2-1.465-.2-2.543 0-3.804 1.474-3.804 3.18 0 1.07.506 1.84 1.26 2.242-.584.234-1.022.87-1.022 1.54 0 .586.322 1.054.81 1.287-.64.336-1.215 1.155-1.215 1.94 0 1.66 1.35 2.476 3.64 2.476 2.873 0 4.695-1.604 4.695-3.41h-.018c0-1.674-1.078-2.41-2.88-2.475zm-1.462-4.78c.895 0 1.342.48 1.342 1.193 0 .71-.5 1.14-1.325 1.14-.893 0-1.342-.445-1.342-1.173 0-.68.483-1.16 1.325-1.16zm2.008 7.554c0 .63-.612 1.113-1.82 1.113-.944 0-1.5-.405-1.5-1.002 0-.353.226-.708.6-.997.09.015.226 0 .33.015l1.35.032c.796.033 1.08.388 1.08.84h-.04zm4.491-4.555v.002c-.99 0-1.824.834-1.824 1.845 0 1.01.834 1.823 1.824 1.823 1.01 0 1.846-.814 1.846-1.824 0-1.01-.837-1.846-1.846-1.846z" key="k0" />
,
<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.335C6.293 22.335 1.665 17.708 1.665 12 1.665 6.293 6.293 1.665 12 1.665c5.708 0 10.335 4.628 10.335 10.335 0 5.708-4.627 10.335-10.335 10.335z" key="k1" />
]

export const hex='#2FA66A'
const Gauges = ({ title, ...restProps }) => {
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
          ? [<title key="Gauges-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Gauges',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Gauges.displayName = 'Gauges'

Gauges.defaultProps = { height: 24, width: 24}

export default Gauges
