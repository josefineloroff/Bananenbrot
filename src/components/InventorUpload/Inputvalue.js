import React, { PureComponent } from 'react'
import MyNavbar from '../Navbar/MyNavbar'
import { saveFullState } from '../../service'
import { Button, Form, Label, Input } from 'reactstrap'
import { axios } from 'axios'

import './Inputformular.css'

export default class Inputvalue extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      category: '',
      name: '',
      imageUrl: '',
      descriptionText: '',
      key: 'id',
      file: null,
    }
  }

  onChange = event => {
    console.log(event.target.value)
    const input = event.target
    const file = input.files && input.files.length && event.target.files[0]
    this.setState({
      [input.name]: input.value,
      file: file,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState(
      {
        ...this.state,
      },
      () => {
        const formData = new FormData()
        const dataObj = {
          category: this.state.category,
          name: this.state.name,
          imageUrl: this.state.imageUrl,
          file: this.state.file,
          descriptionText: this.state.descriptionText,
          showBookmarkIcon: true,
          showLikeIcon: true,
          showTrashIcon: true,
          likes: 0,
          trashes: 0,
          isLiked: 0,
          isBookmarked: 0,
          isTrashed: 0,
          key: this.state.name,
        }
        Object.keys(dataObj).forEach(key => {
          const value = dataObj[key]
          formData.append(key, value)
        })

        saveFullState(this.state)
        fetch('/product', {
          method: 'POST',
          body: formData,
        })
      }
    )
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <br />
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
                {['Nerds', 'Geeks', 'Retros'].map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
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
            <br />
            <br />
            <p>Add a description text for your product</p>
            <Input
              type="text"
              value={this.state.descriptionText}
              name="descriptionText"
              onChange={this.onChange}
            />
            <br />
            <br />
            <p>Image Upload</p>
            <Input
              type="file"
              value={this.state.imageUrl}
              name="imageUrl"
              onChange={this.onChange}
              className="file-upload"
              data-cloudinary-field="image_id"
              data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
            />
            <br />
            <br />
            <Button
              type="submit"
              onClick={this.handleSubmit}
              className="button"
            >
              Submit
            </Button>
          </Form>

          <br />
        </div>
      </div>
    )
  }
}
