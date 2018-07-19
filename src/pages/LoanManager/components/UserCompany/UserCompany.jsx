import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Icon, Rating, Grid} from '@icedesign/base';
import IceLabel from '@icedesign/label';

const { Row, Col } = Grid;

export default class UserCompany extends Component {
  static displayName = 'UserCompany';

  static propTypes = {};

  static defaultProps = {
    companyInfo:{
      name:'XXXXXXXXX',
      address:'XXXXXXXXXX',
      duty:'客户主任',
      region:'全上海',
      product:'新一代',
      limit:'1-30',
      rate:'0%',
      loanDate:'当天放款',
      authentication:'已认证',
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      companyInfo:props.companyInfo,
    };
  }

  render() {
    return (
        <div className="user-info-card" style={styles.container}>
          
        <div style={styles.content}>
              <div style={styles.head}>
                <div style={styles.baseInfo}>
                  <h5 style={styles.name}>{this.state.companyInfo.name}<IceLabel inverse={false} status="default">{this.state.companyInfo.authentication}</IceLabel></h5>
                  <p style={styles.deptName}>地址: {this.state.companyInfo.address}</p>
                  <p style={styles.doubleDeptName}>
                    <Col span="12"><span>职务: {this.state.companyInfo.duty}</span></Col>
                    <Col span="12"><span>服务区域: {this.state.companyInfo.region}</span></Col>
                  </p>
                  <p style={styles.doubleDeptName}>
                    <Col span="12"><span>信用贷款: {this.state.companyInfo.product}</span></Col>
                    <Col span="12"><span>额度: {this.state.companyInfo.limit}</span></Col>
                  </p>
                  <p style={styles.doubleDeptName}>
                    <Col span="12"><span>利率: {this.state.companyInfo.rate}（年化）</span></Col>
                    <Col span="12"><span>{this.state.companyInfo.loanDate}</span></Col>
                  </p>
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
    justifyContent: 'space-evenly',
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
