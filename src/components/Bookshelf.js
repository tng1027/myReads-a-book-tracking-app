import { BookList } from "./BookList"

export const Bookshelf = ({ title, bookshelf, onBookChange }) => {
    return (
        <div className="bookshelf">
            <div className="bookshelf-title"><h2>{title}</h2></div>
            <BookList books={bookshelf} onChange={onBookChange} />
        </div>
    )
}