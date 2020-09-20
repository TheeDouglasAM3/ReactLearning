import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CustomHooks from './pages/CustomHooks'
import HookUseReducer from './pages/HookUseReducer'
import HookUseReducer2 from './pages/HookUseReducer2'

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/custom-hooks" component={CustomHooks} /> 
        <Route path="/hook-use-reducer" component={HookUseReducer} /> 
        <Route path="/hook-use-reducer2" component={HookUseReducer2} /> 
      </Switch>    
    </BrowserRouter>
  )
}

export default routes