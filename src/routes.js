import React from 'react'
import { Route, Router } from 'react-router-dom'
import LoginPage from '../src/components/Authentication/LoginPage'
import Home from '../src/components/Authentication/Home'
import Callback from '../src/components/Authentication/Callback'
import Auth from '../src/components/Authentication/Auth'
import history from '../src/components/Authentication/history'

const auth = new Auth()

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route
          path="/"
          render={props => <LoginPage auth={auth} {...props} />}
        />
        <Route path="/home" render={props => <Home auth={auth} {...props} />} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props)
            return <Callback {...props} />
          }}
        />
      </div>
    </Router>
  )
}
