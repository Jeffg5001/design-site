import React, { Component } from 'react';
import Home from './Home'
import {Route} from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path='/' component={Home}/>
      </div>
    );
  }
}

export default App;
