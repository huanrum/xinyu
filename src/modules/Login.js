import React from 'react';
import { browserHistory } from 'react-router';

import { login } from './../services';

export default class Login extends React.Component {
    constructor(props){
        super(props);
    }
  login(){
    login().then(() => browserHistory.push('/main/home'));
  }
  render() {
    return (
      <div onClick={() => this.login()}>
        login
      </div>
    );
  }
  
}
