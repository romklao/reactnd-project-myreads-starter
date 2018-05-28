import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

/* TODO: This renders all books in a shelf */
class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books } = this.props;
    /* Loop through a shelf to present all books in it */
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
              <Book
                book={ book }
                key={ index }
                changeShelf={this.props.changeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
