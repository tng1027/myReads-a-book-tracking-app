import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusLg } from 'react-icons/bs';

import { Bookshelf } from "../components/Bookshelf";
import { RoundButton } from "../components/Core/Button";

export const ShelfTypes = {
    'currentlyReading': 'Currently Reading',
    'wantToRead': 'Want to Read',
    'read': 'Read',
}

export const HomePage = ({ books, onModifyBookshelf }) => {
    const navigate = useNavigate();

    const listBookshelf = useMemo(() => books.reduce((prev, book) => ({
        ...prev,
        [book.shelf]: [...(prev[book.shelf] || []), book]
    }), {}), [books]);

    return (<>
        {Object.keys(listBookshelf).map((key) => <Bookshelf key={key} title={ShelfTypes[key]} bookshelf={listBookshelf[key]} onModifyBookshelf={onModifyBookshelf} />)}
        <RoundButton onClick={() => navigate('/search')}><BsPlusLg /></RoundButton>
    </>)
}