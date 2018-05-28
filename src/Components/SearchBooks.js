import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

/* TODO: Search for books from BOOKS API */
class SearchBooks extends Component {

  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
    searchResults: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  onSearchBooks = (query) => {
    this.setState({ query })
    this.props.searchBooks(query)
  }

  render() {

    const { searchResults } = this.props
    const { query } = this.state

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
              onChange={(e) => this.onSearchBooks(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {/* Display all search results if the API return datas otherwise show no results */}
          <ol className="books-grid">
            {searchResults.length > 0 ? (
              searchResults.map((searchResult, index) => (
              <Book
                book={ searchResult }
                key={ index }
                changeShelf={ this.props.changeShelf }
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