import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Icon, Button, Divider } from 'antd';
import axios from 'axios';
import CountrySelector from './CountrySelector';
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
    const maxWidth = { maxWidth: 400 };
    const countryCodeSelector = getFieldDecorator('countryCode', { initialValue: 'US' })(CountrySelector);

    return (
      <Row type="flex" justify="center" align="bottom">
        <Col xs={24} sm={18} md={16} lg={12} xl={8}>
          <Form layout="horizontal" onSubmit={this.handleSubmit} style={{ padding: 10 }}>
            <Row gutter={8}>
              <h2>Create an Account</h2>
            </Row>
            <Row gutter={8}>
              <span style={{ float: 'right' }}>带*号的必须填写</span>
            </Row>
            <Row gutter={8}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item label="First Name" colon={false}>
                  {getFieldDecorator('firstNameEng', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your first name in English!'
                      }
                    ]
                  })(<Input style={maxWidth} placeholder="英文名" />)}
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item label="Last Name" colon={false}>
                  {getFieldDecorator('lastNameEng', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your last name in English!'
                      }
                    ]
                  })(<Input style={maxWidth} placeholder="英文姓" />)}
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item label="Email" colon={false}>
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid email!'
                      },
                      {
                        required: true,
                        message: 'Please input your email!'
                      },
                      {
                        validator: this.validateToNextEmail
                      }
                    ]
                  })(<Input style={maxWidth} prefix={<Icon type="mail" />} placeholder="电子邮件" />)}
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item label="Confirm Email" colon={false}>
                  {getFieldDecorator('emailRepeated', {
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid email!'
                      },
                      {
                        required: true,
                        message: 'Please confirm your email!'
                      },
                      {
                        validator: this.compareToFirstEmail
                      }
                    ]
                  })(
                    <Input
                      style={maxWidth}
                      onBlur={this.handleEmailRepeatBlur}
                      prefix={<Icon type="mail" />}
                      placeholder="确认电邮"
                    />
                  )}
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item label="Password" colon={false}>
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your password!'
                      },
                      {
                        validator: this.validateToNextPassword
                      }
                    ]
                  })(<Input type="password" style={maxWidth} prefix={<Icon type="lock" />} placeholder="个人密码" />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Confirm Password" colon={false}>
                  {getFieldDecorator('confirm', {
                    rules: [
                      {
                        required: true,
                        message: 'Please confirm your password!'
                      },
                      {
                        validator: this.compareToFirstPassword
                      }
                    ]
                  })(
                    <Input
                      type="password"
                      onBlur={this.handleConfirmBlur}
                      style={maxWidth}
                      prefix={<Icon type="lock" />}
                      placeholder="确认密码"
                    />
                  )}
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item label="Affiliation" colon={false}>
                  {getFieldDecorator('affiliation', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your affiliation!'
                      }
                    ]
                  })(<Input style={maxWidth} placeholder="工作单位" />)}
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item label="Job Title" colon={false}>
                  {getFieldDecorator('jobTitle', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your job title!'
                      }
                    ]
                  })(<Input style={maxWidth} placeholder="工作职务" />)}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Biography" colon={false}>
                  {getFieldDecorator('bio', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your biography'
                      }
                    ]
                  })(<Input.TextArea autosize={{ minRows: 6 }} placeholder="个人简介" />)}
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item label="中文姓名" colon={false}>
                  {getFieldDecorator('nameChn', {})(<Input style={maxWidth} placeholder="中文姓名" />)}
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <Form.Item label="Mobile Number" colon={false}>
                  {getFieldDecorator('phone', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your phone number!'
                      },
                      {
                        validator: this.verifyPhoneNumber
                      }
                    ],
                    validateTrigger: 'onBlur'
                  })(
                    <Input
                      addonBefore={countryCodeSelector}
                      style={maxWidth}
                      prefix={<Icon type="phone" />}
                      placeholder="手机号码"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Divider />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Sign up
                  </Button>
                  <span className="signup-already-has-account">
                    Already has an account? <Link to="/signin">Sign in</Link>
                  </span>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

const Signup = Form.create({ name: 'signup' })(SignupForm);

export default Signup;
