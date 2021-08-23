import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { getAll, update } from "./BooksAPI";
import Home from "./screens/home";
import Search from "./screens/search";

class BooksApp extends React.Component {
  state = { books: [] };
  componentDidMount() {
    getAll().then((response) => this.setState({ books: response }));
  }

  handleSelect = (book, shelf) => {
    update(book, shelf).then((value) => {
      console.log(value);
      getAll().then((response) => this.setState({ books: response }));
    });
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Home books={this.state.books} handleSelect={this.handleSelect} />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search books={this.state.books} handleSelect={this.handleSelect} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
