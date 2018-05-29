import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

/* TODO: Show the categorized list book */
function ListBooks(props) {

  const { books, changeShelf } = props;
  let bookShelvesNames = [
    {type: 'currentlyReading', title: 'Currently Reading'},
    {type: 'read', title: 'Read'},
    {type: 'wantToRead', title: 'Want to Read'}
  ]

  /* Use filter to categorize the shelves and present all books in each shelf */
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookShelvesNames.map((bookShelf, index) => (
          <BookShelf
            books={books.filter((book) => (book.shelf === bookShelf.type))}
            key={ index }
            title={ bookShelf.title }
            changeShelf={ changeShelf }
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
