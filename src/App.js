import React, { Component } from 'react';
import NavLink from './NavLink'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <h1>TeachSmart</h1>
          <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
          <NavLink to="/lessons">Lessons</NavLink>
          <NavLink to="/assignments">Assignments</NavLink>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
