import React, { Component } from 'react';
import LoanOfficers from './components/LoanOfficers';
import Advertising from './components/Advertising';
import OfficerTable from '../LoanManager/components/OfficerTable';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Advertising />
        <OfficerTable />
      </div>
    );
  }
}
