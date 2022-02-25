import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Information from './Information';
import CVPreview from './CVPreview';
import Footer from './Footer';

class App extends Component {
    render() {
      return (
        <div className='app'>
          <Header />
          <Information />
          <CVPreview />
          <Footer />
        </div>
      )
    }
}

export default App
