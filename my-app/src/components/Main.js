import React, { Component } from "react";
import { Route } from "react-router";
import Book from "./Book";
export default class Main extends Component {
  render() {
    return (
      <div>
        <main>
          <Route path='/' component={Book} />
        </main>
      </div>
    );
  }
}
