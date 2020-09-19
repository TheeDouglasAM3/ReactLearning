import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CustomHooks from './pages/CustomHooks'

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/custom-hooks" component={CustomHooks} /> 
      </Switch>    
    </BrowserRouter>
  )
}

export default routes