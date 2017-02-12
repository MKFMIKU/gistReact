import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Home} from './app/home';
import {Sign} from './app/sign/sign';

import './index.styl';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={Home}/>

    <Route path="/sign" component={Sign}/>
  </Router>,
  document.getElementById('root')
);
