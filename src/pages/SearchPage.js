import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from 'react-icons/bs'

import * as BooksApi from "../api/booksAPI";
import { HyperlinkButton } from "../components/Core/Button";
import { BookList } from "../components/BookList";

export const SearchPage = ({ books, onModifyBookshelf }) => {
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState("");
    const [searchBooks, setSearchBooks] = useState([]);

    useEffect(() => {
        const searchBook = async () => {
            try {
                const searchResults = await BooksApi.search(searchValue);
                setSearchBooks(!searchResults.error ? searchResults.map(sr => {
                    const foundBook = books.find(b => b.id === sr.id) ?? sr;
                    return {
                        ...foundBook,
                        shelf: !foundBook.shelf ? 'none' : foundBook.shelf
                    }
                }) : []);
            } catch {
                setSearchBooks([]);
            }
        }

        const timeout = setTimeout(() => {
            searchBook()
        }, 300)

        return () => clearTimeout(timeout);
    }, [books, searchValue]);

    return <>
        <div className="search-books-container">
            <HyperlinkButton onClick={() => navigate(-1)}><BsArrowLeftShort /></HyperlinkButton>
            <input type="text" placeholder="Search by title, author, ISBN" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div className="search-books-results">
            <BookList books={searchBooks} onModifyBookshelf={onModifyBookshelf} />
        </div>
    </>;
}