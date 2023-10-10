import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Information from './Information';
import Footer from './Footer';
import CVpreview from './CVPreview';
import FormStateFromRedux from './Redux/FormStateFromRedux';

class App extends Component {
    render() {
      return (
        <div className='app'>
          <Header />
          <div className='app-container'>
            <Navbar />
            <Information />
            <CVpreview />
          </div>
          <Footer />
        </div>
      )
    }
}


export default App
