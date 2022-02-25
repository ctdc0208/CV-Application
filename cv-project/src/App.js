import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Information from './Information';
import CVPreview from './CVPreview';

class App extends Component {
    render() {
      return (
        <div>
          <Header />
          <Information />
          <CVPreview />
        </div>
      )
    }
}

export default App
