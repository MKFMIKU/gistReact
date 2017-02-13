import React, {Component} from 'react';
import $ from 'jquery';

import "./sign.styl";

export class Sign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      doublePassword: "",
      confirmPassword: false,
      signUp: false,
      confirm: false
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleDoublePassword = this.handleDoublePassword.bind(this);
    this.handlePostId = this.handlePostId.bind(this);
    this.handleNewId = this.handleNewId.bind(this);
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
            <input type="password" placeholder="密码" value={this.state.password} onChange={this.handlePassword}/>
            <a href="#" onClick={this.handlePostId} className={this.state.signUp ? 'hidden' : ''}>Continue</a>
            <p className={this.state.signUp ? '' : 'hidden'}>账号不存在，您需要注册新的账号嘛？</p>
            <input type="password" placeholder="确认密码" value={this.state.doublePassword} onChange={this.handleDoublePassword} className={this.state.signUp ? '' : 'hidden'}/>
            <a href="#" onClick={this.handleNewId} className={this.state.signUp ? '' : 'hidden'}>我同意本网站的一切协定</a>
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
  handleDoublePassword(event) {
    this.setState({doublePassword: event.target.value});
    this.setState({confirmPassword: event.target.value === this.state.password});
  }
  handlePostId() {
    $.ajax({
      url: "http://localhost:8080/user/signIn",
      method: "post",
      data: {
        username: this.state.username,
        password: this.state.password
      },
      success: r => {
        if (r.success === 1) {
          localStorage.username = r.username;
          window.location.href = '/';
        } else if (r.error) {
          if (r.error === "notExist") {
            this.setState({signUp: true});
          }
        }
      }
    });
  }
  handleNewId() {
    if (!this.state.confirmPassword) {
      console.log("Password not same");
      return;
    }
    $.ajax({
      url: "http://localhost:8080/user/signUp",
      method: "post",
      data: {
        username: this.state.username,
        password: this.state.password
      },
      success: r => {
        if (r.success === 1) {
          localStorage.username = r.username;
          window.location.href = '/';
        } else if (r.error) {
          if (r.error === "Existed") {
            console.log("Existed");
          }
        }
      }
    });
  }
}
