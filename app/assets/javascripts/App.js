import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Users from './Users/Users'
import User from './User/User'
import Registration from './auth/Registration'



const App = () => {
  return (
  <Switch>
    <Route exact path="/" component={Users} />
  </Switch>
  )
}

export default App