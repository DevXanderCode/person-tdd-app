import React, { Component } from 'react';
import PersonList from './PersonList';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <PersonList />
      </div>
    );
  }
}

export default App;
