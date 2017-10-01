import React, { Component } from 'react';
import './App.css';

import Local_events from './Local_events';
import Profile from './Profile';
import About from './About';
import Home from './Home';
import Blog from './Blog';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

let quest = {
  location: ['Fox Point', 'Downtown', 'East Side', 'Smith Hill'],
  images: ['https://i.imgur.com/oydon46.jpg', 'https://i.imgur.com/xKbUw25.jpg',
  'https://i.imgur.com/YiUbUVN.jpg', 'https://i.imgur.com/JvPOqMh.jpg']
}

var post = {
  title: 'Dinosaurs are awesome',
  authors: ['Stealthy Stegosaurus', 'Tiny T-Rex', 'Ivory Iguanodon'],
  body: 'Check out this hot bod!',
  comments: ['First!', 'Sensual', 'NSFW!']
}

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/Blog">Main Blog</Link>{' '}
            <Link to="/Profile">Profile</Link>{' '}
            <Link to="/Local_events">Events</Link>{' '}
            <Link to="/About">About Me</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/Blog" component={
            () => (<Blog title={post.title}
                      authors={post.authors}
                      body={post.body}
                      comments={post.comments} />
          )}/>
          <Route path="/Local_events" component={Local_events} />
          <Route path="/Profile" component={Profile} />
          <Route path="/About" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
