import { RoundButton } from "./Core/Button";

export const Book = ({ book, onModifyBookshelf }) => {
    const onSelectChange = (shelf) => {
        if (onModifyBookshelf) {
            onModifyBookshelf(book, shelf);
        }
    }

    return <div className="book">
        <div className="book-cover">
            <img src={book?.imageLinks?.smallThumbnail} alt={book?.title} />
            <RoundButton >
                <select defaultValue={book.shelf} className="book-status-select" onChange={(e) => onSelectChange(e.target.value)}>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </RoundButton>
        </div>
        <div className="book-title"><h5>{book?.title}</h5></div>
        <div className="book-author"><h5>{book?.authors?.join(', ')}</h5></div>
    </div >
}