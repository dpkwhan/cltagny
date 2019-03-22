import React, { Component } from 'react';
import { Button, Row, Col, Avatar, Form, Icon, Input, Checkbox, Tabs } from 'antd';
import './App.css';

class NormalSignupForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="signup-form-button">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalSignupForm = Form.create({ name: 'normal_signup' })(NormalSignupForm);
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

class App extends Component {
  render() {
    return (
      <div>
        <div className="conference-title">
          <h1 style={{ marginBottom: -10 }}>
            <font className="en-title">
              The 17<sup>th</sup> New York International Conference on Chinese Teaching
            </font>
          </h1>
          <h1>
            <font className="en-title">Registration System</font>
          </h1>
          <h1 style={{ marginBottom: -10 }}>第17届纽约中文教学</h1>
          <h1 style={{ marginBottom: -10 }}>国际研讨会</h1>
          <h1>注册系统</h1>
        </div>

        <Row type="flex" justify="center" align="bottom">
          <Col xs={24} sm={12} md={6} lg={6} xl={6} style={{ padding: 10 }}>
            <Tabs defaultActiveKey="1" animated={false}>
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="user-add" />
                    Sign up
                  </span>
                }
                key="1"
              >
                <WrappedNormalSignupForm />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="login" />
                    Log in
                  </span>
                }
                key="2"
              >
                <WrappedNormalLoginForm />
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
