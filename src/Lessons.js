import React, { Component } from 'react'
import axios from 'axios'
import './Lessons.css'

class Lessons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lessons: []
    }
    axios.get('http://localhost:3000/courses/1/lessons')
      .then((response) => {
        this.setState({
          lessons: response.data.lessons
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
        <i>{lesson.start_time}</i>
        </div>
      )
    })
    return(
      <div className="lessons-gallery">
        {lessons}
      </div>
    )
  }
}

export default Lessons
