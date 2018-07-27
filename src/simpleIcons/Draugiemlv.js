import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.154 15.096c.048.346.14.562.278.693.144.13.34.18.596.21.304-.03.51-.1.65-.3.083-.13.14-.33.166-.61l.098-1.16v-.02l-.02-.18-.03-.17-.03-.175-.032-.165-.03-.174-.03-.165-.03-.164-.03-.17-.028-.16-.03-.15-.03-.15v-.138l-.03-.136-.03-.133-.015-.126-.03-.116-.03-.1-.03-.17L9.41 11l-.045-.18-.045-.18-.013-.197-.052-.203-.045-.21-.053-.21-.03-.21-.043-.215-.03-.213-.017-.242-.015-.21-.01-.228V8.1l.02-.21.035-.21.046-.21.06-.2.09-.194.106-.186.04-.074a3.14 3.14 0 0 0-.99-.06c-2.33.2-1.38 2.836-.98 4.283.28 1 .6 3.34.72 4.06l-.02-.02zm.28-8.664c.09.03.178.045.283.045.48 0 .79-.255.96-.645a2.35 2.35 0 0 0 .153-.945 2.635 2.635 0 0 0-.164-.81c-.195-.467-.54-.782-1.066-.782-.074 0-.135 0-.18.016-.675.11-.976.78-.945 1.61.015.78.314 1.43.93 1.58l.028-.06zm1.244 3.843c.084.36.168.69.237.975.285 1.156.562 3.843.665 4.668.098.826.39.99.97 1.05.576-.044.867-.224.965-1.034.097-.81.38-3.498.657-4.653.068-.28.16-.61.24-.96.258-1.05.466-2.29 0-3.1-.296-.51-.865-.84-1.86-.84-1.007 0-1.583.33-1.872.86-.465.81-.256 2.06 0 3.11l-.002-.06zm1.858-4.28h.015c.9 0 1.33-.823 1.33-1.83s-.42-1.846-1.32-1.846h-.01c-.91 0-1.33.84-1.33 1.86s.42 1.84 1.337 1.84v-.03zm2.827.752c-.27 0-.51.03-.705.075l.045.075.105.194.075.2.06.21.045.21.03.21.015.23v.44l-.015.23v.167l-.03.217-.03.213-.044.213-.046.21-.044.21-.045.206-.05.2-.05.197-.06.195-.05.18-.03.18-.05.168-.018.09-.03.12-.03.137-.026.134-.015.132-.03.12v.03l-.03.15-.03.15-.02.163-.03.168-.02.165-.03.165-.02.18-.013.165-.014.18-.014.18-.017.18V14c.045.496.075.93.09 1.17.03.287.075.48.166.616.14.2.35.27.66.3.26-.03.45-.07.6-.22.15-.12.23-.343.29-.69.12-.703.44-3.05.71-4.053.4-1.45 1.35-4.083-.98-4.284-.105-.014-.195-.014-.3-.014l.012-.05zm.016-.27c.09 0 .18-.014.27-.03.6-.15.9-.794.93-1.56.03-.81-.27-1.5-.95-1.592-.06-.016-.12-.016-.18-.016-.54 0-.89.33-1.07.79-.09.24-.15.52-.15.82-.02.36.03.69.15.96.16.4.48.66.96.66l.03-.05zm2.79 1.2c4.29.062 6.8 2.702 3.96 6.305-1.32 1.667-3.53 3.317-6.49 4.368l-.42.15c-.29.09-.56.18-.83.256-.65.18-1.26.345-1.86.465-.65.14-1.28.23-1.88.3-.44.05-.86.08-1.25.08-2.747.08-4.818-.67-5.49-2.28-.81-1.92.823-4.59 4.11-6.63-2.43.97-6.84 3.29-7.036 6.57v.42c.016.35.074.68.195 1.04.707 2.22 4.01 3.27 8.21 2.9.407-.03.827-.073 1.25-.14a19.3 19.3 0 0 0 1.86-.36c.605-.13 1.23-.31 1.865-.51l.42-.13c.285-.09.557-.18.826-.285 3.646-1.32 6.35-3.075 7.926-5.102.9-1.152 1.365-2.232 1.455-3.18v-.733c-.26-2.413-3.06-3.824-6.877-3.435l.044-.045z" key="k0" />
]

export const hex='#FF6600'
const Draugiemlv = ({ title, ...restProps }) => {
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
          ? [<title key="Draugiemlv-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Draugiemlv',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Draugiemlv.displayName = 'Draugiemlv'

Draugiemlv.defaultProps = { height: 24, width: 24}

export default Draugiemlv
