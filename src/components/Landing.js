import React, {Component} from 'react';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { toggleInOrOut } from '../Redux/reducer';
import '../Styles/Landing.css'

class Landing extends Component {
  state = {
    inOrOut: 'in'
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.inOrOut !== this.state.inOrOut) {
      this.setState({inOrOut: newProps.inOrOut})
    }
  }

  toggleClass = (page) => {
    if (this.props.inOrOut === 'in') {
      this.props.toggleInOrOut('out', page)
    } else {
      this.props.toggleInOrOut('in', '')
    }
  }

  render(){
    const { inOrOut } = this.state;
    return(
      <div className={inOrOut === 'in' ? 'main-container' : ''}>
        <div >
          <div className={inOrOut === 'in' ? 'left' : 'left-out'}>
            <span className='left-block' >
            <div className={inOrOut === 'in' ? 'title-container' : 'title-container-out'}>
              <h1 className='title'>Hello I'm,</h1>
              <h1 className='name' id='yellow'>Jake Higgs</h1>
            </div>
            </span>
          </div>
          <div className={inOrOut === 'in' ? 'right' : 'right-out'}>
            <span className='right-block'>
            <div className={inOrOut === 'in' ? 'title-container' : 'title-container-out'}>
              <h1 className='name' style={{marginRight: '40px'}}>Web Developer</h1>
            </div>
            </span>
          </div>
        </div>
        <div className={inOrOut === 'in' ? 'enter-bubble' : 'enter-bubble-out'}>
          <Button
            type='primary'
            className='main-button'
            onClick={() => this.toggleClass('portfolio')}
          >
            I AM LOOKING TO HIRE
            <Icon type="arrow-right" />
          </Button>
          <Button
            type='primary'
            className='secondary-button'
            onClick={() => this.toggleClass('quote')}
            ghost
          > 
            I NEED A WEBSITE 
            <Icon type="arrow-right" />
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {
  inOrOut: state.inOrOut
 }
}

export default connect(mapStateToProps, {toggleInOrOut})(Landing)