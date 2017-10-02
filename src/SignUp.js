import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password_confirm: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
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

  handleConfirm(event) {
    this.setState({
      password_confirm: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Stuffs submitted were: ' + this.state.username + ' and ' + this.state.password + ' and ' + this.state.password_confirm);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.username} placeholder='username' onChange={this.handleUsername} />
          <br />
          <input type='text' value={this.state.password} placeholder='password' onChange={this.handlePassword}/>
          <br />
          <input type='text' value={this.state.password_confirm} placeholder='confirm password' onChange={this.handleConfirm}/>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignUp;
