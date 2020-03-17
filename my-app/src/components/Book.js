import React, { Component } from "react";
import axios from "axios";
export default class Book extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios
      .get("http://localhost:5000/books/")
      .then((response) => {
        this.setState({ books: response.data._embedded });
        console.log(this.state.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <div></div>;
  }
}
