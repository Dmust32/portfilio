import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from './Components/Landing';
import ContactMe from './Components/ContactMe';
import Portfolio from './Components/Portfolio';
import Nav from './Components/Nav';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Landing />
        {
          this.props.page === 'quote' ?
          <div>
            <Nav 
              type='quote'
            />
            <ContactMe /> 
          </div>
          :
          null
        }
        {
          this.props.page === 'portfolio' ?
          <div>
            <Nav 
              type='portfolio'
            />
            <Portfolio /> 
          </div> 
          :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inOrOut: state.inOrOut,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);
