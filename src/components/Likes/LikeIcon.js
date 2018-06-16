import React, { Component } from 'react'

import '../Bookmarks/BookmarkIcon.css'

import { Icon } from 'react-icons-kit'
import { heart } from 'react-icons-kit/icomoon/heart'

export default class LikeIcon extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className="divicon">
          <Icon
            onClick={this.props.onLike}
            size={'100%'}
            float={'right'}
            className="likeicon"
            icon={heart}
            style={{ cursor: 'pointer' }}
            isLiked={this.props.isLiked}
          />
        </div>
      )
    } else {
      return null
    }
  }
}
