import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
