import React, { Component } from 'react'
import axios from 'axios'

class Assignments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assignments: []
    }
    axios.get('http://localhost:3000/courses/1/assignments')
      .then((response) => {
        this.setState({
          assignments: response.data.assignments
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    console.log(this)
    let assignments = this.state.assignments.map((assignment) => {
      return(
        <div className="assignment-icon">
          <h2>{assignment.name}</h2>
        </div>
      )
    })
    return(
      <div className="assignments-gallery">
        {assignments}
      </div>
    )
  }
}

export default Assignments
