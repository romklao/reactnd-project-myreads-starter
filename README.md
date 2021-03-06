# MyReads Project

This project was created to display books in each category. The application allows a user to search for books. Futhermore, it lets a user to change or to select books to categorize as read, currently reading, or want to read. The project emphasizes using React to build the application and provides a BOOKS API server and client library that assist a user to interact and to get benefit from applying the app.

---

<div  align="center" class="readme-image">
	<img src="public/live-image.png" alt="neighborhood map" height="520px">
</div>

---

## Run Online Project

Click the link following https://pure-eyrie-49430.herokuapp.com/ to see the webpage.

## Requirements
* npm

## How to Run:

1. Clone https://github.com/romklao/reactnd-project-myreads-starter.git the Repository.
2. Run `npm install` to install the project dependencies.
3. Run the app using `npm start`.
4. App can be seen at: `localhost:3000`.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


