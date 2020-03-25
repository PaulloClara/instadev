import React, { Component } from "react";

import Api from "../../services/api";

import "./styles.css";

class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    hashtags: "",
    description: ""
  };

  handleSubmit = async evt => {
    evt.preventDefault();

    const data = new FormData();

    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtags", this.state.hashtags);

    await Api.post("/posts", data);

    this.props.history.push("/");
  };

  handleImageChange = evt => {
    this.setState({ image: evt.target.files[0] });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange}></input>

        <input
          type="text"
          name="author"
          placeholder="Autor"
          onChange={this.handleChange}
          value={this.state.author}
        ></input>
        <input
          type="text"
          name="place"
          placeholder="Local"
          onChange={this.handleChange}
          value={this.state.place}
        ></input>
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          onChange={this.handleChange}
          value={this.state.description}
        ></input>
        <input
          type="text"
          name="hashtags"
          placeholder="Hashtag"
          onChange={this.handleChange}
          value={this.state.hashtags}
        ></input>

        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;
