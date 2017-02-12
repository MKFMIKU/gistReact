import React, {Component} from 'react';
import $ from 'jquery';

import {Header} from './header/header';
import {CodePen} from './codePen/codePen';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CodeObj: {
        fileName: "",
        code: "",
        mode: "",
        description: ""
      }
    };
    this.changeCodeObj = this.changeCodeObj.bind(this);
    this.handleCreateNew = this.handleCreateNew.bind(this);
  }
  changeCodeObj(newCodeObj) {
    this.setState({CodeObj: newCodeObj});
  }
  handleCreateNew() {
    $.ajax({
      url: "/add",
      method: "post",
      data: this.state.CodeObj,
      success: r => {
        if (r.success === 1) {
          console.log("Success");
        } else {
          console.log("Service Error");
        }
      }
    });
  }
  render() {
    return (
      <div className="container">
        <Header name="Header"/>

        <CodePen name="CodePen" changeCodeObj={this.changeCodeObj}/>

        <div className="control">
          <button className="submit" onClick={this.handleCreateNew}>Create</button>
        </div>

      </div>
    );
  }
}
