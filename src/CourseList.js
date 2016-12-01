import React, { Component } from 'react'
import './CourseList.css'

class CourseList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      let selectedCourse = this.props.selectedCourse
      let courses = this.props.courses.map((course) => {
        if(course.name == selectedCourse) {
          return(
            <div className="selected-course-icon" onClick={() => this.props.onCourseSelect(course.name)}>
              {course.name} - {course.description}
            </div>
          )
        } else {
          return(
            <div className="course-icon" onClick={() => this.props.onCourseSelect(course.name)}>
              {course.name} - {course.description}
            </div>
          )
        }
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
