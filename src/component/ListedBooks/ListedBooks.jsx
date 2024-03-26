
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBook, saveBook } from "../utility/localStorage";
import ListedBook from "./ListedBook";


const ListedBooks = () => {
  
 const books = useLoaderData();
 const [selectedBooks, setSelectedBooks] = useState([]);


 useEffect(() => {
  const storedBookIds = getStoredBook();
  if(books.length > 0){
    const Booked = [];
    for(const id of storedBookIds){
      const book = books.find(book => book.Id == id);
      if(book){
        Booked.push(book)
      }
    }
    setSelectedBooks(Booked);
  }
 },[books])

  


  
  return (
    <div>
      {
        selectedBooks.map(book => <ListedBook key={book.Id} book={book}></ListedBook>)
      }
    </div>
  );
};

export default ListedBooks;