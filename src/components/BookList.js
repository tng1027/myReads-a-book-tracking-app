import { Book } from "./Book"

export const BookList = ({ books, onChange }) => {
    return (
        <div className="books">
            {books.map((book) => <Book onChange={onChange} key={`book-${book.id}`} book={book} />)}
        </div>
    )
}