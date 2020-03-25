import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import Api from "../../services/api";
import Post from "../../components/Post";

import "./styles.css";

class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    this.registerToSocket();
    const response = await Api.get("/posts");

    this.setState({ feed: response.data });
  }

  registerToSocket = _ => {
    const socket = socketIOClient(process.env.REACT_APP_API_URL);

    socket.on("post", newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    socket.on("like", likedPost => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === likedPost._id ? likedPost : post
        )
      });
    });
  };

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
