import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Dashboard from './views/dashboard'
import Login from './views/login'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={Login} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
