import React, {Component} from 'react';

import './codePen.styl';

import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

import codeMirror from 'codemirror';
import 'codemirror/addon/mode/loadmode';
import 'codemirror/mode/meta';
import 'codemirror/mode/javascript/javascript';

export class CodePen extends Component {
  render() {
    return (
      <div className="codePen">
        <div className="describe">
          <input type="text" placeholder="Gist description" value={this.state.description} onChange={this.handleDescription}/>
        </div>

        <div className="mainBoard">
          <div className="fileHeader">
            <div className="fileName">
              <input type="text" placeholder="Filename with extension" value={this.state.fileName} onChange={this.handleFileName}/>
            </div>
            <span>{this.state.mode}</span>
          </div>
          <div className="fileContent">
            <CodeMirror
              name="CodeMirror"
              onChange={this.handleCode}
              value={this.state.code}
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
      fileName: "",
      code: "",
      description: "",
      mode: 'text/javascript',
      readOnly: false
    };
    this.options = {
      lineNumbers: true,
      theme: 'material'
    };
    this.handleCode = this.handleCode.bind(this);
    this.handleFileName = this.handleFileName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }
  handleCode(newCode) {
    this.setState({code: newCode});
    this.props.changeCodeObj({
      fileName: this.state.fileName,
      code: this.state.code,
      description: this.state.description,
      mode: this.state.mode
    });
  }
  handleDescription(event) {
    this.setState({description: event.target.value});
    this.props.changeCodeObj({
      fileName: this.state.fileName,
      code: this.state.code,
      description: this.state.description,
      mode: this.state.mode
    });
  }
  handleFileName(event) {
    this.setState({fileName: event.target.value});
    let m;
    let mode;
    let spec;
    if (/.+\.([^.]+)$/.exec(event.target.value)) {
      m = /.+\.([^.]+)$/.exec(event.target.value);
      const info = codeMirror.findModeByExtension(m[1]);
      if (info) {
        mode = info.mode;
        spec = info.mime;
      }
    } else if (/\//.test(event.target.value)) {
      const info = codeMirror.findModeByMIME(event.target.value);
      if (info) {
        mode = info.mode;
        spec = event.target.value;
      }
    }
    if (mode) {
      this.setState({mode: spec});
    }
    this.props.changeCodeObj({
      fileName: this.state.fileName,
      code: this.state.code,
      description: this.state.description,
      mode: this.state.mode
    });
  }
}

CodePen.propTypes = {
  changeCodeObj: React.PropTypes.func
};
