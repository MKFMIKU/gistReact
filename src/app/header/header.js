import React, {Component} from 'react';

import "./header.styl";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="content">
          <a href="/"><span><strong>Gist</strong>Noon</span></a>
          <div className="menu">
            <span>New gist</span>
            <div className="sign">Sign in</div>
            <div className="sign">Sign up</div>
          </div>
        </div>
      </div>
    );
  }
}
