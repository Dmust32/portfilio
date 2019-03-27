import React, {Component} from 'react';
import '../Styles/HeroBanner.css'
class HeroBanner extends Component {
  render(){
    return(
      <div className='hero-banner'>
        <div className='name-container'>
          <h3>Hi, I'm</h3>
          <h1>Jake Higgs.</h1>
          <h3>Full Stack Web Developer</h3>
        </div>
      </div>
    )
  }
}

export default HeroBanner