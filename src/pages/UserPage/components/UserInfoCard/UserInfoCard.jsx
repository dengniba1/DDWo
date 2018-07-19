import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Icon } from '@icedesign/base';
import { Rating } from '@icedesign/base';

export default class UserInfoCard extends Component {
  static displayName = 'UserInfoCard';

  static propTypes = {};

  static defaultProps = {
    userInfo:{
      name:'样某某',
      photo:'https://img.alicdn.com/tfs/TB1nf.WjyqAXuNjy1XdXXaYcVXa-245-245.gif',
      dept:'代迅网络信息技术上海有限公司',
      realName:'已实名',
      workYears:'金融圈混迹8年',
      location:'杭州',
      serviceLevel: 4.5,
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
      <IceContainer style={styles.ice_container}>
        <div className="user-info-card" style={styles.container}>
          
        <div style={styles.content}>
              <div style={styles.head}>
                <img
                  src={this.state.userInfo.photo}
                  style={styles.avatar}
                  alt="头像"
                />
                <div style={styles.baseInfo}>
                  <h5 style={styles.name}>{this.state.userInfo.name}</h5>
                  <p style={styles.deptName}>{this.state.userInfo.dept}</p>
                  <p style={styles.deptName}>{this.state.userInfo.realName}</p>
                  <p style={styles.deptName}>{this.state.userInfo.workYears}</p>
                </div>
              </div>
              <ul style={styles.body}>
                <li style={styles.profileItem}>
                  <Icon type="map" size="xs" style={styles.itemIcon} /> {this.state.userInfo.location}
                </li>
                <li style={styles.profileItem}>
                  <Icon type="discount" size="xs" style={styles.itemIcon} />
                  房屋抵押
                </li>
                <li style={styles.profileItem}>
                  <Icon type="phone" size="xs" style={styles.itemIcon} />
                  871066160
                </li>
                <li style={styles.profileItem}>
                  <Icon type="mobile-phone" size="xs" style={styles.itemIcon} />
                  13867894321
                </li>
                <li style={{ ...styles.profileItem, width: '100%' }}>
                  <a href="mailto:ice-admin@alibaba-inc.com">
                    <Icon type="email" size="xs" style={styles.itemIcon} />
                    ice-admin@alibaba-inc.com
                  </a>
                </li>
                <li style={{ ...styles.profileItem, width: '100%' }}>
                  <Icon type="account" size="xs" style={styles.itemIcon} />
                  我的商务顾问：刘经理
                </li>
                <li>
                  <div style={styles.overviewRatingWrapper}>
                    <span style={styles.overviewRatingCount}>认证星级</span>
                    <span style={styles.overviewRating}>
                      <Rating value={this.state.userInfo.serviceLevel} disabled />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          
        </div>
      </IceContainer>
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
    paddingBottom: '10px',
    borderBottom: '1px dotted #eee',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50px',
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
