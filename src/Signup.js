import React from 'react';
import { Form, Input } from 'antd';

const validateToNextPassword = (rule, value, callback) => {
  const form = this.props.form;
  if (value && this.state.confirmDirty) {
    form.validateFields(['confirm'], { force: true });
  }
  callback();
};

const compareToFirstPassword = (rule, value, callback) => {
  const form = this.props.form;
  if (value && value !== form.getFieldValue('password')) {
    callback('Two passwords that you enter is inconsistent!');
  } else {
    callback();
  }
};

const CustomizedForm = Form.create({
  name: 'global_state',

  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },

  mapPropsToFields(props) {
    return {
      email: Form.createFormField({
        ...props.email,
        value: props.email.value
      }),
      password: Form.createFormField({
        ...props.password,
        value: props.password.value
      }),
      confirm: Form.createFormField({
        ...props.confirm,
        value: props.confirm.value
      })
    };
  },

  onValuesChange(_, values) {
    console.log(values);
  }
})(props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form>
      <Form.Item label="Email">
        {getFieldDecorator('email', {
          rules: [
            { type: 'email', message: 'The input is not valid email!' },
            { required: true, message: 'Email is required!' }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Password">
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Password is required!' }, { validator: validateToNextPassword }]
        })(<Input type="password" />)}
      </Form.Item>

      <Form.Item label="Confirm Password">
        {getFieldDecorator('confirm', {
          rules: [{ required: true, message: 'Please confirm your password!' }, { validator: compareToFirstPassword }]
        })(<Input type="password" />)}
      </Form.Item>
    </Form>
  );
});

class Signup extends React.Component {
  state = {
    fields: {
      email: {
        value: ''
      },
      password: {
        value: ''
      },
      confirm: {
        value: ''
      }
    }
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields }
    }));
  };

  render() {
    const fields = this.state.fields;
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
      </div>
    );
  }
}

export default Signup;
