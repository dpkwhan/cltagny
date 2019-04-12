import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Icon, Button } from 'antd';
import axios from 'axios';
import './Signup.css';

const numVerifyUrl = 'http://apilayer.net/api/validate?access_key=19b3880c5a8aa8c46a5f7cf3c5a4e1ce';

class SignupForm extends React.Component {
  state = {
    confirmDirty: false,
    emailRepeatDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleEmailRepeatDirtyBlur = e => {
    const value = e.target.value;
    this.setState({ emailRepeatDirty: this.state.emailRepeatDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you entered are inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  validateToNextEmail = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.emailRepeatDirty) {
      form.validateFields(['emailRepeated'], { force: true });
    }
    callback();
  };

  compareToFirstEmail = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('email')) {
      callback('Two emails that you entered are inconsistent!');
    } else {
      callback();
    }
  };

  verifyPhoneNumber = (rule, value, callback) => {
    const form = this.props.form;
    if (value) {
      const countryCode = form.getFieldValue('countryCode');
      const url = `${numVerifyUrl}&number=${value}&country_code=${countryCode}&format=1`;
      axios(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res);
        if (value && res && res.data && res.data.valid) {
          callback();
        } else {
          callback('The input is not valid phone number');
        }
      });
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row type="flex" justify="center" align="bottom">
        <Col xs={24} sm={16} md={8} lg={6} xl={6}>
          <Form layout="vertical" onSubmit={this.handleSubmit} style={{ padding: 30 }}>
            <h2>Sign up | 加入我们</h2>

            <Form.Item label="Email" colon={false}>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid email!'
                  },
                  {
                    validator: this.validateToNextEmail
                  }
                ]
              })(<Input prefix={<Icon type="mail" />} placeholder="电子邮件" />)}
            </Form.Item>

            <Form.Item label="Confirm Email" colon={false}>
              {getFieldDecorator('emailRepeated', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid email!'
                  },
                  {
                    validator: this.compareToFirstEmail
                  }
                ]
              })(<Input onBlur={this.handleEmailRepeatBlur} prefix={<Icon type="mail" />} placeholder="确认邮件" />)}
            </Form.Item>

            <Form.Item label="Password" colon={false}>
              {getFieldDecorator('password', {
                rules: [
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input type="password" prefix={<Icon type="lock" />} placeholder="个人密码" />)}
            </Form.Item>

            <Form.Item label="Confirm Password" colon={false}>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(
                <Input
                  type="password"
                  onBlur={this.handleConfirmBlur}
                  prefix={<Icon type="lock" />}
                  placeholder="确认密码"
                />
              )}
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign up
              </Button>
              <span className="signup-already-has-account">
                Already has an account? <Link to="/signin">Sign in</Link>
              </span>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const Signup = Form.create({ name: 'signup' })(SignupForm);

export default Signup;
