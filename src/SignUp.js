import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.username} placeholder='username' onChange={this.handleUsername} />
          <br />
          <input type='text' value={this.state.password} placeholder='password' onChange={this.handlePassword}/>
          <br />
          <input type='text' value={this.state.confirm_password} placeholder='confirm password' onChange={this.handleConfirmPassword}/>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignUp;
