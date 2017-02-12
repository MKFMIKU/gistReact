import React, {Component} from 'react';

import "./sign.styl";

export class Sign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      signUp: "",
      signIn: ""
    };
  }
  render() {
    return (
      <div className="container">
        <div className="main">
          <p className="logo">
            <strong>Gist</strong>noon
          </p>
        </div>
      </div>
    );
  }
}
