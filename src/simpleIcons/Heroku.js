import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.61 0H3.39a2.15 2.15 0 0 0-2.16 2.16v19.681A2.15 2.15 0 0 0 3.39 24h17.22a2.15 2.15 0 0 0 2.159-2.159V2.16A2.149 2.149 0 0 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39a.948.948 0 0 1-.96-.96V2.16c0-.54.42-.961.96-.961h17.22a.95.95 0 0 1 .96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z" key="k0" />
]

export const hex='#430098'
const Heroku = ({ title, ...restProps }) => {
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
          ? [<title key="Heroku-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Heroku',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Heroku.displayName = 'Heroku'

Heroku.defaultProps = { height: 24, width: 24}

export default Heroku
