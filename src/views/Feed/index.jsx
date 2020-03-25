import React, { Component } from "react";

import Post from "../../components/Post";

import "./styles.css";

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </section>
    );
  }
}

export default Feed;
