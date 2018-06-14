import React, { Component } from 'react'

export default class Bookmarklist extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.children}</li>
          <li>{this.props.children}</li>
          <li>{this.props.children}</li>
        </ul>
      </div>
    )
  }
}
