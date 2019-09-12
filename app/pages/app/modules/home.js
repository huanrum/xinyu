
import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Badge, Button, Input, DatePicker, Switch, Table } from 'antd'

@connect((state, props) => ({}))
export default class Home extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
        type: null,
        search: ''
    }
  }

  total25h() {
    return (
        '24小时信息'
    );
  }

  switchType() {
      
    
  }

  render() {
    const { type } = this.state;
    const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];
      
      const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ];

    return (
      <div>
        <div>{this.total25h()}</div>
        <div>
            <div>
                <div>
                {
                    <Button.Group>
                    {
                        ['A','B','C'].map(btn => (
                            <Button onClick={() => this.setState({type: btn})}>
                                <Badge count={5}>{btn}</Badge>
                            </Button>
                        ))
                    }
                    </Button.Group>
                }
                </div>
                <div>
                    <DatePicker placeholder="开始时间"/>
                    <DatePicker placeholder="结束时间"/>
                    <Input placeholder="关键字"/>
                </div>
            </div>
            {type ? (
                <div>
                    <div>
                        <Button.Group>
                        {
                            ['X','Y','Z'].map(btn => (
                                <Button onClick={() => this.setState({type: btn})}>{btn}</Button>
                            ))
                        }
                        </Button.Group>
                    </div>
                    <div>
                        <Switch placeholder="关键字"/>
                    </div>
                </div>
            ) : null}
        <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    )
  }
}
