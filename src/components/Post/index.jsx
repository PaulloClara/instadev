import React from "react";

import more from "../../assets/icons/more.svg";
import like from "../../assets/icons/like.svg";
import send from "../../assets/icons/send.svg";
import comment from "../../assets/icons/comment.svg";

import "./styles.css";

export default ({ post }) => (
  <article className="post">
    <header>
      <div className="info">
        <span>{post.author}</span>
        <span className="place">{post.place}</span>
      </div>

      <img src={more} alt="Mais"></img>
    </header>

    <img
      className="image"
      src={`${process.env.REACT_APP_API_URL}/files/${post.image}`}
      alt={post.image}
    ></img>

    <footer>
      <div className="actions">
        <img src={like} alt="like"></img>
        <img src={comment} alt="comment"></img>
        <img src={send} alt="send"></img>
      </div>

      <strong>{post.likes} curtidas</strong>

      <p className="desc">
        {post.description}
        <span className="hashtag">{post.hashtags}</span>
      </p>
    </footer>
  </article>
);
