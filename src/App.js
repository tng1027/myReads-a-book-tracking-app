import { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { NotFound } from './layouts/NotFound';

import * as BooksApi from './api/booksAPI';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      setBooks(await BooksApi.getAll());
    };

    getAllBooks();
  }, []);

  const modifyBookshelf = useCallback(async (book, shelf) => {
    try {
      await BooksApi.update(book, shelf); // update book on server

      if (shelf === 'none') {
        // remove book
        return setBooks((prev) => prev.filter((b) => b.id !== book.id));
      }

      // add book
      if (!books.some(b => b.id === book.id)) {
        return setBooks((prev) => [...prev, { ...book, shelf }]);
      }

      // update book state
      return setBooks((prev) => prev.map((p) => {
        if (p.id === book.id) {
          p.shelf = shelf;
        }
        return p;
      }));
    } catch { }
  }, [books]);

  return (
    <div className='main-app'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage books={books} onModifyBookshelf={modifyBookshelf} />} />
          <Route path="search" element={<SearchPage books={books} onModifyBookshelf={modifyBookshelf} />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
