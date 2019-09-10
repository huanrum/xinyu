import React from 'react';
import { browserHistory } from 'react-router';

import { changepassword } from './../services';

export default class ChangePassword extends React.Component {
    constructor(props){
        super(props);
    }
  changepassword(){
    changepassword().then(() => browserHistory.push('/login'));
  }
  render() {
    return (
      <div onClick={() => this.changepassword()}>
        changepassword
      </div>
    );
  }
  
}
