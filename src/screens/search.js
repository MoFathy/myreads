import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { search } from "../BooksAPI";
import Book from "../components/book";

export default class Search extends Component {
  state = { query: "", searchResault: [] };
  handleSearch = (e) => {
    let query = e.target.value.toLowerCase();
    this.setState({ ...this.state, query: query });
    if (query) {
      search(query).then((response) => {
        this.setState({ ...this.state, searchResault: response });
      });
    }
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onInput={this.handleSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResault.length && this.state.query !== "" ? (
              this.state.searchResault.map((book) => (
                <Book
                  key={book.id}
                  item={this.props.books.find(item => item.id === book.id) || book}
                  handleSelect={this.props.handleSelect}
                />
              ))
            ) : this.state.query !== "" ? (
              <h3>No Books matches your search</h3>
            ) : (
              <h3>Start search</h3>
            )}
          </ol>
        </div>
      </div>
    );
  }
}
