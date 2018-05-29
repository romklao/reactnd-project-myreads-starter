import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListBooks from './Components/ListBooks'
import SearchBooks from './Components/SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

/* TODO: Render all pages in the app */
class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }
  /* This method is called once all children Elements and
   * Component instances are mounted onto the Native UI.
  */
  componentDidMount() {
    this.fetchBooksDetails()
  }
  /* TODO: Fetch books details from BOOKS API */
  fetchBooksDetails = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }
  /* TODO: Update shelf when a user selects or changes to a difference shelf
   * When a book is moved from one shelf to another we need
   * to update the local state of the book after we make an update API call
   * When a new book(not on shelf) is added from search page
   * we need to concat the new book to the existing books state after you make an update API call
  */
  doChangeShelf = (book, value) => {
    BooksAPI.update(book, value).then(() => {
      book.shelf = value
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    return (
      <Router>
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
              changeShelf={ this.doChangeShelf }
              books={ this.state.books }
            />
          )}/>
        </div>
      </Router>
    )
  }
}

export default BooksApp;
