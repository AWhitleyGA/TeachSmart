import React, { Component } from 'react'
import LoginForm from './LoginForm'
import CourseList from './CourseList'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.currentUser){
      return(
        <CourseList courses={this.props.courses}/>
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
