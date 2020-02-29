import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GridView from 'components/grid/GridView'
import CardView from 'components/cards/CardView'

class App extends Component {
  render () {
    return <>
      <GridView />
      <CardView />
    </>
  }
}

App.propTypes = {
  file: PropTypes.object.isRequired,
}

function mapStateToProps (state) {
  return {
    file: state.file
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
