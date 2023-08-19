import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from 'react-icons/bs'

import * as BooksApi from "../api/booksAPI";
import { HyperlinkButton } from "../components/Core/Button";
import { BookList } from "../components/BookList";

export const SearchPage = () => {
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState("");
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const searchBook = async () => {
            setBooks(await BooksApi.search(searchValue));
        }

        if (searchValue) searchBook();
    }, [searchValue])

    return <>
        <div className="search-books-container">
            <HyperlinkButton onClick={() => navigate(-1)}><BsArrowLeftShort /></HyperlinkButton>
            <input type="text" placeholder="Search by title, author, ISBN" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div className="search-books-results">
            <BookList books={books} />
        </div>
    </>;
}