import React, { Component } from 'react'

import './BookmarkIcon.css'

import { Icon } from 'react-icons-kit'
import { bookmarkO } from 'react-icons-kit/fa/bookmarkO'

export default class BookmarkIcon extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className="divicon">
          <Icon
            onClick={this.props.onBookmark}
            size={'100%'}
            float={'right'}
            className="bookmarkicon"
            icon={bookmarkO}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )
    } else {
      return null
    }
  }
}
