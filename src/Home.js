import React, { Component } from 'react'
import LoginForm from './LoginForm'
import CourseList from './CourseList'
import './Home.css'

class Home extends Component {
  render() {
    if(this.props.currentUser){
      return(
        <CourseList
          courses={this.props.courses}
          onCourseSelect={this.props.onCourseSelect}
          selectedCourse={this.props.selectedCourse}
        />
      )
    } else {
      return(
        <div className="home-container">
          <LoginForm
            currentUser={this.props.currentUser}
            onUserAuth={this.props.onUserAuth}
          />
        </div>
      )
    }
  }
}

export default Home
