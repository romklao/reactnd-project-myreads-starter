import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/* TODO: This renders all books in a shelf */
function BookShelf(props) {

  const { books } = props
    /* Loop through a shelf to present all books in it */
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <Book
              book={ book }
              key={ index }
              changeShelf={ props.changeShelf }
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired
}

export default BookShelf