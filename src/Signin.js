import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Icon, Button, Checkbox } from 'antd';
import './Signin.css';

class SigninForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row type="flex" justify="center" align="bottom">
        <Col xs={24} sm={16} md={8} lg={6} xl={6}>
          <Form layout="vertical" onSubmit={this.handleSubmit} style={{ padding: 30 }}>
            <h2>Sign in | 登录账户</h2>

            <Form.Item label="Email" colon={false}>
              {getFieldDecorator('email', {})(<Input prefix={<Icon type="mail" />} placeholder="电子邮件" />)}
            </Form.Item>

            <Form.Item label="Password" colon={false}>
              {getFieldDecorator('password', {})(
                <Input type="password" prefix={<Icon type="lock" />} placeholder="个人密码" />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="signin-form-forgot" href="/">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="signin-form-button">
                Sign in
              </Button>
              <span className="signin-no-account">
                No account? <Link to="/signup">Sign up</Link>
              </span>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const Signin = Form.create({ name: 'signin' })(SigninForm);

export default Signin;
