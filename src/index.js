import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'

import App from './App';
import Logion from './modules/Login';
import ChangePassword from './modules/ChangePassword';
import Main from './modules/Main';
import Home from './modules/Main/Home';
import List from './modules/Main/List';
import Detail from './modules/Main/Detail';

import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="login" component={Logion} />
            <Route path="changepassword" component={ChangePassword} />
            <Route path="main" component={Main}>
                <Route path="home" component={Home} />
                <Route path="list/:type" component={List} />
                <Route path="detail/:id" component={Detail} />
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
