import React, { Component } from 'react';
import UserInfoCard from './components/UserInfoCard';
import OperationTable from './components/OperationTable';
import { Grid } from "@icedesign/base";

const { Row, Col } = Grid;

export default class UserPage extends Component {
  static displayName = 'UserPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-page-page">
        <Row className="demo-row" align="top">
          <Col span="6">
            <UserInfoCard />
          </Col>
          <Col span="18">
          <OperationTable />
          </Col>
        </Row>
      </div>
    );
  }
}
