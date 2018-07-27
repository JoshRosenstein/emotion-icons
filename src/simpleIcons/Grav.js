import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.489 13.965c-1.251-.825-1.965-1.523-2.589-2.777-.427.859-1.421 2.135-3.098 3.139-.84 2.61-4.823 7.605-6.113 6.885-.381-.195-.452-.48-.367-.765.093-.704 1.566-2.34 1.566-2.34s.029.345.494 1.065c-.629-1.936 1.021-4.305 1.456-5.131.689-.209.734-1.095.734-1.095.046-1.364-.569-2.34-1.155-2.94.421.525.556 1.306.57 2.025v.255c-.029.601-.21 1.41-.585 1.41v.016c-.39-.016-.885.074-1.319.21l-.961.239s.51-.015.78.226c-.314.51-1.005 1.125-1.771 1.484-1.109.525-1.439-.51-.869-1.17.135-.165.285-.3.404-.404a.56.56 0 0 1-.149-.36c-.075-.345-.045-.78.45-1.485.09-.149.21-.3.345-.449l.015-.016.016-.015v-.015c.029-.046.074-.076.104-.12.57-.585 1.485-1.2 2.911-1.74 1.694-2.49 2.309-2.956 2.309-2.956.181-.179.511-.419.615-.479-.87-1.515-1.049-3.646-.824-4.215a.243.243 0 0 0-.061.105c.09-.195.135-.255.225-.36.24-.27 1.035-.42 1.336.18.15.315.18.735.18 1.035-.645-.029-1.215.69-1.215.69s.524-.24 1.186-.255c0 0 .179.164.389.449-.284.556-.779 1.725-.42 2.971.061.24.15.45.256.629.015.016.015.016.015.031l.03.029c.585.886 1.649.976 1.649.976a2.65 2.65 0 0 1-1.169-1.125 3.203 3.203 0 0 1-.271-.646c-.285-1.08.135-1.725.375-2.145a2.741 2.741 0 0 1 2.609-1.23 2.721 2.721 0 0 1 2.399 3.03 2.723 2.723 0 0 1-1.409 2.085c.181.494-.015 1.08-.015 1.08.449.57.479.9.465 1.215-.585-.09-1.141.301-1.141.301s1.111-.256 1.756.314c.42.449.704.87.869 1.17.24.435 1.35.465 1.229 1.23-.135.779-.989.779-2.31-.09l.074-.151zm-4.824-4.61a.563.563 0 0 0-.795 0l-.465.468a.559.559 0 0 0 0 .796l.51.51c.222.225.577.21.795 0l.47-.466a.558.558 0 0 0 0-.794l-.515-.525v.011zm-2.205-.186a.363.363 0 0 0 0 .511.366.366 0 0 0 .51 0 .36.36 0 1 0-.51-.511zm1.269-.252a.359.359 0 0 0 0-.51.366.366 0 0 0-.51 0 .364.364 0 0 0 0 .51.359.359 0 0 0 .51 0zm5.385-1.304c.591-1.131-.247-1.791-.825-2.332-.924-.87-1.846-1.245-2.9-.029-1.052 1.199-.383 2.609.58 3.284.96.69 2.535.226 3.135-.915l.01-.008zm-1.595-.463c-.372-.445.322-1.252.757-.77.8.89-.387 1.216-.757.77z" key="k0" />
]

export const hex='#221E1F'
const Grav = ({ title, ...restProps }) => {
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
          ? [<title key="Grav-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Grav',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Grav.displayName = 'Grav'

Grav.defaultProps = { height: 24, width: 24}

export default Grav
