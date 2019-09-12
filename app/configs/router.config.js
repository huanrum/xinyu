import React from 'react'
import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'
import { isLogin } from '@configs/common'
import { set } from '@config'

import * as pages from '@pages'
import * as modules from '@pages/app/modules'

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={pages.app} onEnter={isLogin}>
      <IndexRoute component={modules.home} />
      {/** *菜单 开始 */}
      <Route path="/home" component={modules.home} />
      {/** *菜单 结束 */}
    </Route>
    <Route path="/login" component={pages.login} />
    <Route path="*" component={pages.notfound} />
  </Router>
)
