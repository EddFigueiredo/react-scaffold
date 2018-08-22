import React, { PureComponent } from 'react'
import * as Blueprint from './Blueprint'

class Main extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <Blueprint.Grid>
        <Blueprint.Header />
        <Blueprint.Nav />
        <Blueprint.Content>
          <div>{children}</div>
        </Blueprint.Content>
      </Blueprint.Grid>
    )
  }
}

export default Main

