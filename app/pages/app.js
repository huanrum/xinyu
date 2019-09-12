
import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import '@styles/base.less'

import Header from './app/header'

@connect((state, props) => ({}))
export default class App extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props
    return (
      <LocaleProvider locale={zhCN}>
        <div id="container">
          <Header />
          <div id="content-container" className="content-container">
            <div id="page-content">
              {children}
            </div>
          </div>
        </div>
      </LocaleProvider>
    )
  }
}
