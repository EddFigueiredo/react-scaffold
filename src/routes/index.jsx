import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from 'containers/Main'

const Routes = () => {
  return (
    <Router>
      <Route exact patch='/' component={ Main } />
    </Router>
  )
}

export default Routes