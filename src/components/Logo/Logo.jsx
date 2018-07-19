import React, { Component } from 'react';
import LogoImg from './img/Logo.png'


export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    return (
      <div
        className="logo"
        style={{
          height: 32,
          color: '#f40',
          textAlign: 'left',
          marginLeft: '46px',
        }}
      >
        <a href="/" style={{ display: 'block', position: 'relative' }}>
          <img src={LogoImg} width="114" alt="logo" />
        </a>
      </div>
    );
  }
}
