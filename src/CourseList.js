import React, { Component } from 'react'
import './CourseList.css'

class CourseList extends Component {
  render() {
      let selectedCourse = this.props.selectedCourse
      let courses = this.props.courses.map((course) => {
        if(course === selectedCourse) {
          return(
            <div className="selected-course-icon" onClick={() => this.props.onCourseSelect(course)}>
              {course.name} - {course.description}
            </div>
          )
        } else {
          return(
            <div className="course-icon" onClick={() => this.props.onCourseSelect(course)}>
              {course.name} - {course.description}
            </div>
          )
        }
      })
      return(
        <div className="course-gallery">
          <h3>Courses</h3>
          {courses}
        </div>
      )
  }
}

export default CourseList
