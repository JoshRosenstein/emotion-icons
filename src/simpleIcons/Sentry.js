import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.663 21.572c.449-.748.449-1.496 0-2.244l-9.72-16.897c-.447-.747-1.195-1.048-1.943-1.048s-1.495.449-1.943 1.048L6.916 7.963l.748.449a14.814 14.814 0 0 1 5.682 5.682c1.197 2.094 1.944 4.336 2.094 6.73h-2.243a13.315 13.315 0 0 0-1.794-5.684c-1.047-2.093-2.692-3.738-4.785-4.935l-.749-.447-2.99 5.084.747.449c1.944 1.195 3.29 3.139 3.589 5.383H2.28c-.149 0-.3-.15-.3-.15s-.148-.15 0-.299l1.348-2.393c-.449-.447-1.048-.748-1.646-.896L.336 19.329c-.449.748-.449 1.496 0 2.244.448.746 1.046 1.045 1.943 1.045h6.879v-.896c0-1.645-.449-3.141-1.196-4.637-.599-1.195-1.496-2.093-2.542-2.84L6.467 12.3c1.347 1.046 2.543 2.243 3.439 3.739 1.047 1.793 1.496 3.738 1.496 5.682v.896h5.831v-.896c0-2.99-.747-5.982-2.392-8.673-1.197-2.394-3.141-4.337-5.385-5.833L11.7 3.328c.151-.15.3-.15.3-.15.15 0 .15 0 .299.15l9.721 16.896c.148.148 0 .299 0 .299s-.15.15-.3.15h-2.243v1.795h2.243c.896.149 1.495-.15 1.943-.896z" key="k0" />
]

export const hex='#FB4226'
const Sentry = ({ title, ...restProps }) => {
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
          ? [<title key="Sentry-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Sentry',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Sentry.displayName = 'Sentry'

Sentry.defaultProps = { height: 24, width: 24}

export default Sentry
