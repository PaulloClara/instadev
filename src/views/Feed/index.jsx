import React, { Component } from "react";

import Api from "../../services/api";
import Post from "../../components/Post";

import "./styles.css";

class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    const response = await Api.get("/posts");

    this.setState({ feed: response.data });
  }

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          <Post key={post._id} post={post}></Post>
        ))}
      </section>
    );
  }
}

export default Feed;
