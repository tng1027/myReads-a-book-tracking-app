import { BookList } from "./BookList"

export const Bookshelf = ({ title, bookshelf, onModifyBookshelf }) => {
    return (
        <div className="bookshelf">
            <div className="bookshelf-title"><h2>{title}</h2></div>
            <BookList books={bookshelf} onModifyBookshelf={onModifyBookshelf} />
        </div>
    )
}