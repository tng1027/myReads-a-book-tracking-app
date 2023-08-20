import { Book } from "./Book"

export const BookList = ({ books, onModifyBookshelf }) => {
    return (
        <div className="books">
            {books.map((book) => <Book onModifyBookshelf={onModifyBookshelf} key={`book-${book.id}`} book={book} />)}
        </div>
    )
}