import React, {Component} from 'react';
import {Menu, Affix} from 'antd';
import { connect } from 'react-redux';
import { toggleInOrOut } from '../Redux/reducer';
import '../Styles/Nav.css'

class Nav extends Component {
  state = {
    current: this.props.type === 'quote' ? 'contact' : 'about'
  }

  handleMenuChange = (key) => {
    this.setState({current: key.key})
    if (key.key === 'home') {
      this.props.toggleInOrOut('in', '')
    }
  }

  menuItems = () => {
    if (this.props.type === 'quote') {
      return (
        <Menu
          mode="horizontal"
          selectedKeys={[this.state.current]}
          onClick={this.handleMenuChange}
        >
          <Menu.Item key='home'>Home</Menu.Item>
          <Menu.Item key='contact'>Contact Me</Menu.Item>
        </Menu>
      )
    } else {
      return (
        <Menu
          mode="horizontal"
          selectedKeys={[this.state.current]}
          onClick={this.handleMenuChange}
        >
          <Menu.Item key='home'>Home</Menu.Item>
          <Menu.Item key='about'>About</Menu.Item>
          <Menu.Item key='skills'>Skills & Languages</Menu.Item>
          <Menu.Item key='projects'>Projects</Menu.Item>
        </Menu>
      )
    }
  }

  render(){
      return(
        <div >
          <Affix>
            {this.menuItems()}
          </Affix>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, {toggleInOrOut})(Nav)