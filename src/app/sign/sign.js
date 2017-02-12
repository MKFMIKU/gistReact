import React, {Component} from 'react';
import $ from 'jquery';

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
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePostId = this.handlePostId.bind(this);
  }
  render() {
    return (
      <div className="containerSign">
        <div className="main">
          <p className="logo">
            <strong>Gist</strong>noon
          </p>
          <p className="des">创建或者注册新的GistNoon账号</p>
          <div className="form">
            <input type="text" placeholder="账号ID" value={this.state.username} onChange={this.handleUsername}/>
            <input type="text" placeholder="密码" value={this.state.password} onChange={this.handlePassword}/>
            <a href="#" onClick={this.handlePostId}>Continue</a>
            <p>账号不存在，您需要注册新的账号嘛？</p>
            <input type="text" placeholder="确认密码" value={this.state.password} onChange={this.handlePassword}/>
            <a href="#">我同意本网站的一切协定</a>
          </div>
        </div>
      </div>
    );
  }
  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handlePostId() {
    $.ajax({
      url: "/user/login",
      method: "post",
      data: {
        username: this.state.username,
        password: this.state.password
      },
      success: r => {
        if (r.success === 1) {
          window.location.href = '/';
        } else if (r.error) {
          console.log(r.error);
        }
      }
    });
  }

}
