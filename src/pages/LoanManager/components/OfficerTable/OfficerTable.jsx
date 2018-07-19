import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination, Select, Grid, Input } from '@icedesign/base';
import UserInfoCard from '../UserInfoCard';
import UserCompany from '../UserCompany';
import UserService from '../UserService';
import { FormBinderWrapper, FormBinder } from '@icedesign/form-binder';
import DataBinder from '@icedesign/data-binder';

const { Combobox } = Select;
const { Row, Col } = Grid;

const regionData = ['全上海', '浦东新区', '闵行', '宝山', '徐汇', '松江', '嘉定', '静安', '普陀', '杨浦', '虹口', '长宁', '黄埔', '青浦', '奉献', '金山', '崇明', '上海周边'];
const loanTypeData = ['不限', '抵押贷款', '无抵押贷款', '纯信用贷款', '担保贷款', '银行理财', 'P2P理财', '基金'];
const suitData = ['不限', '个人', '企业'];
const useForData = ['不限', '创业', '购房', '买车', '经营', '装修', '结婚', '旅游', '求学', '购物消费', '短期周转', '其他'];


@DataBinder({
  tableData: {
    // 详细请求配置请参见 https://github.com/axios/axios
    url: '/mock/officer-list.json',
    params: {
      page: 1,
    },
    defaultBindingData: {
      list: [],
      total: 100,
      pageSize: 10,
      currentPage: 1,
    },
  },
})

export default class OfficerTable extends Component {
  static displayName = 'OfficerTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.queryCache = {};
    this.state = {
      formValue: {},
    };
  }

  componentDidMount() {
    this.queryCache.page = 1;
    this.fetchData();
  }

  fetchData = () => {
    this.props.updateBindingData('tableData', {
      data: this.queryCache,
    });
  };

  renderUserInfoCard = (value) => {
    return (
      <UserInfoCard userInfo={value} />
    );
  };
  renderUserCompany = (value) => {
    return (
      <UserCompany companyInfo={value} />
    );
  };
  renderUserService = (value) => {
    return (
      <UserService serviceInfo={value} />
    );
  };

  changePage = (currentPage) => {
    this.queryCache.page = currentPage;

    this.fetchData();
  };

  getDataSource = (tableData) => {
    const { formValue } = this.state;
    
    return tableData.list.filter((data) => {

      if (
        formValue.region &&
        formValue.region.length > 0 &&
        !formValue.region.some((l) => {
          return l === data.companyInfo.region;
        }) &&
        formValue.region.indexOf('全上海') < 0
      ) {
        return false;
      }

      if (
        formValue.loanType &&
        formValue.loanType.length > 0 &&
        !formValue.loanType.some((l) => {
          return l === data.userInfo.goodAt;
        }) &&
        formValue.loanType.indexOf('不限') < 0
      ) {
        return false;
      }
      return true;
    });
  };

  formChange = (value) => {
    console.log('changed value', value);
    this.setState({
      formValue: value,
    });
  };

  render() {
    const { formValue } = this.state;
    const tableData = this.props.bindingData.tableData;
    return (
      <IceContainer>
        <FormBinderWrapper value={formValue} onChange={this.formChange}>
          <div style={{ marginBottom: '25px' }}>
            <Row style={styles.formRow}>
              <Col xxs="6" s="4" l="2" style={styles.label}>
                区域选择:{' '}
              </Col>
              <Col span="10">
                <FormBinder>
                  <Combobox
                    name="region"
                    filterLocal={false}
                    fillProps="label"
                    placeholder="请选择"
                    multiple
                    dataSource={regionData}
                  />
                </FormBinder>
              </Col>
            </Row>
            <Row style={styles.formRow}>
              <Col xxs="6" s="4" l="2" style={styles.label}>
                贷款类型:{' '}
              </Col>
              <Col span="10">
                <FormBinder>
                  <Combobox
                    name="loanType"
                    filterLocal={false}
                    fillProps="label"
                    placeholder="请选择"
                    multiple
                    dataSource={loanTypeData}
                  />
                </FormBinder>
              </Col>
            </Row>
            <Row style={styles.formRow}>
              <Col xxs="6" s="4" l="2" style={styles.label}>
                适合人群:{' '}
              </Col>
              <Col span="10">
                <FormBinder>
                  <Combobox
                    name="suit"
                    filterLocal={false}
                    fillProps="label"
                    placeholder="请选择"
                    multiple
                    dataSource={suitData}
                  />
                </FormBinder>
              </Col>
            </Row>
            <Row style={styles.formRow}>
              <Col xxs="6" s="4" l="2" style={styles.label}>
                资金用途:{' '}
              </Col>
              <Col span="10">
                <FormBinder>
                  <Combobox
                    name="useFor"
                    filterLocal={false}
                    fillProps="label"
                    placeholder="请选择"
                    multiple
                    dataSource={useForData}
                  />
                </FormBinder>
              </Col>
            </Row>
          </div>
        </FormBinderWrapper>
        <Table dataSource={this.getDataSource(tableData)} hasBorder={false}>
          <Table.Column title="" cell={this.renderUserInfoCard} dataIndex="userInfo" />
          <Table.Column title="" cell={this.renderUserCompany} dataIndex="companyInfo" />
          <Table.Column title="" cell={this.renderUserService} dataIndex="serviceInfo" />
        </Table>
        <div style={styles.pagination}>
          <Pagination
            current={tableData.currentPage}
            pageSize={tableData.pageSize}
            total={tableData.total}
            onChange={this.changePage}
          />
        </div>
      </IceContainer>
    );
  }
}

const styles = {
  inviteInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  sentInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarWrapper: {
    borderRadius: '40px',
    overflow: 'hidden',
    display: 'inline-block',
    marginRight: 10,
  },
  avatar: {
    display: 'block',
  },
  formRow: {
    marginBottom: '18px',
  },
  label: { lineHeight: '28px', paddingRight: '10px' },
  pagination: {
    textAlign: 'right',
    paddingTop: '26px',
  },
};
