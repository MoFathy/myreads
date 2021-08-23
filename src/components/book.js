import React, { Component } from "react";

export default class Book extends Component {
    
  render() {
     const {item} = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:`url(${item.imageLinks.thumbnail})`,
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={(e) => this.props.handleSelect(item, e.target.value)} value={item.shelf}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{item.title && item.title}</div>
          <div className="book-authors">{item.authors && item.authors[0]}</div>
        </div>
      </li>
    );
  }
}
