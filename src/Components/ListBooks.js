import React, { Component } from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={books.filter((book) => (book.shelf === 'currentlyReading'))}
            title="Currently Reading"
            changeShelf={this.props.changeShelf}
          />
          <BookShelf
            books={books.filter((book) => (book.shelf === 'read'))}
            title="Read"
            changeShelf={this.props.changeShelf}
          />
          <BookShelf
            books={books.filter((book) => (book.shelf === 'wantToRead'))}
            title="Want to Read"
            changeShelf={this.props.changeShelf}
          />
        </div>
        <div className="open-search">
          <Link
            to='/search'
            >Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
