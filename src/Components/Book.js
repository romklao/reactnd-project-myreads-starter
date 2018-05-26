import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  onChangeBookShelf = (e) => {
    const { book } = this.props;
    this.props.changeShelf(book, e.target.value);
  }

  render() {
    const { book } = this.props;
    console.log('this.props', this.props)

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
            <div className="book-shelf-changer">
              <select onChange={this.onChangeBookShelf} value={ book.shelf }>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{ book.title }</div>
          <div className="book-authors">{ book.authors[0] }</div>
        </div>
      </li>
    );
  }
}

export default Book;


