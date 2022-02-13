import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Information from './Information';


class App extends Component {
    render() {
      return (
        <div>
          <Header />
          <Information />
        </div>
      )
    }
}

export default App
