import React from "react";

import more from "../../assets/icons/more.svg";
import like from "../../assets/icons/like.svg";
import send from "../../assets/icons/send.svg";
import comment from "../../assets/icons/comment.svg";

import "./styles.css";

export default () => (
  <article className="post">
    <header>
      <div className="info">
        <span>Paullo Clara</span>
        <span className="place">Teresina - PI</span>
      </div>

      <img src={more} alt="More"></img>
    </header>

    <img
      className="image"
      src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      alt=""
    ></img>

    <footer>
      <div className="actions">
        <img src={like} alt="like"></img>
        <img src={comment} alt="comment"></img>
        <img src={send} alt="send"></img>
      </div>

      <strong>100 curtidas</strong>

      <p className="desc">
        Meu primeiro post!
        <span className="hashtag">#react #omnistack</span>
      </p>
    </footer>
  </article>
);
