import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Icon } from '@icedesign/base';
import { Rating } from '@icedesign/base';
import IceLabel from '@icedesign/label';

export default class UserInfoCard extends Component {
  static displayName = 'UserInfoCard';

  static propTypes = {};

  static defaultProps = {
    userInfo:{
      name:'XXX',
      photo:'https://img.alicdn.com/tfs/TB1nf.WjyqAXuNjy1XdXXaYcVXa-245-245.gif',
      realName:'已实名',
      workYears:0,
      goodAt:'抵押信贷',
      powerLevel:'强',
      productCount:0,
      moneyAcount:'0',
      successRate:0,
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      userInfo:props.userInfo,
    };
  }

  render() {
    return (
        <div className="user-info-card" style={styles.container}>
          
        <div style={styles.content}>
              <div style={styles.head}>
                <img
                  src={this.state.userInfo.photo}
                  style={styles.avatar}
                  alt="头像"
                />
                <div style={styles.baseInfo}>
                  <h5 style={styles.name}>{this.state.userInfo.name}<IceLabel inverse={false} status="default">{this.state.userInfo.realName}</IceLabel></h5>
                  <p style={styles.deptName}>从事金融: {this.state.userInfo.workYears}年</p>
                  <p style={styles.deptName}>擅长产品: {this.state.userInfo.goodAt}</p>
                  <p style={styles.deptName}>业务能力: {this.state.userInfo.powerLevel}</p>
                  <p style={styles.deptName}>产品数量: {this.state.userInfo.productCount}</p>
                  <p style={styles.deptName}>累计放款: {this.state.userInfo.moneyAcount}万</p>
                  <p style={styles.deptName}>申请成功率: {this.state.userInfo.successRate}</p>
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
    width: '250px',
    textAlign: 'left',
  },
  ice_container: {
    padding: '15px 10',
    width: '250px',
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
    padding: '0 10px',
    margin: 0,
  },
  deptName: {
    padding: '0 10px',
    margin: 0,
    fontSize: '12px',
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
