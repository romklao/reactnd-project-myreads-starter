import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookDetailsModal from './BookDetailsModal'

/* TODO: This shows a book's details when BOOKS API is fetch to get books in the list
 * or is fetch to search for books
 */
class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
  /* Set the state for a book's details modal */
  state = {
    showBookDetailsModal: false
  }
  /* TODO: Change a book shelf when a user selects or changes a book shelf */
  onChangeBookShelf = (e) => {
    const { book } = this.props;
    this.props.changeShelf(book, e.target.value)
  }
  /* TODO: Set a book's details modal state to false when wanting to hide the modal */
  hideBookDetails = () => {
    if (this.state.showBookDetailsModal === true) {
      this.setState({ showBookDetailsModal: false })
    }
  }
  /* TODO: Set a book's details modal state to true when wanting to show the modal */
  showBookDetails = () => {
    this.setState({ showBookDetailsModal: true })
  }

  render() {
    const { book, books } = this.props
    let currentShelf = 'none'
    let bookCover = book.imageLinks

    /* Loop through books in the main page to find
     * weather they have the same id as books in the search page.
     * If they are, set their current shelves to books on the search page
     * so their books shelves are shown whenever the books appear on the search page
     * If their books id are not the same, set the books shelves on the search page  to none.
     */
    books.forEach((item) => {
      if (item.id === book.id) {
        currentShelf = item.shelf
      }
    })

    /* Set book cover to none if it is undefined */
    if (bookCover === undefined) {
      bookCover = 'none'
    }

    return (
    /* Show a modal,an extra book's details, when the showBookDetailsModal is true
     * Otherwise show a book's cover, title and author
     */
      <li>
        {this.state.showBookDetailsModal === true ? (
          <BookDetailsModal
            book={ book }
            hideModal={ this.hideBookDetails }
          />
        ) : (
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193,
                backgroundImage: `url(${bookCover.smallThumbnail})` }}
                onClick={() => this.showBookDetails()}>
              </div>
              <div className="book-shelf-changer">
                {/*
                  Get a book shelf when a user changes the shelf
                */}
                <select onChange={this.onChangeBookShelf} value={ currentShelf }>
                  <option value="moveTo" disabled>Move to...</option>
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

export default Book


