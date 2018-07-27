import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.759 24l.664-.144c.207-.044.412-.085.619-.126.318-.062.637-.123.955-.182.24-.046.48-.085.721-.129l.055-.015c.25-.044.498-.09.747-.12l1.214-.179V-.001h-.042c-.63.004-1.256.016-1.884.036-.689.018-1.394.06-2.084.105-.299.021-.6.046-.899.07H2.78v23.784L2.759 24zM8.911.015v22.942c.861-.1 1.72-.182 2.582-.246a61.326 61.326 0 0 1 6.373-.151c1.128.034 2.253.099 3.374.192V1.503a57.493 57.493 0 0 0-3.028-.607 61.884 61.884 0 0 0-5.947-.731A58.503 58.503 0 0 0 8.913.016h-.002zm10.763 14.797l-.046-.004-.561-.061a61.145 61.145 0 0 0-4.207-.291 65.346 65.346 0 0 0-4.223.016h-.044c-.045 0-.091 0-.135-.016a.593.593 0 0 1-.267-.149.581.581 0 0 1-.156-.495c.008-.061.029-.105.054-.166.027-.044.063-.104.104-.134a.557.557 0 0 1 .143-.104.89.89 0 0 1 .18-.061h.09c.195 0 .391-.016.57-.016a65.862 65.862 0 0 1 4.169.03 58.27 58.27 0 0 1 4.288.33l.151.015c.044.016.089.016.135.03a.66.66 0 0 1 .255.181c.044.044.074.104.105.164.029.061.044.12.044.18a.564.564 0 0 1-.164.45c-.046.046-.091.075-.135.105-.047.03-.105.044-.166.06-.03.016-.045.016-.089.016h-.047l-.048-.08zm.035-2.711c-.044 0-.044 0-.09-.006l-.555-.071a49.549 49.549 0 0 0-4.198-.359 56.304 56.304 0 0 0-4.214-.06l-.046-.016c-.045-.015-.09-.015-.135-.029a.57.57 0 0 1-.254-.166c-.03-.045-.076-.104-.09-.148a.591.591 0 0 1 .014-.525c.031-.061.061-.105.105-.15s.09-.09.15-.104c.061-.03.119-.06.18-.06l.09-.016.585-.015a62.984 62.984 0 0 1 4.153.09c1.439.075 2.865.21 4.289.39l.149.016.091.014a.517.517 0 0 1 .27.166c.12.119.18.284.165.449a.306.306 0 0 1-.045.165c-.029.06-.061.104-.09.15-.03.044-.074.075-.136.12-.044.029-.104.045-.164.061l-.091.014H19.8l-.091.09zm0-2.711c-.044 0-.044 0-.09-.006l-.555-.08a61.256 61.256 0 0 0-4.198-.428 60.24 60.24 0 0 0-4.214-.129h-.046l-.09-.016a.732.732 0 0 1-.164-.068.629.629 0 0 1-.285-.438c0-.061 0-.12.016-.18a.612.612 0 0 1 .059-.17.643.643 0 0 1 .121-.144.592.592 0 0 1 .42-.165h.569c1.439.009 2.879.064 4.304.172 1.395.105 2.774.26 4.153.457l.15.021c.046.007.061.007.09.019.06.02.12.046.165.08a.36.36 0 0 1 .135.123c.031.048.061.101.09.158a.588.588 0 0 1-.404.775c-.029.012-.046.012-.091.014l-.044.005h-.091zm0-2.712c-.044 0-.044 0-.09-.007l-.555-.09a49.325 49.325 0 0 0-4.198-.496 66.254 66.254 0 0 0-4.214-.209h-.046l-.105-.014a.634.634 0 0 1-.305-.195c-.036-.045-.068-.104-.094-.149a.901.901 0 0 1-.044-.181.625.625 0 0 1 .181-.494.59.59 0 0 1 .279-.15c.045-.015.09-.015.135-.015.189 0 .38.005.57.008 1.437.034 2.871.113 4.304.246 1.387.119 2.77.3 4.145.524l.135.016c.04 0 .052 0 .09.014.062.016.112.046.165.076.046.029.09.074.125.119a.632.632 0 0 1 .105.465.743.743 0 0 1-.061.166.516.516 0 0 1-.12.135.6.6 0 0 1-.271.149h-.135l.004.082zm-15.67-.509a.638.638 0 0 1-.271-.063.606.606 0 0 1-.329-.505c0-.057.015-.111.03-.165a.456.456 0 0 1 .09-.19.663.663 0 0 1 .164-.162.727.727 0 0 1 .241-.092l.48-.044a71.35 71.35 0 0 1 1.949-.144h.06a.543.543 0 0 1 .271.071.59.59 0 0 1 .314.519c0 .055-.015.109-.029.161a.473.473 0 0 1-.091.189.552.552 0 0 1-.165.165.674.674 0 0 1-.24.09c-.104.015-.209.015-.314.03-.136.015-.286.015-.436.031l-1.168.088-.285.031a.809.809 0 0 1-.196.015l-.075-.025zm15.655-2.201l-.091-.01-.554-.1a62.77 62.77 0 0 0-4.214-.564 64.085 64.085 0 0 0-4.214-.271h-.045l-.09-.018a.638.638 0 0 1-.165-.071.74.74 0 0 1-.135-.121c-.12-.138-.165-.33-.12-.506.016-.061.045-.12.074-.18.031-.061.076-.105.121-.15a.627.627 0 0 1 .285-.15c.045-.015.089-.015.135-.015l.584.015c1.395.061 2.774.15 4.154.301 1.439.148 2.864.359 4.288.6l.15.014c.046 0 .061 0 .09.016a.58.58 0 0 1 .165.074.605.605 0 0 1 .239.421c.016.06 0 .12-.015.181a.313.313 0 0 1-.059.164 1.03 1.03 0 0 1-.105.135.506.506 0 0 1-.286.135l-.086.014h-.046l-.06.086zM4.022 3.199a.588.588 0 0 1-.332-1.076.6.6 0 0 1 .26-.099c.158-.014.314-.014.473-.029.65-.045 1.301-.075 1.949-.105h.048c.091.016.181.03.256.075.179.105.3.315.3.524a.572.572 0 0 1-.03.166.863.863 0 0 1-.104.195.46.46 0 0 1-.182.15.506.506 0 0 1-.255.075c-.104.014-.21.014-.33.014l-.449.031c-.405.029-.795.045-1.186.074l-.3.016c-.075.015-.134.015-.194.015l.076-.026z" key="k0" />
]

export const hex='#8CA1AF'
const ReadtheDocs = ({ title, ...restProps }) => {
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
          ? [<title key="ReadtheDocs-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ReadtheDocs',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ReadtheDocs.displayName = 'ReadtheDocs'

ReadtheDocs.defaultProps = { height: 24, width: 24}

export default ReadtheDocs
