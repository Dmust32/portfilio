import React, { Component } from 'react';
import {
  Checkbox,
  Button,
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd'

class ContactMe extends Component {
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div >
        <Form>
          <Form.Item label='First Name'>
            {getFieldDecorator('firstName', {
              rules: [
                {
                  required: true,
                  message: 'Please provide your first name.'
                }
              ]
            })(<Input type='text' />)}
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(ContactMe);