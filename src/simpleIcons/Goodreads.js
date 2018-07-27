import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.525 15.977V.49h-2.059v2.906h-.064a5.498 5.498 0 0 0-.842-1.307A6.455 6.455 0 0 0 15.328.995a5.794 5.794 0 0 0-1.519-.736A6.013 6.013 0 0 0 12.038 0c-1.21 0-2.3.225-3.246.67A6.863 6.863 0 0 0 6.407 2.5a8.137 8.137 0 0 0-1.47 2.711 10.575 10.575 0 0 0-.506 3.283c0 1.199.141 2.326.425 3.382.286 1.057.737 1.976 1.368 2.762a6.402 6.402 0 0 0 2.375 1.833c.961.436 2.119.661 3.471.661 1.248 0 2.33-.315 3.262-.946s1.638-1.473 2.119-2.525h.061v2.284c0 2.044-.421 3.607-1.264 4.705-.84 1.081-2.224 1.638-4.146 1.638a7.682 7.682 0 0 1-1.669-.181 5.357 5.357 0 0 1-1.487-.57 3.929 3.929 0 0 1-1.143-1.038c-.316-.435-.526-.961-.632-1.593H5.064c.067.887.315 1.654.737 2.3a5.502 5.502 0 0 0 1.602 1.593 7.223 7.223 0 0 0 2.172.902c.811.194 1.639.3 2.494.3 1.383 0 2.541-.195 3.486-.555.947-.376 1.714-.902 2.301-1.608.601-.708 1.021-1.549 1.293-2.556.27-1.007.42-2.134.42-3.367l-.044.062zm-7.484-.557c-.955 0-1.784-.189-2.479-.571a5.21 5.21 0 0 1-1.732-1.503c-.467-.621-.797-1.332-1.022-2.139s-.332-1.633-.332-2.484c0-.871.105-1.725.301-2.563.21-.84.54-1.587.992-2.24.451-.652 1.037-1.182 1.728-1.584s1.533-.605 2.51-.605 1.803.209 2.495.621a5.252 5.252 0 0 1 1.683 1.634c.436.677.751 1.429.947 2.255.195.826.285 1.656.285 2.482a9.19 9.19 0 0 1-.345 2.484 6.395 6.395 0 0 1-1.038 2.139 5.4 5.4 0 0 1-1.698 1.503c-.676.382-1.458.571-2.359.571h.064z" key="k0" />
]

export const hex='#663300'
const Goodreads = ({ title, ...restProps }) => {
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
          ? [<title key="Goodreads-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Goodreads',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Goodreads.displayName = 'Goodreads'

Goodreads.defaultProps = { height: 24, width: 24}

export default Goodreads