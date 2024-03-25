import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() =>{
    fetch('Books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-3 gap-4">
        {
          books.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;