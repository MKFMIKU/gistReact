import React, {Component} from 'react';
import $ from 'jquery';
import CodeMirror from 'react-codemirror';

import {Button} from 'semantic-ui-react';

import "./code.styl";

import {Header} from "../header/header";

export class Code extends Component {
  render() {
    return (
      <div className="container">
        <Header username={''} name="Header"/>
        <div className="codeObj">
          <div className="description">
            <p>{this.state.CodeObj.description}</p>
            <Button label={{content: this.state.CodeObj.like}} icon="heart" content="Like" labelPosition="left" className="like" onClick={this.handleCodeLike}/>
          </div>

          <div className="mainBoard">
            <div className="fileHeader">
              <div className="fileName">
                <span>{this.state.CodeObj.fileName}</span>
              </div>
              <span>{this.state.CodeObj.mode}</span>
            </div>
          </div>
          <div className="fileContent">
            <CodeMirror
              name="CodeMirror"
              value={this.state.CodeObj.code}
              options={this.options}
              />
          </div>
        </div>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      CodeObj: {
        fileName: "",
        code: "",
        mode: "",
        description: "",
        like: ""
      }
    };
    this.options = {
      lineNumbers: true,
      readOnly: true,
      mode: this.state.CodeObj.mode,
      theme: 'material'
    };
    this.handleCodeLike = this.handleCodeLike.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount");
    $.get({
      url: `http://gist.kfnoon.com/code/${this.props.params.uid}`,
      success: r => {
        if (r.success === 1) {
          console.log("Success");
          this.setState({CodeObj: r.codeObj});
        } else {
          console.log("Service Error");
        }
      }
    });
  }
  handleCodeLike() {
  }
}

Code.propTypes = {
  params: React.PropTypes.object
};
