import React, {Component} from 'react';

import './codePen.styl';
import 'codemirror/lib/codemirror.css';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

export class CodePen extends Component {
  render() {
    return (
      <div className="codePen">
        <div className="describe">
          <input type="text" placeholder="Gist description"/>

          <div className="mainBoard">
            <div className="fileHeader">
              <div className="fileName">
                <input type="text" placeholder="Filename with extension" value={this.state.fileName} onChange={this.handleFileName}/>
              </div>
            </div>
            <div className="fileContent">
              <CodeMirror name="CodeMirror" onChange={this.handleCode} value={this.state.code} options={this.options}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      code: "",
      readOnly: false,
      mode: 'javascript'
    };
    this.options = {
      lineNumbers: true,
      theme: 'material'
    };
    this.handleCode = this.handleCode.bind(this);
    this.handleFileName = this.handleFileName.bind(this);
  }
  handleCode(newCode) {
    this.setState({code: newCode});
  }
  handleFileName(event) {
    this.setState({fileName: event.target.value});
  }
}
