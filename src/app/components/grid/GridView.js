import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Floater from 'react-floater'
import { Glyphicon } from 'react-bootstrap'


const topics = ['Parenthood', 'Marriage', 'Love', 'Friendship', 'Motherhood']
const categories = ['Favorites', 'Author', 'Series', 'Book', 'Character', 'Speech', 'Event']
const cards = [
  'Someone awesome once said...',
  'Isn\'t it great that tomorrow doesn\'t have any mistakes in it yet',
  '', '', '', '', '', '',
  'Kindred spirits blah blah blah',
  '', '', '', '', '', '',
]

class GridView extends Component {

  renderTopics () {
    return topics.map(t => <div key={t} className='topic'>{t}</div>)
  }

  renderCategories () {
    return categories.map(c => <div key={c} className='category'>{c}</div>)
  }

  renderCards () {
    return cards.map((c, idx) => {
      return <Floater key={idx}
          footer="footer@"
          offset={1}
          eventDelay={1}
          content={
            <div>
              I can be triggered by click or hover (on devices with a mouse)
            </div>
          }
          event="hover"
          placement="right"
          style={{cursor: 'normal'}}
        >
          <div className='card'>{c}</div>
        </Floater>
    })
  }

  renderAddButton () {
    return <div className='card addButton'><div className='circle'><Glyphicon glyph='plus'/></div></div>
  }

  render () {
    return <div className='gridWrapper'>
      <div className='topicsWrapper'>
        <div className='topicsText'>Topics</div>
        {this.renderTopics()}
      </div>
      <div className='rightSideWrapper'>
        <div className='categoriesWrapper'>{this.renderCategories()}</div>
        <div className='grid'>
          {this.renderAddButton()}
          {this.renderCards()}
        </div>
      </div>
    </div>
  }
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
)(GridView)