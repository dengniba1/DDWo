import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Icon, Rating, Grid, Button} from '@icedesign/base';
import IceLabel from '@icedesign/label';

const { Row, Col } = Grid;

export default class UserService extends Component {
  static displayName = 'UserService';

  static propTypes = {};

  static defaultProps = {
    serviceInfo:{
      serviceLevel:0,
      iconSize: 1,
      userPhoneNumber:'XXXXXXXXX',
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      serviceInfo:props.serviceInfo,
    };
  }
  handleProductDetail = (e) => {
    e.preventDefault();
    alert("了解产品详情");
  };

  handleApply = (e) => {
    e.preventDefault();
    alert("直接申请");
  };


  render() {
    return (
        <div className="user-info-card" style={styles.container}>
          
        <div style={styles.content}>
              <div style={styles.head}>
                <div style={styles.baseInfo}>
                  <ul style={styles.body}>
                    <li style={styles.liPadding}>
                      <div style={styles.overviewRatingWrapper}>
                        <span style={styles.overviewRatingCount}>认证星级</span>
                        <span style={styles.overviewRating}>
                          <Rating value={this.state.serviceInfo.serviceLevel} disabled />
                        </span>
                      </div>
                    </li>
                    <li style={styles.liPadding}>
                      <span style={styles.bigSize}>直线咨询：{this.state.serviceInfo.userPhoneNumber}</span>
                    </li>
                    <li style={styles.liPadding}>
                      <Button type="primary"
                        onClick={this.handleProductDetail}
                        style={styles.submitBtn}>了解产品详情</Button>
                      <Button type="primary"
                        onClick={this.handleApply}
                        style={styles.submitBtn}>直接申请</Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
    fontSize: '20px',
    alignItems: 'center',
  },
  overviewRatingCount: {
    marginRight: 10,
    fontSize: '20px',
  },
  submitBtn: {
    width: '140px',
    background: '#3080fe',
    borderRadius: '28px',
  },
  bigSize: {
    padding: '0 0px',
    margin: '0px',
    fontSize: '20px',
  },
  liPadding: {
    padding: '10px 0',
  },
};
