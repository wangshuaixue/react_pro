import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './containers/App/App'
import './mock/mockServer'
import store from './redux/store'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/' component={App}/>
      </Switch>
    </HashRouter>
  </Provider>
),document.getElementById('root'))