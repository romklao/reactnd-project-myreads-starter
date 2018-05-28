import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

/* TODO: Show the categorized list book */
function ListBooks(props) {

  const { books } = props;
  const bookShelvesNames = ['currentlyReading', 'read', 'wantToRead']
  const titleNames = {
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
        {bookShelvesNames.map((bookShelf, index) => (
          <BookShelf
            books={books.filter((book) => (book.shelf === bookShelf))}
            key={ index }
            title={ titleNames[bookShelf] }
            changeShelf={ props.changeShelf }
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

export default ListBooks
