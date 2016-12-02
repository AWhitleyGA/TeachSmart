import React, { Component } from 'react'
import moment from 'moment'
import './Lessons.css'

class AssignmentShow extends Component {
  openLinkInNewTab(evt, url) {
    // evt.preventDefault()
    window.open(url, '_blank')
  }
  render() {
    return(
      <div className="lesson-page">
        <h3>{this.props.selectedAssignment.name}</h3>
        <div className="lesson-details">
          <p className="lesson-info"><span>Description: </span>{this.props.selectedAssignment.description}</p>
          <p className="lesson-info"><span>Assigned On: </span>{moment.utc(this.props.selectedAssignment.assigned_on).format('MMMM Do, YYYY')}</p>
          <p className="lesson-info"><span>Due On: </span>{moment.utc(this.props.selectedAssignment.due_on).format('MMMM Do, YYYY')}</p>
        </div>
        <h4>Resources</h4>
        <div className="lesson-resources">
          <a className="resource-folder-link" onClick={(evt) => this.openLinkInNewTab(evt, this.props.selectedAssignment.url)}>Assignment<br />Materials</a>
        </div>
      </div>
    )
  }
}

export default AssignmentShow
