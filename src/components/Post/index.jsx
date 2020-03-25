import React, { Component } from "react";

import Api from "../../services/api";

import more from "../../assets/icons/more.svg";
import like from "../../assets/icons/like.svg";
import send from "../../assets/icons/send.svg";
import comment from "../../assets/icons/comment.svg";

import "./styles.css";

class Post extends Component {
  handleLike = async _id => {
    await Api.put(`/posts/${_id}/likes`);
  };

  render() {
    return (
      <article className="post">
        <header>
          <div className="info">
            <span>{this.props.post.author}</span>
            <span className="place">{this.props.post.place}</span>
          </div>

          <img src={more} alt="Mais"></img>
        </header>

        <img
          className="image"
          src={`${process.env.REACT_APP_API_URL}/files/${this.props.post.image}`}
          alt={this.props.post.image}
        ></img>

        <footer>
          <div className="actions">
            <img
              src={like}
              alt="like"
              onClick={_ => this.handleLike(this.props.post._id)}
            ></img>
            <img src={comment} alt="comment"></img>
            <img src={send} alt="send"></img>
          </div>

          <strong>{this.props.post.likes} curtidas</strong>

          <p className="desc">
            {this.props.post.description}
            <span className="hashtag">{this.props.post.hashtags}</span>
          </p>
        </footer>
      </article>
    );
  }
}

export default Post;
