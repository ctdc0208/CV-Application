import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Information from './Information';
import Footer from './Footer';
import CVpreview from './CVPreview';
import { Provider } from 'react-redux';
import store from './Redux/store';

class App extends Component {
    render() {
      return (
        <div className='app'>
          <Header />
            <Provider store={store}>
              <div className='app-container'>
                <Navbar />
                <Information />
                <CVpreview form="Information" />
              </div>
            </Provider>
          <Footer />
        </div>
      )
    }
}


export default App
