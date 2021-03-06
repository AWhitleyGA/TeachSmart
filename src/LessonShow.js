import React, { Component } from 'react'
import moment from 'moment'
import './LessonShow.css'

class LessonShow extends Component {
  openLinkInNewTab(evt, url) {
    // evt.preventDefault()
    window.open(url, '_blank')
  }
  render() {
    return(
      <div className="lesson-page">
        <h3>{this.props.selectedLesson.name}</h3>
        <div className="lesson-details">
          <p className="lesson-info"><span>Topics: </span>{this.props.selectedLesson.description}</p>
          <p className="lesson-info"><span>Date: </span>{moment.utc(this.props.selectedLesson.start_time).format('MMMM Do, YYYY')}</p>
          <p className="lesson-info"><span>Start Time: </span>{moment.utc(this.props.selectedLesson.start_time).format('h:mm')}</p>
          <p className="lesson-info"><span>End Time: </span>{moment.utc(this.props.selectedLesson.end_time).format('h:mm')}</p>
          <p className="lesson-info"><span>Directions: </span>{this.props.selectedLesson.body}</p>
        </div>
        <h4>Resources</h4>
        <div className="lesson-resources">
          <a className="resource-folder-link" onClick={(evt) => this.openLinkInNewTab(evt, this.props.selectedLesson.url)}>Lesson<br />Materials</a>
        </div>
      </div>
    )
  }
}

export default LessonShow
