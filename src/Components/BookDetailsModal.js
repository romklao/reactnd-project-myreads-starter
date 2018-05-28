import React, { Component} from 'react';
import PropTypes from 'prop-types';

/* TODO: This class renders the extra book details when its book cover is clicked */
class BookDetailsModal extends Component {
  /* Specify the types of props */
  static propTypes = {
    hideModal: PropTypes.func.isRequired
  }

  render() {
    /* Declare variables to props */
    const { book, hideModal } = this.props;

    let bookCategories = book.categories.toString().charAt(0).toUpperCase() + book.categories.toString().slice(1).toLowerCase()

    return (
      <div>
        <div className="modal-overlay"></div>
        <div className="modal">
          { /* Hide the modal when the close button is clicked */ }
          <button className="close-modal" onClick={() => hideModal()}>X</button>
          <div className="modal-guts">
            <ul className="book-details">
              <li>Title: <span className="grey-text">{ book.title ? book.title : '' }</span></li>
              <li>Author: <span className="grey-text">{ book.authors ? book.authors[0] : '' }</span></li>
              <li>Category: <span className="grey-text">{ book.categories ? bookCategories : '' }</span></li>
              <li>Page Count: <span className="grey-text">{ book.pageCount ? book.pageCount : '' }</span></li>
            </ul>
            <p className="book-description">{ book.description ? 'DESCRIPTION' : '' }</p>
            <p>{ book.description ? book.description : '' }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BookDetailsModal;

