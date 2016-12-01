import React, { Component } from 'react'
import axios from 'axios'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: '',
      currentUser: {}
    }
  }

  handleEmailInput(e) {
    this.setState({
      signInEmail: e.target.value
    })
  }

  handlePasswordInput(e) {
    this.setState({
      signInPassword: e.target.value
    })
  }

  handleSignIn(e) {
    e.preventDefault()
    axios.post('http://localhost:3000/auth_user', {
      email: this.state.signInEmail,
      password: this.state.signInPassword
    })
    .then((response) => {
      localStorage.setItem('teachSmartUser', JSON.stringify(response.data))
      this.props.onUserAuth(JSON.parse(localStorage.getItem('teachSmartUser')).user)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return(
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={(e) => this.handleSignIn(e)}>
          Email: <input type="text" onChange={(e) => this.handleEmailInput(e)}/> <br />
          Password: <input type="password" onChange={(e) => this.handlePasswordInput(e)}/> <br />
          <input type="submit"/> <br />
        </form>
      </div>
    )
  }
}

export default LoginForm
