import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import SignUp from './SignUp'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Username submitted were: ' + this.state.username + ' and ' + this.state.password)
    event.preventDefault();
  }

  render() {
    return (
      <Router>
        <div>
          <h1>[Monument App]</h1>
          <h2>Sign In</h2>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.username} placeholder='username' onChange={this.handleUsername} />
            <br />
            <input type='text' value={this.state.password} placeholder='password' onChange={this.handlePassword}/>
            <br />
            <input type='submit' value='Submit' />
          </form>
          <Link to='/SignUp'>Sign Up</Link>
          <Route path="/SignUp" component={SignUp} />
        </div>
      </Router>
    )
  }
}

export default Home;
