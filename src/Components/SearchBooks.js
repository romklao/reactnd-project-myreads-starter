import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class SearchBooks extends Component {

  static propTypes = {
    hideSearchPage: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  onSearchBooks = (query) => {
    this.setState({ query: query.trim() })
    this.props.searchBookResults(query);
  }

  render() {

    const { searchResults, hideSearchPage } = this.props;
    const { query } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => hideSearchPage()}>Close</a>
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

export default SearchBooks;