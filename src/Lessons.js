import React, { Component } from 'react'
import axios from 'axios'
import './Lessons.css'
import moment from 'moment'

class Lessons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lessons: []
    }
    axios.get(`http://localhost:3000/courses/${this.props.selectedCourse.id}/lessons`, {
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('teachSmartUser')).auth_token,
      },
      user: this.props.currentUser
    })
    .then((response) => {
      this.setState({
        lessons: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  render() {
    let lessons = this.state.lessons.map((lesson) => {
      return(
        <div className="lesson-icon">
        <h4>{lesson.name}</h4>
        <p>{moment.utc(lesson.start_time).format('MMMM Do, YYYY @ h:mm')}</p>
        </div>
      )
    })
    return(
      <div className="lessons-gallery">
      <h3>Lessons</h3>
        {lessons}
      </div>
    )
  }
}

export default Lessons
