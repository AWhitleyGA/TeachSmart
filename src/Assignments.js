import React, { Component } from 'react'
import axios from 'axios'
import './Assignments.css'

class Assignments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assignments: []
    }
    axios.get(`http://localhost:3000/courses/${this.props.selectedCourse.id}/assignments`, {
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('teachSmartUser')).auth_token,
      },
      user: this.props.currentUser
    })
    .then((response) => {
      this.setState({
        assignments: response.data
      })
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  render() {
    let assignments = this.state.assignments.map((assignment) => {
      return(
        <div className="assignment-icon">
          <h2>{assignment.name}</h2>
        </div>
      )
    })
    return(
      <div className="assignments-gallery">
      <h3>Assignments</h3>
        {assignments}
      </div>
    )
  }
}

export default Assignments
