import React, { Component } from 'react';

// Load in Comment Component
import Comment from './Comment.js';
import Author from './Author.js';

class Blog extends Component {
  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }

  changeBody(e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  render() {
    return (
      <div class='Post'>
        <h1>{this.props.title}</h1>
        {this.props.authors.map(function (author) {
          return <Author body={author} />
        })}
        <p>{this.state.body}</p>
        <h3>Comments:</h3>
        <Comment body={this.props.comments[0]} />
        <button onClick={(e) => this.changeBody(e)}>Edit Body</button>

      </div>
    );
  }
}

export default Blog;
