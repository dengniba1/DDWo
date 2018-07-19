import React, { Component } from 'react';
import Register from './components/Register';

export default class Regist extends Component {
  static displayName = 'Regist';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="regist-page">
        <Register />
      </div>
    );
  }
}
