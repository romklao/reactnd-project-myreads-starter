import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookDetailsModal from './BookDetailsModal';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    showBookDetailsModal: false
  }

  onChangeBookShelf = (e) => {
    const { book } = this.props;
    this.props.changeShelf(book, e.target.value);
  }

  hideBookDetailsModal = () => {
    if (this.state.showBookDetailsModal === true) {
      this.setState({ showBookDetailsModal: false })
    }
  }

  render() {
    const { book } = this.props;
    console.log('this.props', this.props)
    let currentShelf = book.shelf;
    let bookCover = book.imageLinks;

    if(currentShelf === undefined) {
      currentShelf = 'none';
    }

    if(bookCover === undefined) {
      bookCover = 'none';
    }

    return (
      <li>
        {this.state.showBookDetailsModal === true ? (
          <BookDetailsModal
            book={ book }
            hideModal={ this.hideBookDetailsModal }
          />
        ) : (
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193,
                backgroundImage: `url(${bookCover.smallThumbnail})` }}
                onClick={() => this.setState({ showBookDetailsModal: true })}>
              </div>
              <div className="book-shelf-changer">
                <select onChange={this.onChangeBookShelf} value={ currentShelf }>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{ book.title }</div>
            <div className="book-authors">{book.authors ? book.authors[0] : ''}</div>
          </div>
        )}
      </li>
    );
  }
}

export default Book;


