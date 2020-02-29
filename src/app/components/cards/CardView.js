import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Floater from 'react-floater'

class CardView extends Component {

  render () {
    if (!this.props.ui.openCard) return null

    return <Floater
      open={true}
      showCloseButton
      hideArrow
      placement="center"
      target=".grid"
      content={
        <div>
          "GREAT quote by Anne of Green Gables"
        </div>
      }
    />
  }
}


function mapStateToProps (state) {
  return {
    ui: state.ui,
    quotes: state.entities.quotes
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardView)