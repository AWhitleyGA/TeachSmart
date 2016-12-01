import React, { Component } from 'react'
import './CourseList.css'

class CourseList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      console.log(this.props.courses)
      let courses = this.props.courses.map((course) => {
        return(
          <div className="course-icon">
            {course.name} - {course.description}
          </div>
        )
      })
      return(
        <div className="course-gallery">
          <h1>Courses</h1>
          {courses}
        </div>
      )
  }
}

export default CourseList
