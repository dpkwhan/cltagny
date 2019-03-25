import React, { Fragment } from 'react';
import { Row, Col, Form, Input, Button, Switch, Select, Radio, Upload, Icon } from 'antd';
import './Register.css';

const { Option } = Select;
const fees = {
  regular: 30.0,
  student: 20.0,
  onsite: 40.0
};

class RegisterForm extends React.Component {
  state = { submitProposal: false, isStudent: false, location: null };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  onSubmitProposalChange = submitProposal => {
    console.log(`Submitting proposal?: ${submitProposal}`);
    this.setState({ submitProposal });
  };

  onStudentStatusChange = isStudent => {
    console.log(`Is student?: ${isStudent}`);
    this.setState({ isStudent });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  onLocationChange = e => {
    const location = e.target.value;
    console.log(`Location: ${location}`);
    this.setState({ location });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { submitProposal, isStudent, location } = this.state;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    };

    return (
      <Row type="flex" justify="center" align="bottom">
        <Col xs={24} sm={18} md={16} lg={12} xl={12}>
          <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ padding: 10 }}>
            <Row gutter={8}>
              <h2>Register Conference</h2>
            </Row>

            <Row gutter={8}>
              <span style={{ float: 'right' }}>带*号的必须填写</span>
            </Row>

            <Row gutter={8}>
              <Col span={24}>
                <Form.Item label="Submit a proposal?">
                  {getFieldDecorator('submitProposal', {})(
                    <Switch defaultChecked={false} onChange={this.onSubmitProposalChange} />
                  )}
                </Form.Item>
              </Col>

              {submitProposal ? (
                <Fragment>
                  <Col span={24}>
                    <Form.Item label="Proposal Ttitle">
                      {getFieldDecorator('proposalTitle', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your proposal title'
                          }
                        ]
                      })(<Input placeholder="论文题目" />)}
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item label="Proposal Category" hasFeedback>
                      {getFieldDecorator('proposalCategory', {
                        rules: [
                          {
                            required: true,
                            message: 'Please select your proposal category'
                          }
                        ]
                      })(
                        <Select placeholder="请选择论文类别">
                          <Option value="assessment">Assessment/Standards</Option>
                          <Option value="cultural">Cultural</Option>
                          <Option value="curriculum">Curricumlum Design</Option>
                          <Option value="linguistic">Linguistic</Option>
                          <Option value="pedagogical">Pedagogical</Option>
                          <Option value="pragmatic">Pragmatic</Option>
                          <Option value="technology">Technological</Option>
                          <Option value="textbooks">Textbooks</Option>
                          <Option value="training">Training Programm</Option>
                        </Select>
                      )}
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item label="Proposal Abstract">
                      {getFieldDecorator('proposalAbstract', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your proposal abstract'
                          }
                        ]
                      })(<Input.TextArea autosize={{ minRows: 8 }} placeholder="论文摘要" />)}
                    </Form.Item>
                  </Col>
                </Fragment>
              ) : null}

              <Col span={24}>
                <Form.Item label="Lunch Preference" hasFeedback>
                  {getFieldDecorator('lunchPreference', {})(
                    <Select placeholder="选择午餐（会议免费提供)">
                      <Option value="vagetarian">Vegetarian | 素食</Option>
                      <Option value="nonveg">Non-vagetarian | 非素食</Option>
                      <Option value="yourown">Bring your own | 自带</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Membership Status">
                  {getFieldDecorator('hasMembership', {})(
                    <Radio.Group>
                      <Radio value="yes">会员</Radio>
                      <Radio value="no">非会员</Radio>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Remarks">
                  {getFieldDecorator('remarks', {})(<Input.TextArea autosize={{ minRows: 4 }} placeholder="留言" />)}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="University Student?">
                  {getFieldDecorator('isStudent', {})(
                    <Switch defaultChecked={false} onChange={this.onStudentStatusChange} />
                  )}
                </Form.Item>
              </Col>

              {isStudent ? (
                <Col span={24}>
                  <Form.Item label="Student ID">
                    {getFieldDecorator('upload', {
                      valuePropName: 'fileList',
                      getValueFromEvent: this.normFile
                    })(
                      <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                          <Icon type="upload" /> Click to upload student ID
                        </Button>
                      </Upload>
                    )}
                  </Form.Item>
                </Col>
              ) : null}

              <Col span={24}>
                <Form.Item label="Location | 出发地">
                  {getFieldDecorator('location', {})(
                    <Fragment>
                      <Radio.Group onChange={this.onLocationChange}>
                        <Radio value="中国大陆">中国大陆</Radio>
                        <Radio value="港澳台">港澳台</Radio>
                        <Radio value="美国">美国</Radio>
                        <Radio value="Other">其它地区</Radio>
                      </Radio.Group>
                      {location === 'Other' ? (
                        <Form.Item>
                          {getFieldDecorator('otherLocation', {
                            rules: [
                              {
                                required: true,
                                message: 'Please input your location'
                              }
                            ]
                          })(<Input style={{ maxWidth: 100 }} placeholder="其它出发地" />)}
                        </Form.Item>
                      ) : null}
                    </Fragment>
                  )}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Registration Fee Type" hasFeedback>
                  {getFieldDecorator('balance', {})(
                    <Select placeholder="选择注册费类型" style={{ maxWidth: 300 }}>
                      <Option value="regular">Regular Fee | 正常费用: ${fees.regular.toFixed(2)}</Option>
                      <Option value="student">Student Fee | 学生费用: ${fees.student.toFixed(2)}</Option>
                      <Option value="onsite">Onsite (Cash Only) | 现场现金: ${fees.onsite.toFixed(2)}</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item label=" " colon={false}>
                  {getFieldDecorator('submit', {})(
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

const Register = Form.create({ name: 'register' })(RegisterForm);

export default Register;

// <Input name="otherLocation" style={{ width: 100, marginLeft: 10 }} />
