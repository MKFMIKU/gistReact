import React, {Component} from 'react';
import {Link} from 'react-router';

import "./header.styl";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="content">
          <a href="/"><span><strong>Gist</strong>Noon</span></a>
          <div className="menu">
            <span>New gist</span>
            <div className="sign"><Link to="/sign">Sign in</Link></div>
            <div className="sign"><Link to="/sign">Sign up</Link></div>
          </div>
        </div>
      </div>
    );
  }
}
