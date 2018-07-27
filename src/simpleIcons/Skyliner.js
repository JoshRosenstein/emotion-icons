import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7.961 17.563a.435.435 0 0 0-.461.203 2.48 2.48 0 0 1-2.684 1.395 2.46 2.46 0 0 1 1.397-2.681.435.435 0 0 0-.165-.802 4.539 4.539 0 0 0-4.252 1.469A7.56 7.56 0 0 0 .5 23.113a.435.435 0 0 0 .359.359c.498.081 1.002.12 1.508.12a6.501 6.501 0 0 0 4.931-1.873 4.6 4.6 0 0 0 1.007-3.808.433.433 0 0 0-.345-.375l.001.027zM23.778.203c-.171-.169-.522-.089-.522-.089a17.032 17.032 0 0 0-1.917-.113 15.563 15.563 0 0 0-11.106 4.497c-.36.362-.7.742-1.02 1.139a5.768 5.768 0 0 0-4.455-.165c-2.287.984-3.623 3.787-4.729 6.671a.434.434 0 0 0 .674.498 5.708 5.708 0 0 1 5.44-.749L5.6 13.856a.432.432 0 0 0 .187.479 19.184 19.184 0 0 1 3.863 3.857.433.433 0 0 0 .482.188l1.963-.539a5.62 5.62 0 0 1-.749 5.456.436.436 0 0 0 .499.674c2.883-1.109 5.686-2.443 6.665-4.722a5.767 5.767 0 0 0-.161-4.451c.395-.326.772-.672 1.133-1.036 3.381-3.44 5-8.241 4.392-13.026 0 0 .076-.352-.096-.524V.203zM21.339.87c.563 0 1.127.029 1.688.088.079.771.103 1.548.07 2.322a2.743 2.743 0 0 1-1.623-.771 2.686 2.686 0 0 1-.777-1.623c.209-.011.422-.018.636-.018l.006.002zM10.846 5.112A14.579 14.579 0 0 1 19.828.94c.07.677.33 1.318.749 1.855l-2.698 2.697a3.522 3.522 0 0 0-4.946 4.946l-3.147 3.147a19.348 19.348 0 0 0-2.626-2.131 14.452 14.452 0 0 1 3.686-6.342zm7.524 3.159a2.657 2.657 0 0 1-2.657 2.66 2.659 2.659 0 0 1-.003-5.317h.003a2.658 2.658 0 0 1 2.657 2.657zM1.314 11.269c.941-2.254 2.09-4.268 3.779-4.994a4.792 4.792 0 0 1 3.559.09 15.357 15.357 0 0 0-2.265 4.668 6.079 6.079 0 0 0-5.074.233l.001.003zm8.891 6.19a21.538 21.538 0 0 0-3.683-3.677l.395-1.434a18.64 18.64 0 0 1 4.722 4.718l-1.434.393zm7.508 1.425c-.727 1.698-2.737 2.848-4.989 3.789a6.086 6.086 0 0 0 .225-5.074 15.437 15.437 0 0 0 4.679-2.278 4.8 4.8 0 0 1 .083 3.566l.002-.003zm-5.186-2.06a19.218 19.218 0 0 0-2.123-2.628l3.147-3.148a3.52 3.52 0 0 0 4.945-4.946l2.698-2.698a3.645 3.645 0 0 0 1.85.75 14.577 14.577 0 0 1-4.166 8.979 14.446 14.446 0 0 1-6.343 3.684l-.008.007z" key="k0" />
]

export const hex='#2FCEA0'
const Skyliner = ({ title, ...restProps }) => {
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
          ? [<title key="Skyliner-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Skyliner',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Skyliner.displayName = 'Skyliner'

Skyliner.defaultProps = { height: 24, width: 24}

export default Skyliner
