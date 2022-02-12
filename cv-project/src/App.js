import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Tab from './Tab';

class App extends Component {
      constructor(props) {
        super(props);
        this.state = { tabitems: [], text: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
      }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
        };
        this.setState(state => ({
          tabitems: state.tabitems.concat(newItem),
          text: ''
        }));
    } 

    render() {
      return (
        <div>
          <Header />
          <div className='main-container'>
          <div className='container-one'>
          <button>Basic Information</button>
          <button>Experience</button>
          <button>Education</button>
          
          <Tab tabitems={this.state.tabitems} />
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='new-task'>
                Add new section
              </label>
              <input
                id="new-task"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button>
                Add
              </button>
            </form>
          </div>
            <div className='container-two'>

            </div>
          </div>
        </div>
      )
    }
}

export default App
