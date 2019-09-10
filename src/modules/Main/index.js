import React from 'react';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {
    constructor(props){
        super(props);
    }
    changepassword(){
        browserHistory.push('/changepassword')
    }
  render() {
    return (
      <div>
        <div><a onClick={() => browserHistory.push('/changepassword')}>changepassword</a></div>
        <ul>
            {['home','list/all','detail/0001'].map(r => <li><a onClick={() => browserHistory.push(`/main/${r}`)} >{r}</a></li>)}
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
  
}
