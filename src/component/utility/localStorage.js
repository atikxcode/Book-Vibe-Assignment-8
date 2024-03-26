const getStoredBook = () => {
  const storedBook = localStorage.getItem('read-book');
  if(storedBook){
    return JSON.parse(storedBook);
  }

  return [];
}

const getStoredBooks = () => {
  const storedBook = localStorage.getItem('wishlist-book');
  if(storedBook){
    return JSON.parse(storedBook);
  }

  return [];
}


const saveBook = id => {
  const storedBooks = getStoredBook();
  const exists = storedBooks.find(bookId => bookId === id);
  if(!exists){
    storedBooks.push(id);

    localStorage.setItem('read-book', JSON.stringify (storedBooks));
  }
}

const saveBooks = id => {
  const storedBooks = getStoredBooks();
  const exists = storedBooks.find(bookId => bookId === id);
  if(!exists){
    storedBooks.push(id);

    localStorage.setItem('wishlist-book', JSON.stringify (storedBooks));
  }
}

export {
  getStoredBook, saveBook, saveBooks, getStoredBooks
}