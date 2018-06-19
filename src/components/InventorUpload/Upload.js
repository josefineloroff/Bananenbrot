import React, { Component } from 'react'
import axios from 'axios'

import './Inputformular.css'

export default class Upload extends Component {
  state = {
    selectedFile: null,
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData()
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios
      .post(
        'https://us-central-fb-cloud-function-demo.cloudfunctions.net/uploadFile',
        fd,
        {
          onUploadProgress: progressEvent => {
            console.log(
              'uploadProgress: ' +
                Math.round((progressEvent.loaded / progressEvent.total) * 100) +
                '%'
            )
          },
        }
      )
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <p>Image Upload</p>
        <input type="file" onChange={this.onChange} />
        <button
          className="button"
          type="submit"
          onClick={this.fileUploadHandler}
        >
          Upload
        </button>
      </form>
    )
  }
}
