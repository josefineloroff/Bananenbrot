import React from 'react'
import DocumentTitle from 'react-document-title'
// import { LoginForm } from 'express-stormpath'

export default class LoginPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Login</h3>
              <hr />
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
