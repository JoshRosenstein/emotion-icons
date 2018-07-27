import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.716 4.636L13.49 6.122l-2.295-3.439 2.228-1.486zm1.811 10.331l3.806 5.703-4.533 3.025-3.806-5.703-.664-.995 4.533-3.025zm-5.71 3.81l.838 1.256-3.45 2.303-1.503-2.25.754-.504 2.697-1.8zm7.596-6.507l.968-.645 1.501 2.25-2.227 1.487-.838-1.256 1.26-.84zm-.596 1.836l-.664-.995 1.26-.84.664.994zM3.792 12.593l-.753.503L.744 9.657l3.45-2.302 1.61 2.41-2.698 1.8 2.697-1.8.686 1.029zm7.721-6.639l.687 1.029-4.534 3.025L6.98 8.98 3.21 3.33 7.742.305z" key="k0" />
,
<path d="M14.749 5.282l-1.26.84-.686-1.028-1.609-2.41 2.228-1.487 2.295 3.439zM9.12 20.577l-.664-.995 2.697-1.8.664.995zm9.697-6.471l-.664-.995 1.26-.84.664.994zM3.792 12.593l-.686-1.028 2.697-1.8.686 1.029z" key="k1" />
,
<path d="M13.489 6.122l-.686-1.028 1.26-.84.686 1.028zm4.038 8.845l-4.533 3.025-.664-.995 4.533-3.025zm-6.014-9.013l.687 1.029-4.534 3.025L6.98 8.98zm-9.006-.822l.855 1.283-1.282.855-.856-1.282zm4.62 15.373l.856 1.283-1.282.855-.856-1.282zm-3.373 1.292L0 16.125 20.063 2.706 24 8.287z" key="k2" />
]

export const hex='#ED2B88'
const Aurelia = ({ title, ...restProps }) => {
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
          ? [<title key="Aurelia-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Aurelia',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Aurelia.displayName = 'Aurelia'

Aurelia.defaultProps = { height: 24, width: 24}

export default Aurelia