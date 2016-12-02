import React, { Component } from 'react';
import NavLink from './NavLink'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
      currentUser: null,
      selectedCourse: null
    }
    this.handleUserAuth = this.handleUserAuth.bind(this)
    this.handleCourseSelect = this.handleCourseSelect.bind(this)
  }

  handleUserAuth(user) {
    this.setState({
      currentUser: user
    })
    this.getUserCourses()
  }

  getUserCourses() {
    axios.get('http://localhost:3000/courses', {
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('teachSmartUser')).auth_token,
      },
      user: this.state.currentUser
    })
    .then((response) => {
      this.setState({
        courses: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleCourseSelect(course) {
    this.setState({
      selectedCourse: course
    })
  }

  render() {
    const children = React.Children.map(this.props.children, (child)=> {
      return React.cloneElement(child, {
        currentUser: this.state.currentUser,
        courses: this.state.courses,
        onUserAuth: this.handleUserAuth,
        onCourseSelect: this.handleCourseSelect,
        selectedCourse: this.state.selectedCourse
      })
    })
    if(this.state.selectedCourse) {
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
            <h2>{this.state.selectedCourse.name} - {this.state.selectedCourse.description}</h2>
            </div>
            {children}
          </main>
        </div>
      )
    } else {
      return(
        <div className="container">
          <nav>
            <h1>TeachSmart</h1>
            <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
          </nav>
          <main>
            <div className="course-header">
            </div>
            {children}
          </main>
        </div>
      )
    }

  }
}

export default App;
