import { RoundButton } from "./Core/Button";
import * as BookApi from '../api/booksAPI';

export const Book = ({ book, onChange }) => {
    const onSelectChange = (shelf) => {
        const updateBook = async () => {
            await BookApi.update(book, shelf);
            if (onChange) onChange();
        }

        updateBook();
    }

    return <div className="book">
        <div className="book-cover">
            <img src={book?.imageLinks?.smallThumbnail} alt={book?.title} />
            <RoundButton >
                <select defaultValue={book.shelf} className="book-status-select" onChange={(e) => onSelectChange(e.target.value)}>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </RoundButton>
        </div>
        <div className="book-title"><h5>{book?.title}</h5></div>
        <div className="book-author"><h5>{book?.authors?.join(', ')}</h5></div>
    </div >
}