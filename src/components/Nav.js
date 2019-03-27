import React, {Component} from 'react';
import {Menu, Affix} from 'antd';
import '../Styles/Nav.css'

class Nav extends Component {
  state = {
    current: 'about'
  }

  handleMenuChange = (key) => {
    this.setState({current: key.key})
  }

  render(){
      return(
        <div >
          <Affix>
            <Menu
              mode="horizontal"
              selectedKeys={[this.state.current]}
              onClick={this.handleMenuChange}
            >
              <Menu.Item key='about'>About</Menu.Item>
              <Menu.Item key='skills'>Skills & Languages</Menu.Item>
              <Menu.Item key='projects'>Projects</Menu.Item>
              <Menu.Item key='contact'>Contact Me</Menu.Item>
            </Menu>
          </Affix>
        </div>
      )
  }
}

export default Nav