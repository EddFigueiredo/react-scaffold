import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'core/constants/default.theme'
import { GlobalStyle } from 'core/assets/style/global'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from 'containers/Main'

const Routes = () => {
  GlobalStyle(Theme)

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Route exact patch='/' component={ Main } />
      </Router>
    </ThemeProvider>
  )
}

export default Routes