import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import ListBooks from './Components/ListBooks';
import SearchBooks from './Components/SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
        <Route exact path='/' render={() => (
          <ListBooks
            books={ this.state.books }
            changeShelf={ this.doChangeShelf }
            allowSearchPage={ this.doShowSearchPage }
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            searchResults={ this.state.searchResults }
            searchBooks={ this.doSearchBooks }
            changeShelf={ this.doChangeShelf }
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
