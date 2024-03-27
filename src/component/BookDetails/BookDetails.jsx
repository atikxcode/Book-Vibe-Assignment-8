import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getStoredBook, getStoredBooks, saveBook, saveBooks } from "../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {

  
  const books = useLoaderData();
  const {id} = useParams();
 
  const [book, setBook] =  useState();
  const [addedToList, setAddedToList] = useState(false);
  const [notify1Clicked, setNotify1Clicked] = useState(false);
  const idInt = parseInt(id)


  


  
  
  useEffect(() => {

    const bookData = books ? books.find(book => book.Id === idInt) : null;
    setBook(bookData)

    const storedBooksId = getStoredBook();
    const storedBooksIds = getStoredBooks();

    if(storedBooksId.includes(idInt) || storedBooksId.includes(idInt)){
      setAddedToList(true);
    }
    else{
      setAddedToList(false);
    }
    
       
  }, [books, id, book, idInt])









  const toast1 = () => toast("Already added to the read!");
  const toast2 = () => toast("Added to the wishlist!");
  const toast3 = () => toast("Added to the Read!");
  const toast4 = () => toast("Already added to the wishlist!");


  const notify1 = () => {
   
    const getRead = getStoredBook();
    const alreadyReaded = getRead?.find(readed => readed == book.Id)

    if(alreadyReaded){
      toast1();
    } else {
      saveBook(idInt);
      setAddedToList(true);
      setNotify1Clicked(true);
      toast3();
    }
    
     
  } 

  
 
  const notify2 = () => {
    
    const getWish =  getStoredBooks();
    const alreadyWished = getWish?.find(wished => wished == book.Id)
    
    if(alreadyWished){
      toast4();
    } else {
      if(!notify1Clicked){
        saveBooks(idInt);
        setAddedToList(true);
        toast2();
      }  else {
        toast1();
      } 
    }
   
     
  }

  

 


 

  
  return (
    <div className="container mx-auto my-10">

      <div className="flex flex-col lg:flex-row gap-10">

      <div className="bg-[#F3F3F3] p-5 lg:p-20 flex justify-center rounded-lg mb-6">
      <img className="items-center w-[220px] lg:w-[800px] h-[350px] lg:h-[564px]" src={book?.image} alt="" />
      </div>

      <div>
      <h2 className="text-[#131313] text-[30px] lg:text-[40px] font-bold mb-4 ml-2 lg:ml-0">{book?.bookName}</h2>
      <h2 className="text-[#131313CC] text-[18px] lg:text-[20px] font-medium mb-6 ml-2 lg:ml-0">By: {book?.author}</h2>
      <hr />
      <h2 className="mt-4 mb-4 text-[#131313CC] text-[18px] lg:text-[20px] font-medium ml-2 lg:ml-0">{book?.category}</h2>
      <hr />
      
      <p className="mt-6 text-[#131313B3] text-[15px] lg:text-[16px] leading-[26px] mb-6 ml-2 lg:ml-0"><span className="text-[#131313] text-[16px] font-bold">Review:</span> {book?.review}</p>

      <p className="flex gap-3 items-center mb-6 ml-2 lg:ml-0">
        <span className="text-[#131313] text-[14px] lg:text-[16px] font-bold">Tag</span>
        <span className="text-[#23BE0A] text-[14px] lg:text-[16px] font-medium bg-[#F3F3F3] p-3 rounded-[30px]">{book?.tags[0]}</span>
        <span className="text-[#23BE0A] text-[14px] lg:text-[16px] font-medium bg-[#F3F3F3] p-3 rounded-[30px]">{book?.tags[1]}</span>
      </p>
      <hr />

      <p className="text-[#131313B3] text-[16px] mt-6 ml-2 lg:ml-0">Number of Pages: <span className="text-[#131313] text-[16px] font-semibold ml-4"> {book?.totalPages}</span></p>
      <p className="text-[#131313B3] text-[16px] ml-2 lg:ml-0">Publisher: <span className="text-[#131313] text-[16px] font-semibold ml-4"> {book?.publisher}</span></p>
      <p className="text-[#131313B3] text-[16px] ml-2 lg:ml-0">Year of publishing: <span className="text-[#131313] text-[16px] font-semibold ml-4"> {book?.yearOfPublishing}</span></p>
      <p className="text-[#131313B3] text-[16px] mb-8 ml-2 lg:ml-0">Rating: <span className="text-[#131313] text-[16px] font-semibold ml-4"> {book?.rating}</span></p>

      <div className="flex gap-4 ml-2 lg:ml-0">
        <button  onClick={notify1} className="border-[1px] border-[#1313134D] text-[#131313] text-[18px] font-bold pt-[12px] pb-[12px] pr-[30px] pl-[30px] rounded-[8px]">Read</button>
        <button onClick={notify2} className=" text-white text-[18px] font-bold pt-[12px] pb-[12px] pr-[30px] pl-[30px] rounded-[8px] bg-[#50B1C9]">Wishlist</button>
        
      </div>
      </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;