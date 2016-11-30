import React, { Component } from 'react';
import NavLink from './NavLink'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: {}
    }
    axios.get('http://localhost:3000/courses/1')
      .then((response) => {
        this.setState({
          course: response.data.course
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
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
          <div className="course-header">
            <h2>{this.state.course.name}</h2>
            <p>{this.state.course.description}</p>
          </div>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
