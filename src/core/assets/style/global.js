import { injectGlobal } from 'styled-components'

export const GlobalStyle = props => injectGlobal`
  html, body {
    height: 100%;
    margin: 0;
  }

  #root {
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`