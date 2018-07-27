import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.012 0a11.985 11.985 0 0 0-8.475 3.511c-4.697 4.667-4.719 12.257-.052 16.954 4.668 4.695 12.257 4.717 16.953.049l.051-.049c4.684-4.682 4.684-12.273 0-16.954A11.991 11.991 0 0 0 12.012 0zm0 6.713h2.566c-.457.322-.629 1.224-.648 1.769v4.993c0 1.064-.855 1.92-1.918 1.92a1.914 1.914 0 0 1-1.919-1.92V8.632a1.912 1.912 0 0 1 1.919-1.919zM12 7.96a.672.672 0 1 0 0 1.344.672.672 0 0 0 0-1.344zm-6.689.19c1.063 0 1.92.854 1.92 1.918v4.942c.021.549.191 1.449.648 1.77H5.311a1.913 1.913 0 0 1-1.918-1.916v-4.795c0-1.066.855-1.919 1.918-1.919zm13.404 0c1.063 0 1.918.854 1.918 1.918v4.795a1.913 1.913 0 0 1-1.918 1.918h-2.568c.457-.322.631-1.223.65-1.771v-4.942a1.91 1.91 0 0 1 1.918-1.918zM5.301 9.398c-.373 0-.672.3-.672.66a.67.67 0 0 0 .66.665.672.672 0 0 0-.005-1.342l.017.017zm13.426 0a.67.67 0 0 0-.672.66.67.67 0 1 0 .672-.677v.017zm-6.727.96c-.37 0-.672.3-.672.659s.301.675.672.675.671-.3.671-.675-.298-.674-.671-.674v.015zm-6.701 1.424a.67.67 0 0 0-.67.675c0 .375.299.674.66.674a.673.673 0 0 0 .665-.674c0-.375-.3-.675-.67-.675h.015zm13.428 0c-.371 0-.672.3-.672.675a.67.67 0 1 0 1.342 0 .671.671 0 0 0-.67-.675zm-6.727.96c-.37 0-.672.299-.672.674a.671.671 0 1 0 1.343 0 .67.67 0 0 0-.671-.674zm-6.701 1.44a.668.668 0 0 0-.67.664c0 .367.299.676.66.676.359 0 .665-.301.665-.676s-.3-.67-.67-.67l.015.006zm13.428 0a.67.67 0 1 0 0 1.34c.369 0 .67-.301.67-.676s-.299-.67-.67-.67v.006z" key="k0" />
]

export const hex='#189EFC'
const Mastodon = ({ title, ...restProps }) => {
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
          ? [<title key="Mastodon-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Mastodon',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Mastodon.displayName = 'Mastodon'

Mastodon.defaultProps = { height: 24, width: 24}

export default Mastodon
