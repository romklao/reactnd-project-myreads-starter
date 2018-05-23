import React, { Component } from 'react';

class ListBooks extends Component {
  state = {
      query: ''
  }

  render() {
    const { books } = this.props;
    let currentlyReadingBooks = [],
        wantToReadBooks = [],
        readBooks = [];

    books.map((book) => {
      if (book.shelf === 'currentlyReading') {
        currentlyReadingBooks.push(book);
      } else if (book.shelf === 'wantToRead') {
        wantToReadBooks.push(book);
      } else if (book.shelf === 'read') {
        readBooks.push(book);
      }
    });
  }

}