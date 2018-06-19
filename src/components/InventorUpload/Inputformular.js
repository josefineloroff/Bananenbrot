import React, { PureComponent } from 'react'
import Upload from './Upload'
import MyNavbar from '../Navbar/MyNavbar'
import { saveFullState } from '../../service'
import './Inputformular.css'

export default class Inputformular extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { value: this.props.category }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState(
      {
        ...this.state,
      },
      () => {
        saveFullState(this.state)
      }
    )
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Choose your category:</p>{' '}
              <select value={this.state.value} onChange={this.handleChange}>
                <option value={this.props.category} />
                <option value={this.props.category}>
                  {this.props.category}
                </option>
                <option value={this.props.category}>
                  {this.props.category}
                </option>
                <option value={this.props.category}>
                  {this.props.category}
                </option>
              </select>
            </label>{' '}
            <br />
            <input type="submit" value="Submit" />
          </form>
          <br />
          <p>Add the name of your product</p>
          <input type="text" addName={this.onChange} />
          <br />
          <br />
          <p>Add a description text for your product</p>
          <input type="text" addDescriptionText={this.onChange} />
          <br />
          <br />
          <Upload />
        </div>
      </div>
    )
  }
}
