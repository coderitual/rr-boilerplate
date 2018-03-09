import React, { Component } from 'react';
import image from '../../assets/image.jpeg';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home page</h1>
        <img src={image} alt="home" />
      </div>
    );
  }
}

export default Home;
