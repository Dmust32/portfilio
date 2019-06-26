import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Form,
  input,
} from 'antd';

import '../Styles/ContactMe.css'

import Page1 from './ContactSubPages/Page1';

// formFields: {
//   firstName: '',
//   lastName: '',
//   email: '',
//   quoteType: '',
//   companyName: '',
//   industry: '',
//   siteType: '',
//   budget: '',
//   timeFrame: '',
//   hasDomain: bool,
//   needsHosted: bool
// }

class ContactMe extends Component {
  state = {
    page: 0,
    typeOfQuote: 'personal', //Personal or Business
    quoteSent: false
  }

  handlePageChange = (plusOrMinus) => {
    if (plusOrMinus === 'minus') {
      this.setState({page: this.state.page - 1})
    } else {
      this.setState({page: this.state.page + 1})
    }
  }

  handleTypeOfQuoteChange = (type) => {
    this.setState({typeOfQuote: type})
  }

  handleGetQuote = event => {
    event.preventDefault();

    this.props.form.validateFieldsAndScroll(async (error, values) => {
      if (!error) {
        axios.post('http://localhost:5050/email', values).then(response => {
          this.setState({quoteSent: true})
        })
      }
    })
  };

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className='form-container'>
        <div style={{ width: '30vw'}}>
          <Form>
            {this.state.page === 0 ?
              <div>
                <Form.Item label='First Name'>
                  {getFieldDecorator('firstName', {
                    rules: [
                      {
                        required: true,
                        message: 'Please provide your first name.'
                      }
                    ]
                  })(<input type='text' />)}
                </Form.Item>
                <Form.Item label='Last Name'>
                  {getFieldDecorator('lastName', {
                    rules: [
                      {
                        required: true,
                        message: 'Please provide your last name.'
                      }
                    ]
                  })(<input type='text' />)}
                </Form.Item>
                <Form.Item label='Email'>
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'Please enter a valid email.'
                      },
                      {
                        required: true,
                        message: 'Please provide an email.'
                      }
                    ]
                  })(<input type='text' />)}
                </Form.Item> 
              </div> :
              null
            }
            {/* -----------------------------------------PAGES------------------------------------------ */}
            {this.state.page === 1 ?
              <Page1
                form={this.props.form}
                typeOfQuote={this.state.typeOfQuote}
                typeChange={this.handleTypeOfQuoteChange}
              />
              :
              null
            }
            {/* -----------------------------------------BUTTONS------------------------------------------ */}
            <div className={this.state.page === 0 ? 'right-button-container' : 'split-button-container'}>
              {this.state.page !== 0 ?
                <Button
                  onClick={() => this.handlePageChange('minus')}
                >
                  Back
                </Button> :
                null
              }
              {this.state.page === 1 ?
                <Button
                  type="submit"
                  onClick={this.handleGetQuote}
                >
                  Get Quote
                </Button>
                :
                <Button
                  onClick={() => this.handlePageChange('plus')}
                  >
                  Next
                </Button>
              }
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(ContactMe);