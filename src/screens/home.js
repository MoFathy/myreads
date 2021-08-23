import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import Book from '../components/book';

export default class Home extends Component{
    
    render(){
        const {books} = this.props
        const currentlyReadingBooks = books.filter(book => book.shelf === "currentlyReading");
        const wantToReadBooks = books.filter(book => book.shelf === "wantToRead"); 
        const readBooks = books.filter(book => book.shelf === "read"); 

        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                          {currentlyReadingBooks.length ? currentlyReadingBooks.map(book => <Book key={book.id} item={book} handleSelect={this.props.handleSelect}/>) : <h3>No Books in this shelf</h3>}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {wantToReadBooks.length ? wantToReadBooks.map(book => <Book key={book.id} item={book} handleSelect={this.props.handleSelect}/>) : <h3>No Books in this shelf</h3>}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {readBooks.length ? readBooks.map(book => <Book key={book.id} item={book} handleSelect={this.props.handleSelect}/>) : <h3>No Books in this shelf</h3>}

                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                    <Link to="/search" > Add a book</Link>
              </div>
            </div>
          );
    }
}
