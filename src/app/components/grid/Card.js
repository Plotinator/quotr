import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Floater from 'react-floater'
import { Glyphicon } from 'react-bootstrap'
import * as UIActions from 'actions/ui'

class Card extends Component {

  openCard = (id) => {

  }

  renderCard () {
    const { idx, card } = this.props
    return <div className='card' onDoubleClick={() => this.openCard(idx)}>
      <div className='card-header'>
        <Glyphicon glyph="star-empty"/>
      </div>
      <div className='quote-blurb'>
        <p>&ldquo;{card}&rdquo;</p>
      </div>
    </div>
  }

  render () {
    if (this.props.ui.openCard) {
      return this.renderCard()
    } else {
      return <Floater
        footer="footer@"
        offset={1}
        eventDelay={1}
        content={
          <div>
            {this.props.card}
          </div>
        }
        event="hover"
        placement="right"
        style={{cursor: 'normal'}}
      >
        {this.renderCard()}
      </Floater>
    }
  }

  static propTypes = {
    card: PropTypes.string,
    idx: PropTypes.number
  }
}


function mapStateToProps (state, ownProps) {
  console.log('ownProps', ownProps)
  return {
    ui: state.ui
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(UIActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)