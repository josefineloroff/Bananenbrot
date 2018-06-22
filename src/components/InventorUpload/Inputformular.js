import React, { PureComponent } from 'react'
import MyNavbar from '../Navbar/MyNavbar'
import { saveFullState } from '../../service'
import { CustomInput, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Upload from './Upload'
import MyNavbar from '../Navbar/MyNavbar'

import './Inputformular.css'

export default class Inputformular extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      category: '',
      name: '',
      image: '',
      descriptionText: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange = event => {
    console.log('')
    const input = event.target
    this.setState({ [input.name]: input.value })
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
        fetch('/product', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            category: this.state.category,
            name: this.state.name,
            image: this.state.image,
            descriptionText: this.state.descriptionText,
            showBookmarkIcon: true,
            showLikeIcon: true,
            showTrashIcon: true,
            likes: 0,
            trashes: 0,
            isLiked: 0,
            isBookmarked: 0,
            isTrashed: 0,
          }),
        })
      }
    )

  }

  render() {
    return (
      <div>
        <MyNavbar />
        <div className="form">

          <Form onSubmit={this.handleSubmit}>
            <Label>
              <p>Choose your category:</p>{' '}
              <Input
                type="select"
                name="category"
                value={this.state.category}
                onChange={this.onChange}
              >
                {['Mode', 'Just for my Geeks'].map(cat => (
                  <option value={cat}>{cat}</option>
                ))}
              </Input>
            </Label>{' '}
            <br />
            <br />
            <p>Add the name of your product</p>
            <Input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.onChange}
            />
            <Input
              type="text"
              value={this.state.descriptionText}
              name="descriptionText"
              onChange={this.onChange}
            />
            <Input
              type="file"
              value={this.state.image}
              name="image"
              onChange={this.onChange}
            />
            <br />
            <br />
            <p>Add a description text for your product</p>
            <Input type="text" onChange={this.onChange} />
            <br />
            <br />
            <Button>Submit</Button>
          </Form>
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
