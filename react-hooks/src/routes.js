import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CustomHooks from './pages/CustomHooks'
import HookUseReducer from './pages/HookUseReducer'

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/custom-hooks" component={CustomHooks} /> 
        <Route path="/hook-use-reducer" component={HookUseReducer} /> 
      </Switch>    
    </BrowserRouter>
  )
}

export default routes