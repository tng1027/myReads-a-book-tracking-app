import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusLg } from 'react-icons/bs';

import * as BooksApi from "../api/booksAPI";
import { Bookshelf } from "../components/Bookshelf";
import { RoundButton } from "../components/Core/Button";

export const ShelfTypes = {
    'currentlyReading': 'Currently Reading',
    'wantToRead': 'Want to Read',
    'read': 'Read',
}

export const HomePage = () => {
    const navigate = useNavigate();

    const [books, setBooks] = useState([]); // [books, setBooks

    const getAllBooks = useCallback(async () => {
        setBooks(await BooksApi.getAll());
    }, []);

    useEffect(() => {
        getAllBooks();
    }, [getAllBooks]);

    const listBookshelf = useMemo(() => books.reduce((prev, book) => ({
        ...prev,
        [book.shelf]: [...(prev[book.shelf] || []), book]
    }), {}), [books]);

    const onBookChange = () => {
        getAllBooks();
    }

    return (<>
        {Object.keys(listBookshelf).map((key) => <Bookshelf title={ShelfTypes[key]} bookshelf={listBookshelf[key]} onBookChange={() => onBookChange()} />)}
        <RoundButton onClick={() => navigate('/search')}><BsPlusLg /></RoundButton>
    </>)
}