import React, {Component} from 'react';
import {Link} from 'react-router';

import "./header.styl";

export class Header extends Component {
  render() {
    const username = this.props.username;
    let menu;
    if (username) {
      menu = (
        <div className="username">
          <Link to="/user">{username}</Link>
        </div>
      );
    } else {
      menu = (
        <div style={{display: "inline-block"}}>
          <div className="sign"><Link to="/sign">Sign in</Link></div>
          <div className="sign"><Link to="/sign">Sign up</Link></div>
        </div>
      );
    }
    return (
      <div className="header">
        <div className="content">
          <a href="/"><span><strong>Gist</strong>Noon</span></a>
          <div className="menu">
            <span>New gist</span>
            {menu}
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  username: React.PropTypes.string
};
