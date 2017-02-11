import React, {Component} from 'react';

import {Header} from './header/header';
import {CodePen} from './codePen/codePen';

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Header"/>

        <CodePen name="CodePen"/>
      </div>
    );
  }
}
