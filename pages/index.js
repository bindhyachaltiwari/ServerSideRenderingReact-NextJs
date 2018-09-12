import React from 'react'
import {connect} from 'react-redux'

import {loadData} from '../actions'
import Page from '../components/page'

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  componentDidMount () {
    
  }

  render () {
    return <Page title='SSR using Next js'/>
  }
}

export default connect()(Index)
