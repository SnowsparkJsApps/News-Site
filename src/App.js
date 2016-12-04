//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import './App.css';
import Menu from './MenuBar'

let MenuItems=['Home', 'Services', 'About', 'Contact us','Login'];
class App extends Component {
  render() {
    return (
      <div id="App">
        <header>
        <Menu items={ MenuItems } />
        </header>
      </div>
    );

  }

}
//MenuItems.pop();

export default App;
