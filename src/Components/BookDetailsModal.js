import React, { Component} from 'react';
import PropTypes from 'prop-types';

class BookDetailsModal extends Component {

  static propTypes = {
    hideModal: PropTypes.func.isRequired
  }

  render() {

    const { book, hideModal } = this.props;

    return (
      <div>
        <div className="modal-overlay"></div>
        <div className="modal">
          <button className="close-modal" onClick={() => hideModal()}>X</button>
          <div className="modal-guts">
            <ul className="book-details">
              <li>Title: <span className="grey-text">{ book.title ? book.title : '' }</span></li>
              <li>Author: <span className="grey-text">{ book.authors ? book.authors[0] : '' }</span></li>
              <li>Category: <span className="grey-text">{ book.categories ? book.categories : '' }</span></li>
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