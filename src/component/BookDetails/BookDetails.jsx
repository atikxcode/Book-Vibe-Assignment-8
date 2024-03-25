
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const {id} = useParams();
  const [book, setBook] =  useState();

  useEffect(() => {
    const idInt = parseInt(id)
    console.log(idInt)
    console.log(id)
   console.log(books)
  

   
    const bookData = books.find(book => book.Id === idInt);
    setBook(bookData)
    console.log(book)
       
  }, [books, id, book])
  
   

  
  return (
    <div>
      
    </div>
  );
};

export default BookDetails;