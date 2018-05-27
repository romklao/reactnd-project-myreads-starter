import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import ListBooks from './Components/ListBooks';
import SearchBooks from './Components/SearchBooks';

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    searchResults: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    });
  }

  doChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        console.log('books', books)
        this.setState({ books: books })
      });
    });
  }

  doHideSearchPage = () => {
    this.setState({ showSearchPage: false })
  }

  doSearchBooks = (query) => {
    BooksAPI.search(query)
    .then((results) => {
      console.log('results', results)
      if (results === undefined || results.error !== undefined) {
        this.setState({ searchResults: [] })
      } else {
        this.setState({ searchResults: results })
      }
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            searchResults={ this.state.searchResults }
            hideSearchPage={ this.doHideSearchPage }
            searchBookResults={ this.doSearchBooks }
            changeShelf={ this.doChangeShelf }
          />
        ) : (
          <div className="list-books">
            <ListBooks
              books={ this.state.books }
              changeShelf={ this.doChangeShelf }
            />
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
