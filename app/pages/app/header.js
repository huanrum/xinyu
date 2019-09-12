import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { Modal, message, Row, Col } from 'antd'
import { brandName } from '@config'
import { logout } from '@apis/common'
// import User from '@images/user.png'

import UserInfo from './userInfo'

const { confirm } = Modal

@connect((state, props) => ({
  config: state.config,
  staffResponse: state.staffResponse,
}))
export default class Header extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      userInfo: false, // 控制用户信息弹框显隐
    }
  }

  // 组件已经加载到dom中
  componentDidMount() {

  }

  // 登出
  handleLogout() {
    const { config } = this.props
    const self = this
    confirm({
      title: '提示',
      content: '确认退出登录吗？',
      onOk() {
        logout({}, (result) => {
          // console.log(result)
          if (result.status === 1) {
            sessionStorage.clear()
            config.staff = {}
            hashHistory.push('/login')
          } else {
            message.warning(result.msg)
          }
        })
      },
    })
  }

  // 点击显示用户信息
  showUserInfo() {
    this.setState({ userInfo: true })
  }

  // 点击关闭用户信息弹窗
  onCancel() {
    this.setState({ userInfo: false })
  }

  render() {
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo')) || {}
    const roles = []
    userinfo && userinfo.roles && userinfo.roles.map((item) => {
      roles.push(item.roleName)
    })
    let name = ''
    if (sessionStorage.getItem('userinfo')) {
      name = JSON.parse(sessionStorage.getItem('userinfo')).chineseName
    }
    
    return (
      <header id="navbar">
        <div id="navbar-container" className="boxed">
          <Row className="row">
            <Col span={20}>
              <div className="navbar-brand" title={brandName}>
                <span className="brand-title">
                  <span className="brand-text"><span className="logo" />{brandName}</span>
                </span>
              </div>
            </Col>
            <Col span={4} className="col">
              <div className="right">
                <ul>
                  <li>
                    <a onClick={() => this.showUserInfo()}>{name}</a>
                  </li>
                  <li>
                    <a onClick={() => this.handleLogout()}>退出</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        {
          this.state.userInfo ? <UserInfo handleLogout={this.handleLogout} /> : null
        }
      </header>
    )
  }
}
