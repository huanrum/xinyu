import React from 'react';
import { browserHistory } from 'react-router';

import './App.css';

export default class App extends React.Component {
  componentDidMount(){
    if(!localStorage['token']) {
      browserHistory.push('/login');
    }
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
  
}
