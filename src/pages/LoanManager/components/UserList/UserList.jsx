import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Icon, Rating, Grid } from '@icedesign/base';
import IceLabel from '@icedesign/label';
import UserInfoCard from '../../components/UserInfoCard';
import UserCompany from '../../components/UserCompany';
import UserService from '../../components/UserService';

const { Row, Col } = Grid;

export default class UserList extends Component {
  static displayName = 'UserList';

  static propTypes = {};

  static defaultProps = {

  };

  constructor(props) {
    super(props);
    this.state = {
      range:[1,2,3]
    };
  }

  render() {
    let list = this.state.range.map((item, i)=>(
      <IceContainer>
          <Row className="demo-row" align="top">
            <Col span="5">
              <UserInfoCard />
            </Col>
            <Col span="8">
              <UserCompany />
            </Col>
            <Col span="8">
              <UserService />
            </Col>
          </Row>
        </IceContainer>
    ));
    return (
      <div className="user-info-card">
        {list}
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '20px 0',
    width: '300px',
    textAlign: 'left',
  },
  ice_container: {
    padding: '15px 10',
    width: '300px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  head: {
    display: 'flex',
  },
  avatar: {
    width: '115px',
    height: '140px',
    border: '1px solid #eee',
  },
  name: {
    padding: '7px 10px',
    margin: 0,
  },
  deptName: {
    padding: '0 10px',
    margin: '7px',
    fontSize: '13px',
  },
  doubleDeptName: {
    padding: '0 10px',
    margin: '7px',
    fontSize: '13px',
    display: 'flex',
    'justify-content': 'space-evenly',
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10px',
  },
  profileItem: {
    width: '50%',
    lineHeight: '26px',
  },
  itemIcon: {
    color: '#8a9099',
    marginRight: '5px',
  },
  triggerText: {
    color: '#108ee9',
    borderBottom: '1px dashed #108ee9',
    cursor: 'pointer',
  },
  overviewRatingWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  overviewRatingCount: {
    marginRight: 10,
  },

};
