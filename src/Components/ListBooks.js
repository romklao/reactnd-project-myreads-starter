import React, { Component } from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* TODO: Show the categorized list book */
class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books } = this.props;
    let bookShelvesNames = ['currentlyReading', 'read', 'wantToRead']
    let titleNames = {
      currentlyReading: 'Currently Reading',
      read: 'Read',
      wantToRead: 'Want to Read'
    }

    /* Use filter to categorize the shelves and present all books in each shelf */
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {bookShelvesNames.map((bookShelf) => (
            <BookShelf
              books={books.filter((book) => (book.shelf === bookShelf))}
              title={titleNames[bookShelf]}
              changeShelf={this.props.changeShelf}
            />
          ))}
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
