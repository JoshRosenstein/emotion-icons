import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M24 11.986h-.027l-4.318-4.318 4.303-4.414V1.461l-.649-.648h-8.198l-.66.605v1.045L12.015.027V0L12 .014 11.986 0v.027l-1.29 1.291-.538-.539H2.035l-.638.692v1.885l.616.616h.72v5.31L.027 11.987H0L.014 12 0 12.014h.027l2.706 2.706v6.467l.907.523h2.322l1.857-1.904 4.166 4.166V24l.015-.014.014.014v-.028l2.51-2.509h.485c.111 0 .211-.07.25-.179l.146-.426a.262.262 0 0 0-.037-.239l1.462-1.462-.612 1.962a.265.265 0 0 0 .255.344h1.824a.266.266 0 0 0 .243-.163l.165-.394a.27.27 0 0 0-.247-.365h-.075l.84-2.644h1.232l-1.016 3.221a.266.266 0 0 0 .255.344h2.002c.11 0 .207-.066.248-.17l.164-.428a.266.266 0 0 0-.249-.358h-.145l1.131-3.673a.263.263 0 0 0-.039-.24l-.375-.504-.003-.005a.267.267 0 0 0-.209-.102h-1.436a.266.266 0 0 0-.19.081l-.4.439h-.624l-.042-.046 4.445-4.445H24L23.986 12l.014-.014zM9.838 21.139l1.579-4.509h-.501l.297-.304h1.659l-1.563 4.555h.623l-.079.258H9.838zm3.695-7.516l.15.151-.269.922-.225.226h-.969l-.181-.181.311-.871.288-.247h.895zM5.59 20.829H3.877l-.262-.15V3.091H2.379l-.1-.1V1.815l.143-.154h7.371l.213.214v1.108l-.142.173H8.785v8.688l8.807-8.688h-2.086l-.175-.188V1.805l.121-.111h7.49l.132.133v1.07L12.979 13.25h-.373c-.015-.001-.028 0-.042.001l-.02.003a.259.259 0 0 0-.119.06l-.343.295-.004.003a.273.273 0 0 0-.073.111l-.296.83-6.119 6.276zm14.768-3.952l.474-.519h1.334l.309.415-1.265 4.107h.493l-.08.209H19.84l1.124-3.564h-2.015l-1.077 3.391h.424l-.073.174h-1.605l1.107-3.548h-2.096l-1.062 3.339h.436l-.072.209H13.27l1.514-4.46h-.586l.091-.271h1.65l.519.537h.906l.491-.554h1.061l.489.535h.953z" key="k0" />
]

export const hex='#019733'
const Vim = ({ title, ...restProps }) => {
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
          ? [<title key="Vim-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Vim',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Vim.displayName = 'Vim'

Vim.defaultProps = { height: 24, width: 24}

export default Vim
