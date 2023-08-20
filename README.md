# MyReads - A Book Tracking Web App
MyReads is created using React.js as a part of the [Udacity's React Nanodegree program](https://learn.udacity.com/nanodegrees/nd019).

## About
A single-page app (navigation happens without the need to refresh pages), and it represents a virtual bookcase to store your books and track what you're reading.

User can manage books and separate into 3 shelves. MyReads supports 3 types of bookshelf:
- Currently Reading
- Want to Read
- Read

User can search book by title, author or ISBN

## Development
A static example of the CSS and HTML markup was provided, and a backend API to communicate with a Backend Server from Udacity for book information and long term storage.
Then I added interactivity to the app by refactoring the static code into react components, following DOT (Do One Thing) rule.

### Backend Server

[`BooksAPI.js`](src/BooksAPI.js) contains following methods to perform necessary operations on the backend:

* `getAll` To get all the books from the API
* `update` Update shelf information of the book
* `search` Search book in the database

## Installation

Clone the repository, change directories, and use NPM to install the dependencies.
- Clone this Git repo.
- Run `npm install` or `yarn install` in the project directory to install dependencies.

## Start
- The project can be run with `npm start` or `yarn start`
- Then it can be viewed in the browser at [http://localhost:3000](http://localhost:3000)

## Important
The backend API is built by Udacity and **only a fixed set of search terms are supported.** 
Supported search terms can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the API.