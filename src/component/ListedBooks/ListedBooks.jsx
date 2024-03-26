
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBook, getStoredBooks, saveBook } from "../utility/localStorage";
import ListedBook from "./ListedBook";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
  
 const books = useLoaderData();
 const [selectedBooks, setSelectedBooks] = useState([]);
 const [wishedBooks, setWishedBooks] = useState([]);


 useEffect(() => {
  const storedBookIds = getStoredBook();
  if(books?.length > 0){
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

 useEffect(() => {
  const storedBooksIds = getStoredBooks();
  if(books?.length > 0){
    const Booked = [];
    for(const id of storedBooksIds){
      const book = books.find(book => book.Id == id);
      if(book){
        Booked.push(book)
      }
    }
    setWishedBooks(Booked);
  }
 },[books])

  


  
  return (
    <div>
      <Tabs>
    <TabList>
      <Tab>Read</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      {
        selectedBooks.map(book => <div><h2>Hello World</h2></div>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ListedBooks;