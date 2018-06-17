import React, { Component } from 'react'

import './Icons.css'

import { Icon } from 'react-icons-kit'
import { androidFavoriteOutline } from 'react-icons-kit/ionicons/androidFavoriteOutline'

export default class LikeIcon extends Component {
  render() {
    if (this.props.show) {
      return (
        <Icon
          size={'120%'}
          onClick={e => this.props.onLike(this.props.id)}
          float={'right'}
          className="likeicon"
          icon={androidFavoriteOutline}
          style={{ cursor: 'pointer' }}
          isLiked={this.props.isLiked}
        />
      )
    } else {
      return null
    }
  }
}
