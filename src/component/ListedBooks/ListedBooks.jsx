
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBook, getStoredBooks, saveBook } from "../utility/localStorage";
import ListedBook from "./ListedBook";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
  
  const [loaderData, setLoaderData] = useState([]);
  useEffect(() => {
    fetch('Books.json')
    .then(res => res.json())
    .then(data => {
      setLoaderData(data)
      // console.log(data)
    })
   
  }, [])

 
  
//  const books = useLoaderData();
 
 const [selectedBooks, setSelectedBooks] = useState([]);
 const [wishedBooks, setWishedBooks] = useState([]);


 useEffect(() => {
  const storedBookIds = getStoredBook();
  // console.log(storedBookIds);
  const readedBooks = loaderData?.filter(book => storedBookIds?.includes(book.Id))
  // console.log(readedBooks)
  // console.log(books)
  if(readedBooks){
    setSelectedBooks(readedBooks)
  } 
  // console.log(selectedBooks);
 },[loaderData])

 useEffect(() => {
  const storedBooksIds = getStoredBooks();
  // console.log(storedBookIds);
  const readedBooks = loaderData?.filter(book => storedBooksIds?.includes(book.Id))
  // console.log(readedBooks)
  // console.log(books)
  if(readedBooks){
    setWishedBooks(readedBooks)
  } 
  // console.log(selectedBooks);
 },[loaderData])

  


  
  return (
    <div>
      <Tabs>
    <TabList>
      <Tab>Read</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      {
        selectedBooks.map(book => (
          <div key={book.Id}>
            <h2>{book.author}</h2>
          </div>
        ))
      }
    </TabPanel>
    <TabPanel>
    {
        wishedBooks.map(book => (
          <div key={book.Id}>
            <h2>{book.author}</h2>
          </div>
        ))
      }
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ListedBooks;