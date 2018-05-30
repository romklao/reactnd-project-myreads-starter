import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

/* TODO: Search for books from BOOKS API */
class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchBookResults: []
  }

  onSearchBooks = (e) => {
    const query = e.target.value.trim()
    this.setState({ query })

    if (query) {
      BooksAPI.search(query).then((searchBookResults) => {
        if (searchBookResults === undefined || searchBookResults.error !== undefined) {
          this.setState({ searchBookResults: [] })
        } else {
          this.setState({ searchBookResults })
        }
      })
    } else {
        this.setState({ searchBookResults: [] })
    }
  }

  render() {

    const { searchBookResults, query } = this.state
    const { books, changeShelf } = this.props

    /* Create a mapping from book id to the shelf the book lives in */
    let bookIdToShelfMap = {}
    for (let book of books) {
      bookIdToShelfMap[book.id] = book.shelf
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
            >Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={ query }
              onChange={this.onSearchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {/* Display all search results if the API return datas otherwise show no results */}
          <ol className="books-grid">
            {searchBookResults.length > 0 ? (
              searchBookResults.map((book, index) => (
              <Book
                book={ book }
                shelf={ bookIdToShelfMap[book.id] }
                key={ index }
                changeShelf={ changeShelf }
              />
              ))
            ) : (
              <div className="no-results"><h1>No Results!</h1></div>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks