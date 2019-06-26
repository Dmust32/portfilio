import React, { Component } from 'react';
import {
  Input,
  Form,
  Radio,
  Switch
} from 'antd'

const RadioGroup = Radio.Group

class Page1 extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form.Item label='Quote Type'>
          {getFieldDecorator('quoteType', {
            initialValue: 'personal'
          })(
            <RadioGroup>
              <Radio.Button onChange={(e) => this.props.typeChange(e.target.value)} value='personal'>Personal</Radio.Button>
              <Radio.Button onChange={(e) => this.props.typeChange(e.target.value)} value='business'>Business</Radio.Button>
            </RadioGroup>
          )}
        </Form.Item>
        {this.props.typeOfQuote === 'business' ?
          <div>
            <Form.Item label='Company Name'>
              {getFieldDecorator('companyName')(<Input type='text' />)}
            </Form.Item>
            <Form.Item label='Industry ex(tech, fashion, finance etc.)'>
              {getFieldDecorator('industry')(<Input type='text' />)}
            </Form.Item>
          </div>
          :
          null
        }
        <Form.Item label='Describe the purpose of your site. What will people use it for?'>
          {getFieldDecorator('siteType')(<Input.TextArea autosize={{minRows: 4}} type='text' />)}
        </Form.Item>
        <Form.Item label='Do you have a budget for this site?'>
          {getFieldDecorator('budget')(<Input type='text' />)}
        </Form.Item>
        <Form.Item label='What timeframe should this be completed in?'>
          {getFieldDecorator('timeFrame')(<Input type='text' />)}
        </Form.Item>
        <Form.Item label='Do you already have a domain name ex(google.com)'>
          {getFieldDecorator('hasDomain')(
            <Switch 
              checkedChildren='Yes' 
              unCheckedChildren='No'
            />
          )}
        </Form.Item>
        <Form.Item label='Do you need the site hosted?'>
          {getFieldDecorator('needsHosted')(
            <Switch 
              checkedChildren='Yes' 
              unCheckedChildren='No'
            />)}
        </Form.Item>
      </div>
    )
  }
}

export default Page1