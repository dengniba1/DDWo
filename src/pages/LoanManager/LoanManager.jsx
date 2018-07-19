import React, { Component } from 'react';
import OfficerTable from './components/OfficerTable';

export default class LoanManager extends Component {
  static displayName = 'LoanManager';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="loan-manager-page">
        <OfficerTable />
      </div>
    );
  }
}
