import React, { Component } from 'react';
import Nav from './components/Nav';
import HeroBanner from './components/HeroBanner';
import About from './components/About';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <HeroBanner />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    );
  }
}

export default App;
