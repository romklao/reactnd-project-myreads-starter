import React, { Component } from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books } = this.props;

    return (
      <div>
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
      </div>
    )
  }
}

export default ListBooks;
