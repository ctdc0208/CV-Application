import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Information from './Information';
import CVPreview from './CVPreview';
import Footer from './Footer';

class App extends Component {
    render() {
      return (
        <div className='app'>
          <Header />
          <div className='app-container'>
            <Navbar />
            <Information />
          </div>
          <CVPreview />
          <Footer />
        </div>
      )
    }
}

export default App
